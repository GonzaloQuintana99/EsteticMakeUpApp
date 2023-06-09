import React from 'react';
import './styles.css'
import {useState} from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(1)

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        }
    else {
        Swal.fire({
            icon: 'error',
            title: 'No hay suficiente stock',
            showConfirmButton: false,
            timer: 1000
          })
}};

    const handleRemove = () => {
        if(count >= 2) {
            setCount(count-1);
        }
    else {
        Swal.fire({
            icon: 'error',
            title: 'No puedes poner menos de 1 producto',
            showConfirmButton: false,
            timer: 1000
          })
}};

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [count]);

    return (
        <div className='containerCount'>
        <div className='itemCounter'>
            <button className='btnCounter' onClick={handleRemove}>-</button>
            <p className='counter'>{count}</p>
            <button className='btnCounter' onClick={handleAdd}>+</button>
        </div>
        <div>
            <button className='btnAddToCart' onClick={addCart}>Agregar al Carrito</button>
        </div>
        </div>
    )
}

export default ItemCount;