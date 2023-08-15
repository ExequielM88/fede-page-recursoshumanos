import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import  "./header.css"

const Header = () => {

  const [scrolling, setScrolling] = useState(false);

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

  return (
    <header className={`header ${scrolling ? "scrolling" : ""}`}>
      <Link to="/"><img className='header-logo' src="http://focusrrhh.com/wp-content/uploads/2021/07/logo-focus-retinma.png" alt="" /></Link>
      <nav className='nav-header'>
        <ul className='ul-header'>
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