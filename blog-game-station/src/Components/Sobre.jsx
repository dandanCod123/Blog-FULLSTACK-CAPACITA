import React from "react";
import Spline from "@splinetool/react-spline";

export function Sobre() {
  return (
    <div className="bg-[#080808] py-16 px-6 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl w-full">
        
        {/* Spline 3D */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px]">
             <Spline scene="https://prod.spline.design/cC0neEcYjBDiOETv/scene.splinecode" />
               
          {/* <Spline
        scene="https://prod.spline.design/xbg0pMctD6QCuVlF/scene.splinecode" 
      /> */}
        </div>

        {/* Texto */}
        <div className="text-gray-100 max-w-xl w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Game Station</h2>
          <p className="text-base leading-relaxed">
            Aqui você encontra notícias, reviews, dicas, vídeos e muita inspiração gamer.
            <br className="hidden md:block" />
            Explore conteúdos feitos por quem entende de verdade sobre esse mundo!
          </p>
        </div>

      </div>
    </div>
  );
}
