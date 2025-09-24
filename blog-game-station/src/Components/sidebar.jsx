import React from "react";
import { Link } from "react-router-dom";
import { Home, FileText, Layers, Globe } from "lucide-react";
import useAuthStore from "../stores/useAuthStore";

export default function Sidebar() {

  const { user, logout, isAuthenticated } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[#121212] border-r border-[#1f1f1f] shadow-lg flex flex-col">
      <div className="px-6 py-6 border-b border-[#1f1f1f]">
        <h1 className="text-2xl font-bold text-[#43CD80]">Dashboard</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1f1f1f] hover:text-[#43CD80] transition"
        >
          <Home size={20} />
          Home
        </Link>
        <Link
          to="/posts"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1f1f1f] hover:text-[#43CD80] transition"
        >
          <FileText size={20} />
          Posts
        </Link>
        <Link
          to="/posts-gerados"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1f1f1f] hover:text-[#43CD80] transition"
        >
          <Layers size={20} />
          Posts gerados
        </Link>
        <Link
          to="/home"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1f1f1f] hover:text-[#43CD80] transition"
        >
          <Globe size={20} />
          Acessar blog
        </Link>

        <Link to={'/login'}>
          <button className="text-white text-sm bg-red-700 px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >Sair</button>
        </Link>

      </nav>
    </aside>
  );
}
