import React from 'react'
import { createContext } from "react";
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, getDocs } from "firebase/firestore";

export const Search = createContext(null);

 
 export const SearchProvider = ({children}) => {

    const [psearch, setPSearch] = useState([])

    const [product, setProduct] = useState({})

    useEffect(()=>{
        ( async () =>{ 
      
            try {
    
            const q = query(collection(db, "products"));
    
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
    
      }, [])

    return (
        <Search.Provider value={{psearch, setPSearch, product}}>
            {children}
        </Search.Provider>
    )
}


 export default SearchProvider;