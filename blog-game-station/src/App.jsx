import React, { Fragment } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './Components/Page'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Noticia from './Components/Noticias'
import { Sobre } from './Components/Sobre'
import Footer from './Components/Footer'
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";


function App() {
  

  return (
    <>
     {/* <Header/>
     <Hero/>
     <Noticia/>
     <Sobre/>
     <Footer/> */}

      <Fragment>
          <Routes>
            <Route path="/" element={<Cadastro/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            
          </Routes>
        </Fragment>
    
    </>
  )
}

export default App
