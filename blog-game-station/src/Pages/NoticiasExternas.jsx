import React, { useEffect, useState } from "react";

const API_KEY = "08aa45d5f67c455f8621f4bdfa0726af"; // substitua com sua API Key válida
const endpoint = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=08aa45d5f67c455f8621f4bdfa0726af`;
const NoticiasExternas = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok" && data.articles) {
          setNoticias(data.articles);
        } else {
          setErro(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar notícias:", err);
        setErro(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-white">Carregando notícias sobre games...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-500">Erro ao carregar notícias. Verifique sua API Key ou conexão.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#080808] text-white py-10 px-6">
      <h2 className="text-2xl font-bold mb-4">Notícias de Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {noticias.map((n, i) => (
          <div
            key={i}
            className="bg-[#1e1e1e] p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            {n.urlToImage && (
              <img
                src={n.urlToImage}
                alt={n.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}
            <h3 className="font-semibold mb-2">{n.title}</h3>
            <p className="text-sm text-gray-300 mb-3">
              {n.description || "Sem descrição disponível."}
            </p>
            <a
              href={n.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm transition"
            >
              Ler matéria completa
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasExternas;
