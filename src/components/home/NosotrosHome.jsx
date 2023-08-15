import React from 'react'
import "./styles/nosotroshome.css"

const NosotrosHome = () => {
  return (
    <div className='cointener-nosotros-home'>
        <h1 className='nosotros'>Nosotros</h1>
        <div className='container-infohome'>
          <div className='container-image'>
            <img src="../img/nosotroshome.jpg" alt="" />
          </div>
          <div className='info-nosotros'>
            <h3>Focus</h3>
            <h2>Sobre Nosotros</h2>
            <p>El conocimiento y la habilidad suman, pero la actitud multiplica.</p>
            <button className='button-nosotros-home'>Ver mas</button>
          </div>
        </div>
    </div>
  )
}

export default NosotrosHome