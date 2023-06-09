import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCreditCard } from 'react-icons/Ai';

const Item = ({product}) => {

  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='card' onClick={handleNavigate}>
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
  )
}

export default Item