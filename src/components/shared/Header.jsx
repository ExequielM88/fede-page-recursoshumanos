import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import  "./header.css"

const Header = () => {

  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true); // Estado para controlar el menú desplegable
  // Maneja el cambio de estado cuando haces scroll
  
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Agrega un listener para el evento de scroll al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  }; // Cambia el estado del menú desplegable al hacer clic en el icono


  return (
    <header className={`header ${scrolling ? "scrolling" : ""}`}>
      <Link to="/"><img className='header-logo' src="../../img/logo.png" alt="" /></Link>
      <nav >
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`ul-header ${menuOpen ? 'open' : ''}`}>
          <li><Link className='link' to="/SobreNosotros">Sobre Nosotros</Link></li>
          <li><Link className='link' to="/NuestrosServicios">Nuestros Servicios</Link></li>
          <li><Link className='link' to="/OportunidadesLaborales">Oportunidades Laborales</Link></li>
          <li><Link className='link' to="/Contacto">Contacto</Link></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header