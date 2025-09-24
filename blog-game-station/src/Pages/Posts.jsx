import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../Components/PostCard";

const Posts = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Header da página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Meus Posts</h1>
        <Link
          to="/posts/criar"
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-lg shadow transition"
        >
          Novo Post
        </Link>
      </div>

      {/* Cards */}
      <PostCard />
    </div>
  );
};

export default Posts;
