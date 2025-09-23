import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-center py-6 text-white relative overflow-hidden">
      <p className="mb-4 text-sm text-gray-300">GameStation © 2025</p>

      <div className="flex justify-center gap-6">
        <a
          href="#"
          className="text-[#43CD80] text-2xl transition-transform transform hover:scale-110 neon-glow"
          aria-label="Twitter"
        >
          🐦
        </a>
        <a
          href="#"
          className="text-[#43CD80] text-2xl transition-transform transform hover:scale-110 neon-glow"
          aria-label="Facebook"
        >
          📘
        </a>
        <a
          href="#"
          className="text-[#43CD80] text-2xl transition-transform transform hover:scale-110 neon-glow"
          aria-label="Instagram"
        >
          📷
        </a>
      </div>

      {/* Tailwind + CSS custom para efeito glow */}
      <style>{`
        .neon-glow {
          text-shadow: 0 0 5px #43CD80;
          transition: text-shadow 0.3s ease;
        }

        .neon-glow:hover {
          text-shadow: 0 0 15px #43CD80;
        }

        @keyframes brilho-cristal {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
