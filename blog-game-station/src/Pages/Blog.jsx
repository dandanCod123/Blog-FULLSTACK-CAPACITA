import React from 'react';
import bgImage from "../assets/images-games.jpg"; // coloque sua imagem na pasta assets

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Imagem de topo */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={bgImage}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-gray-900">
          Novo jogo de tiro com IA que aprende com você muda tudo no gênero FPS!
        </h1>

        <p className="text-lg leading-relaxed text-justify">
          Imagine um jogo de tiro em que os inimigos não apenas 
          atacam... mas aprendem com você. Esqueça padrões previsíveis ou táticas 
          que funcionam sempre — o novo título que está revolucionando o gênero FPS 
          (First Person Shooter) aposta em uma IA adaptativa, capaz de analisar suas ações, 
          prever seus próximos passos e evoluir em tempo real.

          <br /><br />
          Essa inovação marca um novo capítulo nos jogos de tiro. Em vez de enfrentar 
          inimigos que repetem os mesmos movimentos, agora o jogador lida com oponentes que se
           tornam mais inteligentes a cada confronto. Usou muito a mesma rota? Eles vão preparar 
           uma emboscada. Está sempre usando a mesma arma? Eles vão aprender a se defender melhor 
           contra ela. O resultado: nenhuma partida é igual à anterior.
          
           <br /><br />
           A tecnologia por trás dessa inteligência adaptativa é baseada em algoritmos de machine learning que 
           coletam dados da sua jogabilidade para moldar o comportamento dos inimigos. Essa IA não apenas reage — 
           ela antecipa e se adapta, tornando o desafio mais dinâmico, realista e imersivo.
           <br /><br />
           Além do impacto na jogabilidade, essa inovação também muda a forma como os jogadores se relacionam com o game. 
           Agora é preciso repensar estratégias constantemente, desenvolver habilidades mais variadas e manter o raciocínio 
           ágil. É o tipo de experiência que faz até os veteranos suarem na cadeira.

           <br /><br />
           Essa abordagem representa uma evolução significativa em comparação com os tradicionais scripts de IA, que, apesar de 
           eficientes, têm limitações claras. A promessa é que essa tecnologia se torne um novo padrão nos FPS do futuro, elevando 
           a dificuldade e a diversão a um novo nível.
           <br /><br />
           Se você busca mais realismo, desafio e emoção, esse jogo promete entregar tudo isso com uma dose de imprevisibilidade 
           que vai manter você colado à tela por horas.
        </p>
      </div>
    </div>
  );
}
