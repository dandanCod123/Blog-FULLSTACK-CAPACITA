import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/arcade-bg.png";
import useAuthStore from "../stores/useAuthStore";

export default function Cadastro() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // pegamos a função de register do useAuthStore
  const { register, isLoading } = useAuthStore();

  const HandleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUserName(value);
    }
    if (name === "password") {
      setSenha(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  };

  const HandleSubmit = async (event) => {
  event.preventDefault();

  if (!userName || !email || !senha) {
    setError("Campo obrigatório vazio");
    return;
  }

  try {
    await register(userName, email, senha);


    setUserName("");
    setSenha("");
    setEmail("");
    setError("");

    navigate("/login");
  } catch (err) {
    setError(err.message || "Erro ao cadastrar usuário");
  }
};


  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={HandleSubmit}
        className="bg-[#1d1d1d] text-white border-1 border-[#0e7a3f] rounded-xl shadow-[0_0_20px_#43CD80] hover:shadow-[0_0_30px_#43CD80] transition-shadow duration-300 flex flex-col gap-6 p-8 w-full max-w-md"
      >
        <h2 className="text-center font-bold text-2xl font-mono">
          Cadastro do Usuário
        </h2>

        <input
          type="text"
          name="username"
          value={userName}
          onChange={HandleChange}
          placeholder="Nome completo"
          className="bg-gray-200 border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43CD80] text-black placeholder-gray-400"
        />

        <input
          type="text"
          name="email"
          value={email}
          onChange={HandleChange}
          placeholder="user@email.com"
          className="bg-gray-200 border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43CD80] text-black placeholder-gray-400"
        />

        <input
          type="password"
          name="password"
          value={senha}
          onChange={HandleChange}
          placeholder="********"
          className="bg-gray-200 border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43CD80] text-black placeholder-gray-400"
        />

        <button
          type="submit"
          className="text-white bg-[#43CD80] text-center rounded-lg px-4 py-2 hover:bg-green-500 transition-colors font-bold"
          disabled={isLoading}
        >
          {isLoading ? "Cadastrando..." : "Cadastrar"}
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center font-medium">
            Ocorreu um erro: {error}
          </p>
        )}

        <button
          type="button"
          className="text-[#43CD80] border border-[#43CD80] rounded-lg px-4 py-2 hover:bg-[#43CD80] hover:text-black transition-colors"
          onClick={() => navigate("/login")}
        >
          Já tem conta?
        </button>
      </form>
    </div>
  );
}
