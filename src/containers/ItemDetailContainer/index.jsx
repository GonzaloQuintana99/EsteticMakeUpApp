import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    
  const [productDetail, setProductDetail] = useState({})

  const {productId} = useParams();

  useEffect(()=> {

      const getProducts = async () => {
          try {
            const docRef = doc(db, "products", productId);
            const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
          setProductDetail({id: docSnap.id, ...docSnap.data()});
          } else {
          } 
          } catch(error) {
          }
      }
      getProducts();
  }, [productId])

return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer