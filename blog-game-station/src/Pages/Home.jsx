import React, { Fragment } from "react";

import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Noticia from '../Components/Noticias'
import { Sobre } from '../Components/Sobre'
import Footer from '../Components/Footer'
import { Route, Routes } from "react-router-dom";
import ActiveSlider from "../Components/ActiveSlider";
import ImageSlider from "../Components/ImageSlider";
import NoticiasExternas from "./NoticiasExternas";




export default function Home() {
  
  return (
    <>
    <Header/>
     <Hero/>
     <Noticia/>
     {/* <ActiveSlider/> */}
     <ImageSlider/>
     <NoticiasExternas/>
     <Sobre/>
     <Footer/>
    </>
    
  )
}


