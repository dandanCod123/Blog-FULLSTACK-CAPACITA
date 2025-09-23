import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/GAME-1.2.png";
import city2 from "../assets/GAME-2.2.png";
import city3 from "../assets/GAME-3.2.png";
import planet1 from "../assets/GAME-4.2.png";
import planet2 from "../assets/GAME-5.2.png";


const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)
    );
  };

  const images = [city1, city2, city3, planet1, planet2,];
  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.8, zIndex: 3 },
    left: { x: "-90%", scale: 0.6, zIndex: 2 },
    right: { x: "90%", scale: 0.6, zIndex: 2 },
    right1: { x: "50%", scale: 0.8, zIndex: 3 },
    
  };

  return (
    <div className="relative bg-[#080808] py-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Container das imagens */}
      <div className="relative w-full max-w-6xl h-[500px]">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-xl"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "100%", maxWidth: "500px", height: "450px" }}
          />
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="mt-10 flex gap-6 z-10">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition-all"
          onClick={handleBack}
        >
          ⬅ Voltar
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition-all"
          onClick={handleNext}
        >
          Avançar ➡
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
