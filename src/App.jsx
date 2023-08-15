import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Home from './pages/Home'
import NuestrosServicios from "./pages/SobreNosotros"
import OportunidadesLaborales from "./pages/OportunidadesLaborales"
import SobreNosotros from "./pages/SobreNosotros"
import Contacto from "./pages/Contacto"


function App() {
  

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
