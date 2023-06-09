import React from 'react'
import { Link } from 'react-router-dom'

const CategoryAccesorios = () => {
  return (
  <ul className='maquillaje-subcategories'>
        <li><Link to="/category/Fragancias" className={'maquillaje-subcategories-item'}>FRAGANCIAS</Link></li>
        <li><Link to="/category/Porta Cosmeticos" className='maquillaje-subcategories-item'>PORTA COSMETICOS</Link></li>
        <li><Link to="/category/Utilidades" className='maquillaje-subcategories-item'>UTILIDADES</Link></li>
    </ul>   
  )
}

export default CategoryAccesorios