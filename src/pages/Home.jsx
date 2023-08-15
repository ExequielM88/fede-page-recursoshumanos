import React, { useState } from "react";
import NosotrosHome from "../components/home/NosotrosHome"
import "./styles/home.css"
import ServiciosHome from '../components/home/ServiciosHome'
import Laborales from '../components/home/Laborales'
import ContactoHome from '../components/home/ContactoHome'

const Home = () => {

  const gif= "../img/video-gif.gif"
    
  return (
    <div className='home'>
      <header >
      <img src={gif}  alt="My GIF" />
      </header>
      <NosotrosHome />
      <ServiciosHome />
      <Laborales />
      <ContactoHome />
      
    </div>
  )
}

export default Home