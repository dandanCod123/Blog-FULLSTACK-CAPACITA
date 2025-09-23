import React from "react";

export default function Page() {
    return(
        <body>
  <header>
    <div class="container">
      <h1 id="gameStationTitle">GameStation</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Blog</a>
        <a href="#">Contato</a>
      </nav>
    </div>
  </header>

  <section class="banner">
    <div class="banner-text">
      <h2>Mergulhe no universo dos games</h2>
      <p>Experimente novas experiências com tecnologia e inovação!</p>
      <a href="#" class="btn">Comece agora</a>
    </div>
  </section>

  <section class="noticias">
    <h2>Últimas notícias</h2>
    <p>Notícias mais recentes sobre o universo tech gamer</p>
    <div class="noticias-cards">
      <div class="noticia">
        <img src="https://media.sketchfab.com/models/3b61335c2a004a9ea31c8dab59471222/thumbnails/db08242aa53d43e096c136a681e83eb5/015c1e9eec23449c9432c27402216dd3.jpeg" alt="Cidade Submersa" />
        <p><strong>CyberCity 2099</strong> ganha atualização secreta com cidade submersa jogável.</p>
        <button data-noticia-id="0">Leia mais</button>
      </div>
      <div class="noticia">
        <img src="https://images.ctfassets.net/rporu91m20dc/4xdVNt0y1ik2Is6CEiaeKq/27fddb5035db3a00a4f8481cb50a60a2/Blades_05CuttingEdge_600x337-01.jpg" alt="Personagem Enigmático" />
        <p>Personagem enigmático aparece em <strong>Elder Blades Online</strong> e ninguém sabe como desbloqueá-lo.</p>
        <button data-noticia-id="1">Leia mais</button>
      </div>
      <div class="noticia">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsfcj8nE68H26vyi1s4lkdeAfOapsO621OQ&s" alt="FPS com IA" />
        <p>Jogo de tiro com IA adaptativa revoluciona o gênero: inimigos aprendem seus padrões!</p>
        <button data-noticia-id="2">Leia mais</button>
      </div>
      <div class="noticia">
        <img src="https://preview.redd.it/canvas-size-and-assets-v0-iow1atzockyb1.jpg?width=1080&crop=smart&auto=webp&s=043133a83b642a13d03821e2285b5bd9491c10e1" alt="Game Indie Pixel Art" />
        <p>Game indie de pixel art mistura RPG tático e culinária mágica — e está fazendo sucesso!</p>
        <button data-noticia-id="3">Leia mais</button>
      </div>
    </div>
  </section>

  <section class="sobre">
    <div class="sobre-container">
      <img src="https://cdn.pixabay.com/photo/2024/04/29/10/26/gaming-8727562_640.jpg" alt="Sobre imagem" />
      <div class="sobre-texto">
        <h2>Game Station</h2>
        <p>
          Aqui você encontra notícias, reviews, dicas, vídeos e muita inspiração gamer.
          <br />
          Explore conteúdos feitos por quem entende de verdade sobre esse mundo!
        </p>
      </div>
    </div>
  </section>

  <footer>
    <p>GameStation © 2025</p>
    <div class="social">
      <a href="#">🐦</a>
      <a href="#">📘</a>
      <a href="#">📷</a>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
    )
}