import React, { useState } from "react";
import usePostStore from "../stores/usePostsStore";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    image: "",
  });
  const [error, setError] = useState("");
  const { createPost, isLoading } = usePostStore();
  const navigate = useNavigate();

  // ação para enviar dados
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const result = await createPost(formData);

      if (result.success) {
        navigate("/posts");
      }
    } catch (error) {
      setError("Erro ao cadastrar o post: " + error.message);
    }
  };

  // ação de cancelamento
  const cancelAction = () => {
    if (
      formData.title ||
      formData.description ||
      formData.content ||
      formData.category ||
      formData.image
    ) {
      if (window.confirm("Tem certeza que deseja descartar os dados do post?")) {
        navigate("/posts");
      }
    } else {
      navigate("/posts");
    }
  };

  // ação para cada entrada
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#242424] shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Novo Post
        </h2>

        {error && (
          <div className="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Descrição
            </label>
            <textarea
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Conteúdo
            </label>
            <textarea
              name="content"
              rows={5}
              value={formData.content}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Categoria
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Imagem (URL)
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-3xl transition-colors"
              onClick={cancelAction}
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-3xl transition-colors"
            >
              {isLoading ? "Adicionando..." : "Adicionar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
