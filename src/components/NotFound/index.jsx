import React from 'react'
import './styles.css'
import { RotatingLines } from  'react-loader-spinner'

const NotFound = () => {
  return (
    
    <div className='notFoundContainer'>
      <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  <h2>Pagina no encontrada</h2>
  </div>
  )
}

export default NotFound