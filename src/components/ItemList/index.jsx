import React, { useState } from 'react'
import Item from '../Item'
import { ColorRing } from 'react-loader-spinner'
import './styles.css'
import CategoryAccesorios from '../CategoryAccesorios'
import CategoryMaquillaje from '../CategoryMaquillaje'
import CategorySkincare from '../CategorySkincare'
import { useEffect } from 'react'
import CategoryCapilar from '../CategoryCapilar'

const ItemList = ({products}) => {

  const [maq, setMaq] = useState(false)
  const [cap, setCap] = useState(false)
  const [acc, setAcc] = useState(false)
  const [sc, setSc] = useState(false)


  useEffect(()=>{

    products.forEach(product => {
      if(product.category === "Bases - Polvos" || product.category === "Correctores" || product.category === "Labiales" || product.category === "Sombras" || product.category === "Brochas - Esponjas" || product.category === "Delineadores" || product.category === "Pestañas" || product.category === "Cejas" || product.category === "Glitter" || product.category === "Primer - Fijador" || product.category === "Contornos" || product.category === "Iluminadores" || product.category === "Rubores"){
        setMaq(true)
        setCap(false)
        setAcc(false)
        setSc(false)
      }
      else if(product.category === "Fragancias" || product.category === "Utilidades" || product.category === "Porta Cosmeticos"){
        setMaq(false)
        setCap(false)
        setAcc(true)
        setSc(false)
      }
      else if(product.category === "Cremas" || product.category === "Accesorios" || product.category === "Desmaquillantes" || product.category === "Esponjas y Aplicadores" || product.category === "Mascarillas y Serum" || product.category === "Blanqueadores de Dientes"){
        setMaq(false)
        setCap(false)
        setAcc(false)
        setSc(true)
      }
      else if(product.category === "Capilar"){
        setCap(true)
        setMaq(false)
        setAcc(false)
        setSc(false)
      }
      else{
        console.log("No hay coincidencias")
      }
    });

	}, [products])

  return (

    <div className='container-sp'>
    <div className='subcategories-product'>
      <div className='subcategories'>
        <h2>Subcategorias</h2>
        <div className={maq ? 'a' : 'hide'}><CategoryMaquillaje/></div>
        <div className={acc ? 'a' : 'hide'}><CategoryAccesorios/></div>
        <div className={sc ? 'a' : 'hide'}><CategorySkincare/></div>
        <div className={cap ? 'a' : 'hide'}><CategoryCapilar/></div>
      </div>




      
      <div className='productContainer'>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
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

export default ItemList