import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Home from './pages/Home'
import NuestrosServicios from "./pages/NuestrosServicios"
import OportunidadesLaborales from "./pages/OportunidadesLaborales"
import SobreNosotros from "./pages/SobreNosotros"
import Contacto from "./pages/Contacto"


function App() {
  

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SobreNosotros" element={<SobreNosotros />}></Route>
        <Route path="/NuestrosServicios" element={<NuestrosServicios />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
