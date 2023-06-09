import React from 'react'
import ItemCount from '../ItemCount'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';
import { useContext } from 'react';
import {FaShippingFast} from 'react-icons/Fa';
import './style.css';

const ItemDetail = ({product}) => {

  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const addCart = (quantity) => {
    setQty(quantity);
  }

  const handleFinish = () => {
    const productToSave = {...product, quantity: qty}
    addItem(productToSave)
    navigate('/cart');
  }

  return (
    <div className='mainDetail'>
    <div className='detailContainer'>

      <div className='imgDetailContainer'>
        <div className='imgDetail'>
        <img src={product.img} alt="imagen producto" />
        </div>
      </div>

      <div className='productDetail'>
        <h2 className='productTitleDetail'>{product.title}</h2>

        <p className='productID'>ID: {product.id}</p>

        <p className='listPriceDetail'>Precio lista ${product.listprice}</p>

        <h3 className='specialPriceDetail'>Precio Especial ${product.price}.-</h3>

        <h4 className='listPriceCard'><i className='fa-regular fa-credit-card cardDetail'></i> ${product.listprice} <span className='mpDetail'>con MercadoPago</span></h4>

        <div className='ContadorCarrito'><br /><br />
         {!qty ? (<ItemCount stock={product.stock} initial={1} onAdd={addCart}/>) : (
          <button className='btnAddToCart' onClick={handleFinish}>Finalizar Compra</button>
         )}
        </div>

      <div className='shippingContainer'>
        <FaShippingFast className='shipping'/>
        <h3 className='shipping'>Envios a todo el pais</h3>
      </div>    

    </div>
    </div>
        <h2 className='productDescriptionTitle'>Descripción</h2>
        <p className='productDescription'>{product.description}</p>
        </div>  
  )
}

export default ItemDetail