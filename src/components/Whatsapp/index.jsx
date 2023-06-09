import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/Ai';
import './styles.css'

const Whatsapp = () => {
  return (
    <div className='wpIcon'>
        <div className='borderWP'>
            <a href="https://web.whatsapp.com/send?phone=5493815584946&text=Hola%20Estetic%20Make%20Up"><AiOutlineWhatsApp className='wp'/></a>
        </div>
    </div>
  )
}

export default Whatsapp