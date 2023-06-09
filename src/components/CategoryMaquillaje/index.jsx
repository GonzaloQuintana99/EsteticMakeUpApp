import React from 'react'
import { Link } from 'react-router-dom'

const CategoryMaquillaje = () => {
  return (
        <ul className='maquillaje-subcategories'>
            <li><Link to="/category/Bases - Polvos" className='maquillaje-subcategories-item'>BASES - POLVOS</Link></li>
            <li><Link to="/category/Correctores" className='maquillaje-subcategories-item'>CORRECTORES</Link></li>
            <li><Link to="/category/Labiales" className='maquillaje-subcategories-item'>LABIALES</Link></li>
            <li><Link to="/category/Sombras" className='maquillaje-subcategories-item'>SOMBRAS</Link></li>
            <li><Link to="/category/Brochas - Esponjas" className='maquillaje-subcategories-item'>BROCHAS - ESPONJAS</Link></li>
            <li><Link to="/category/Delineadores" className='maquillaje-subcategories-item'>DELINEADORES</Link></li>
            <li><Link to="/category/Pestañas" className='maquillaje-subcategories-item'>PESTAÑAS</Link></li>
            <li><Link to="/category/Cejas" className='maquillaje-subcategories-item'>CEJAS</Link></li>
            <li><Link to="/category/Glitter" className='maquillaje-subcategories-item'>GLITTER</Link></li>
            <li><Link to="/category/Primer - fijador" className='maquillaje-subcategories-item'>PRIMER - FIJADOR</Link></li>
            <li><Link to="/category/Cotornos" className='maquillaje-subcategories-item'>CONTORNOS</Link></li>
            <li><Link to="/category/Iluminadores" className='maquillaje-subcategories-item'>ILUMINADORES</Link></li>
            <li><Link to="/category/Rubores" className='maquillaje-subcategories-item'>RUBORES</Link></li>
        </ul>
  )
}

export default CategoryMaquillaje