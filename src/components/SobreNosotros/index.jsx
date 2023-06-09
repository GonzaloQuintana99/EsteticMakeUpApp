import React from 'react'
import { AiFillPhone } from 'react-icons/Ai';
import { GrMail } from 'react-icons/Gr';

const SobreNosotros = () => {
  return (
    <>
    <div className='containerNos animate__animated animate__fadeIn'>
        <h2>Estetic Make Up</h2>
        
        <div className='preguntas'>
            <p>Comenzamos hace mas de 5 años con las ventas online al rededor del Pais, nos dedicamos a vender maquillaje por mayor original y simil, somos una mini pymes en crecimiento. Llegamos al mercado para brindar a nuestras clientas los mejores precios, la mejor atencion y una oportunidad de empezar su negocio con minimas inversiones.</p>
        </div>

    </div>
        <div className='atContainer'>
          <div className='containerAt'>
            <h2>ATENCIÓN TELEFÓNICA</h2>
            <div className='subContainerAt'>
              <AiFillPhone className='phoneIcon'/>
              <p className='phoneNumber'>3815584946</p>
            </div>
          </div>
          <div className='containerAt'>
            <h2>ATENCIÓN AL PÚBLICO</h2>
            <div className='subContainerAt'>
              <GrMail className='phoneIcon'/>
              <p className='phoneNumber'>ventas@esteticmakeup.com</p>
            </div>
          </div>
          <div className='containerAt'>
              <h2>HORARIOS DE ATENCIÓN</h2>
              <p className='hrs'>de Lunes a Sabados de 9:00 a 14:00.</p>
          </div>
        </div>
        </>
  )
}

export default SobreNosotros