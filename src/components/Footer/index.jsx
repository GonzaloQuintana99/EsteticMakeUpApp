import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/Ai';
import { AiFillFacebook } from 'react-icons/Ai';
import { AiFillPhone } from 'react-icons/Ai';
import { GrMail } from 'react-icons/Gr';

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className='footerSubContainer'>
        <div className='containers'>
            <h2 className='footerTitles'>INFORMACIÓN</h2>
                <ul>
                    <li className='infoListItem'><Link to="/">INICIO</Link></li>
                    <li className='infoListItem'><Link to="/sobrenosotros">SOBRE NOSOTROS</Link></li>
                    <li className='infoListItem'><Link to="/testimonios">TESTIMONIOS</Link></li>
                    <li className='infoListItem'><Link to="/preguntasfrecuentes">PREGUNTAS FRECUENTES</Link></li>
                    <li className='infoListItem'><Link to="/politicasprivacidad">POLÍTICAS DE PRIVACIDAD</Link></li>
                </ul>
        </div>
        <div className='containers'>
            <h2 className='footerTitleST'>ESTETIC MAKE UP</h2>
            <p>En las redes</p>
            <div className='iconContainer'>
            <span className='insta'><a href="https://www.facebook.com/estetic.maquillajetuc"><AiOutlineInstagram className='instaIcon'/></a></span>
            <span className='face'><a href="https://www.instagram.com/esteticmakeup/"><AiFillFacebook className='instaIcon'/></a></span>
            </div>
        </div>
        <div className='containers'>
            <h2 className='footerTitles'>¿DÓNDE ESTAMOS?</h2>
            <p className='subtitles'>San Miguel de Tucumán</p>
            <div className='phoneContact'>
            <AiFillPhone className='phoneIcon'/>
            <p className='phoneNumber'>3815584946</p>
            </div>
            <p className='subtitles'>de Lunes a Sabados de 9:00 a 14:00.</p>
            <div className='phoneContact'>
            <GrMail className='phoneIcon'/>
            <p className='phoneNumber'>ventas@esteticmakeup.com</p>
            </div>
        </div>
        <div className='containers'>
            <h2 className='footerTitles'>NEWSLETTER</h2>
            <p className='subtitles'>Recibí ofertas en tu email</p>

            <div className='containerNL'>
            <input className='userNL' type="text" placeholder="Nombre" required/>
            <input className='mailNL' type="mail" placeholder="Email" required/>

            <button className='btnSub' type="submit">SUSCRIBIRME</button>
            </div>

        </div>
        </div>
    </div>
        <div className='footerFooter'>
            <p className='footerText'>© 2023 Estetic Make Up - Todos los derechos reservados.</p>
        </div>
        </>

  )
}

export default Footer