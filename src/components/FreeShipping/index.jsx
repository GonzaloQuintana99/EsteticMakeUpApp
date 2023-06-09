import React from 'react'
import { FaShippingFast } from 'react-icons/Fa';

const FreeShipping = () => {
  return (
    <div className='freeShippingBox'>
    <div>
    <p className='freeShipping'><span>¡Envío Gratis!</span> con tu compra mayor a <span>$40000.-</span></p>
    </div>
    <div>
    <span><FaShippingFast className='shippingCart'/></span>
    </div>
  </div>
  )
}

export default FreeShipping