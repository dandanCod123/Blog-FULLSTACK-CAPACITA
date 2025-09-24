// src/pages/Dashboard.jsx
import React from "react";
import usePostsStore from "../stores/usePostsStore";
import useAuthStore from "../stores/useAuthStore";
import { Link, Links } from "react-router";

export default function Dashboard() {
  const { posts } = usePostsStore();
   const { user, isAuthenticated } = useAuthStore();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#43CD80]">
        Bem vindo Sr(a). {user?.name}
      </h2>

      {/* Grade de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Card Estatísticas */}
        <Link to={'/posts'}>
        <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 hover:shadow-[#43CD80]/50 transition">
          <h3 className="text-xl font-semibold text-[#43CD80]">Posts</h3>
          <p className="text-gray-400 mt-2">Visualize seus Posts</p>
        </div>
        </Link>
        

        {/* Card Últimos Posts */}
        <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 hover:shadow-[#43CD80]/50 transition">
          <h3 className="text-xl font-semibold text-[#43CD80]">Últimos Posts</h3>
          <p className="text-gray-400 mt-2">Gerencie seus conteúdos</p>
        </div>

        {/* Card Configurações */}
        <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 hover:shadow-[#43CD80]/50 transition">
          <h3 className="text-xl font-semibold text-[#43CD80]">Configurações</h3>
          <p className="text-gray-400 mt-2">Ajuste suas preferências</p>
        </div>
      </div>

      {/* Listagem dos posts (apenas títulos) */}
      <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-semibold text-[#43CD80] mb-4">
          Todos os Posts
        </h3>

        {posts.length > 0 ? (
          <ul className="space-y-3">
            {posts.map((post) => (
              <li
                key={post.id}
                className="border border-[#43CD80]/40 rounded-lg p-3 text-white bg-[#252525]"
              >
                {post.title}
                
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Nenhum post encontrado.</p>
        )}
      </div>
    </div>
  );
}
