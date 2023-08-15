import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer' >
      <div className='container-footer'>
      <div className='redes border'>
        <div className='img-footer'>
          <img className='header-logoo' src="../../img/logo.png" alt="" />
        </div>
        <div className='container-redes'>
          <i className='bx bxl-facebook-square bxx'></i>
          <i className='bx bxl-linkedin-square bxx'></i>
          <i className='bx bxl-instagram-alt bxx'></i>
        </div>
      </div>
      <div className='contactos border'>
        <h1 className='h1-footer'>Contacto:</h1>
        <div>
          <div>
            <h4>Federico Rodriguez</h4>
            <i className='bx bxl-whatsapp'>+54 351 511 7660</i>
          </div>
          <div>
            <h4>Raquel Esquinasy</h4>
            <i className='bx bxl-whatsapp'>+54 351 558 6891</i>
          </div>
          <i className='bx bx-envelope'><a href="">info@focusrrhh.com</a></i>
        </div>
      </div>
      <div className="localizacion border">
        <h1 className='h1-footer'>Dirrección:</h1>
        <p>Miguel C. Del Corro 425 - 11A<br />
           Córdoba Capital,
           Argentina</p>
      </div>
      </div>
      <p className='copy'>&copy; Focus. Todos los derechos reservados.Exequiel Mainero</p>
    </footer>
  )
}

export default Footer