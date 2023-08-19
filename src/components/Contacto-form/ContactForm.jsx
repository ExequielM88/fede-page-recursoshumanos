import React from 'react'
import "./styles/contact-form.css"

const ContactForm = () => {
  return (
    <div className='content'>
      <h1 className='title'>Envianos tu consulta</h1>
      <div className='container-contact-form'>
      <div className='form-contact'>
        <div className='localizacion-form '>
          <h1 className='h1-footer'>Contacto:</h1>
          <div className='info-form'>
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
        </div >
        <div className="localizacion-form ">
          <h1 className='h1-footer'>Dirrección:</h1>
          <p>Miguel C. Del Corro 425 - 11A<br />
             Córdoba Capital,
             Argentina
          </p>
        </div>
        <div className='redes-form'>
          
          <div className='img-form'>
             <img className='header-logoo' src="../../img/logo.png" alt="" />
          </div>
          <div className='container-redes'>
            <i className='bx bxl-facebook-square bxx'></i>
            <i className='bx bxl-linkedin-square bxx'></i>
            <i className='bx bxl-instagram-alt bxx'></i>
          </div>
        
        </div>
      </div>
       <form  className='form'>
        <input type="text" name='name' placeholder='Your full name' required />
        <input type="email" name='email' placeholder='Your mail' required/>
        <input type="text" name='asunto' placeholder='asunto' required />
        <textarea name="message" rows="7" placeholder='your message' required></textarea>
        <input  type="file" name="cv" />
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
      </div> 
    </div>
  )
}

export default ContactForm