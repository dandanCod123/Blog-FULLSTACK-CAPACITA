import React, { useEffect } from "react";
import usePostStore from "../stores/usePostsStore";

const PostCard = () => {
  const { posts, fetchPosts, deletePost, isLoading, error } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (isLoading) return <p className="text-gray-400">Carregando posts...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  if (posts.length === 0) {
    return (
      <div className="bg-[#1a1a1a] rounded-xl shadow p-6 text-center text-gray-400">
        Nenhum post criado ainda.
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm transition hover:shadow-2xl"
        >
          {/* Imagem */}
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-50 object-cover"
            />
          )}

          {/* Conteúdo */}
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              {post.description}
            </p>
            <p className="text-xs text-gray-500">
              Categoria: {post.category || "Sem categoria"}
            </p>

            {/* Botões */}
            <div className="flex justify-between items-center mt-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                Ler Post
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>

            {/* Datas */}
            <p className="text-xs text-gray-500 mt-2">
              Criado: {new Date(post.createdAt).toLocaleDateString("pt-BR")}
            </p>
            <p className="text-xs text-gray-400">
              Atualizado: {new Date(post.updatedAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
