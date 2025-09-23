import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/arcade-bg.png";
import useAuthStore from "../stores/useAuthStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "senha") setSenha(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!email || !senha) {
      setError("Preencha os campos obrigatórios");
      return;
    }

    try {
      setLoading(true);

      // Chama a função de login do Zustand
      const { success, user, error: loginError } = await login(email, senha);

      if (!success) {
        setError(loginError);
        return;
      }

      console.log("Usuário logado:", user);
      navigate("/home");
    } catch (err) {
      setError("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#1d1d1d] text-white border-1 border-[#0e7a3f] rounded-xl shadow-[0_0_20px_#43CD80] hover:shadow-[0_0_30px_#43CD80] transition-shadow duration-300 flex flex-col gap-6 p-8 w-full max-w-md"
      >
        <h2 className="text-center font-bold text-2xl font-mono">Login</h2>

        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="user@email.com"
          className="bg-gray-200 border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43CD80] text-black placeholder-gray-500"
        />

        <input
          type="password"
          name="senha"
          value={senha}
          onChange={handleChange}
          placeholder="********"
          className="bg-gray-200 border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43CD80] text-black placeholder-gray-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="text-white bg-[#43CD80] text-center rounded-lg px-4 py-2 hover:bg-green-500 transition-colors font-bold"
        >
          {loading ? "Entrando..." : "Login"}
        </button>

        {error && (
          <p className="text-red-500 text-sm font-medium">Ocorreu um erro: {error}</p>
        )}

        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-[#43CD80] border border-[#43CD80] rounded-lg px-4 py-2 hover:bg-[#43CD80] hover:text-black transition-colors"
        >
          Não tem conta?
        </button>
      </form>
    </div>
  );
}
