import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Itemlist from '../../components/ItemList'

import { db } from '../../Firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
  

  const [product, setProduct] = useState([]);

  const {categoryId} = useParams();

  useEffect(()=>{
    ( async () =>{ 
  
        try {

          const q = categoryId ?
          query(collection(db, "products"), where("category", "==", categoryId))
          :
          query(collection(db, "products"));

        const querySnapshot = await getDocs(q);

        const firebaseProducts = []

          querySnapshot.forEach((doc) => {

          firebaseProducts.push({id: doc.id, ...doc.data()})

      });

      setProduct(firebaseProducts)


        } catch (error) {
          console.log(error);
        }
      })()

  }, [categoryId])

  return (
    <div>
      <Itemlist products={product}/>
    </div>
  )
}

export default ItemListContainer