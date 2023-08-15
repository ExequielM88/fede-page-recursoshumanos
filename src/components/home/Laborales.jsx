import React from 'react'
import "./styles/laborales.css"

const Laborales = () => {
  return (
      <div>
      <h1 className='title'>Ofertas Laborales</h1>
      <div className='container-laborales'>
      <div className="container-img-laborales"> 
        <img src="../img/oportunidadeslaborales.jpg" alt="" />
      </div>
      <div className='info-laboral'>
        <h2>Ofertas Laborales</h2>
        <p>La inspiración existe,<br /> pero tiene que <br /> encontrarte trabajando.</p>
        <button>Trabajos</button>  
      </div>   
      </div>
      </div>
  )
}

export default Laborales