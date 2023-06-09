import React from 'react'
import './styles.css'
import Swiper, { Navigation, Pagination } from 'swiper';
import SliderSells from '../SliderSells';
import SliderBanner from '../SliderBanner';
import { Link } from 'react-router-dom';
import SliderNew from '../SliderNew';
import { AiFillPhone } from 'react-icons/Ai';
import { AiOutlineWhatsApp } from 'react-icons/Ai';
import { GrMail } from 'react-icons/Gr';
  
  const MainPage = () => {
    
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
    });

  return (

      <div>
        <SliderBanner/>
        <div className='wpIcon'>
        <div className='borderWP'>
            <a href="https://web.whatsapp.com/send?phone=5493815584946&text=Hola%20Estetic%20Make%20Up"><AiOutlineWhatsApp className='wp'/></a>
        </div>
        </div>
        <SliderSells/>
        <div className='banner4'>
        <Link to="/itemlist"><img className='banner4img' src="/img/banner4.png" alt="banner"/></Link>
        </div>
        <SliderNew/>
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
      </div>

  )
}

export default MainPage