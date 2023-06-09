import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCapilar = () => {
  return (
  <ul className='maquillaje-subcategories'>
        <li><Link to="/category/Capilar" className={'maquillaje-subcategories-item'}>Tratamientos Capilares</Link></li>
    </ul>   
  )
}

export default CategoryCapilar