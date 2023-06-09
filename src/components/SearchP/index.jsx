import React from 'react'
import { useContext } from 'react'

import { ColorRing } from 'react-loader-spinner'

import { Search } from '../../context/SearchProvider'
import CategoryMaquillaje from '../CategoryMaquillaje'

import { AiOutlineCreditCard } from 'react-icons/Ai';

import { useNavigate } from "react-router-dom";

const SearchP = () => {

  const navigate = useNavigate();

    const {psearch} = useContext(Search)

  return (
<div className='container-sp'>
    <div className='subcategories-product'>
      <div className='subcategories'>
        <h2>Subcategorias</h2>
        <div className='a'><CategoryMaquillaje/></div>
      </div>
      
      <div className='productContainer'>
        {psearch.length ? psearch.map(product => {
            return <div className='card' key={product.id} onClick={() => navigate(`/detail/${product.id}`)}>
            <div className='productImg'>
              <img src={product.img} alt="foto del producto" />
            </div>
            <div className='id-stock'>
              <p className='product-id'>{product.id}</p>
              <span className='product-stock'>{product.stock > 0 ? <p className='green'>EN STOCK</p> : <p className='blue'>SIN STOCK</p>}</span>
            </div>
            <div>
              <h2 className='productTitle'>
                {product.title}
              </h2>
            </div>
              <div className='price-listprice'>
                  <p className='productPrice product-price'>
                    ${product.price}.-
                  </p>
                  <p className='product-listprice'>
                  <AiOutlineCreditCard className='cardp'/>${product.listprice}
                  </p>
              </div>
              <p className='specialPrice'>Precio Especial</p>  
          </div>
        })
        :
        <h2 className='productLoader'>
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#ff45a1', '#ff45a1', '#ff45a1', '#ff45a1', '#ff45a1']}
            />
        </h2>
    }
      </div>
    </div>
    </div>
  )
}

export default SearchP