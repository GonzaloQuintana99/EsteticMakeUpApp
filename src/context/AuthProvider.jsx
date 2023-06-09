import React from 'react'
import { createContext } from "react";
import { useState, useEffect } from 'react';

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const Auth = createContext(null);

 
 export const AuthProvider = ({children}) => {

    const [logged, setLogged] = useState(false)

    const [users, setUsers] = useState([]);

    const [lr, setLR] = useState(true);

    const [userL, setUserL] = useState("");
    const [pwL, setPwL] = useState("");

    useEffect(()=>{
        ( async () =>{ 
      
            try {
                
                const q = query(collection(db, "users"));

                const querySnapshot = await getDocs(q);

                const firebaseUsers = []
                
                querySnapshot.forEach((doc) => {

                    firebaseUsers.push({id: doc.id, ...doc.data()})
                    
                });
    
            setUsers(firebaseUsers)
        } catch (error) {
            console.log(error);
        }
    })()
    
}, [lr])

    return (
        <Auth.Provider value={{lr, setLR, userL, setUserL, pwL, setPwL, users, setUsers, logged, setLogged}}>
            {children}
        </Auth.Provider>
    )
}


 export default AuthProvider;