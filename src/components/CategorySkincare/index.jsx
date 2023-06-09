import React from 'react'
import { Link } from 'react-router-dom'

const CategorySkincare = () => {
  return (
        <ul className='maquillaje-subcategories'>
          <li><Link to="/category/Accesorios" className='maquillaje-subcategories-item'>ACCESORIOS</Link></li>
          <li><Link to="/category/Esponjas y Aplicadores" className='maquillaje-subcategories-item'>ESPONJAS Y APLICADORES</Link></li>
          <li><Link to="/category/Mascarillas y Serum" className='maquillaje-subcategories-item'>MASCARILLAS Y SERUM</Link></li>
          <li><Link to="/category/Cremas" className='maquillaje-subcategories-item'>CREMAS</Link></li>
          <li><Link to="/category/Desmaquillantes" className='maquillaje-subcategories-item'>DESMAQUILLANTES</Link></li>
          <li><Link to="/category/Blanqueadores de Dientes" className='maquillaje-subcategories-item'>BLANQUEADOR DE DIENTES</Link></li>
        </ul>
  )
}

export default CategorySkincare