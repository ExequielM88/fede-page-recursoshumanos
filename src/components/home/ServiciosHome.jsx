import React from 'react'
import "./styles/servicioshome.css"
const ServiciosHome = () => {
  return (
    <div className='container-homeservice'>
      <h1 className='title'>Nuestros Servicios</h1>
      <div className='info-service'>
        <div className="container-card cardd">
          <div className="container-img">
            <img  src="../img/servicio1.png" alt="" />
          </div>
          <div className="info-card">
           <h2 className='second-title'>GESTIÓN INTEGRAL DE RECURSOS HUMANOS:</h2>
           <p className="parrafos ">
           Somos un equipo de profesionales formados en Psicología, Recursos Humanos y Negocios; hemos  forjado nuestra experiencia en Consultoría y en Organizaciones de primer nivel.
           <br />
            Nuestra  especialidad  es  diseñar  e  implementar  "a medida"  Acciones  y  Programas  de Capacitación,Desarrollo y Gestión del Talento, focalizándonos en la efectividad y la excelencia de cada proyecto. 
           </p> 
          </div>
      </div>
      <div className="container-card card">
        <div className="container-img">
          <img  src="../img/servicio2.png"alt="" />
        </div>
        <div className="info-card">
         <h2 className='second-title'>RECLUTAMIENTO:</h2>
         <p className="parrafos parrafo">
          El reclutamiento es el primer paso en la construcción del capital humano de una organización.
          <br />
          Mediante un proceso organizado identificamos y atraemos futuros empleados idóneos y capacitados según lo requerido por cada empresa.
         </p> 
        </div>
      </div>
      <div className="container-card cardd">
        <div className="container-img">
          <img  src="../img/servicio3.png" alt="" />
        </div>
        <div className="info-card">
         <h2 className='second-title'>SELECCIÓN DE PERSONAL:</h2>
         <p className="parrafos parrafo">
         Nuestra amplia experiencia nos permite realizar procesos de selección fiables y adaptados a las necesidades de cada cliente, contando con las últimas técnicas y herramientas existentes en el mercado, con una interlocución única y una dedicación exclusiva durante el proceso.
         <br />
         Conocimiento del mercado y las mejores técnicas de captación nos permiten buscar y acceder a  profesionales que por tiempo y base de datos, una compañía no tiene capacidad de desarrollar a nivel interno. La diferencia está en nuestra experiencia y visión global para acceder a los   perfiles más demandados.
         </p> 
        </div>
        </div>
      </div>
      <div className='container-button'>
        <button className='service-button'>Ver todos nuestros servicios</button>
      </div>   
    </div>
  )
}

export default ServiciosHome