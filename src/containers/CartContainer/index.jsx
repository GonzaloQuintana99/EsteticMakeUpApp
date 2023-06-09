import React, { useContext, useState } from "react";
import { Shop } from "../../context/ShopProvider";
import generateOrder from "../../services/generateOrder";
import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";
import './styles.css'
import { BsCartXFill } from 'react-icons/Bs';
import { CiCircleRemove } from 'react-icons/Ci';
import { Auth } from "../../context/AuthProvider";

const Cart = () => {

    const { cart, removeItem, clearCart, total } = useContext(Shop);
    const { userL, logged, users } = useContext(Auth);

    let existU = users.find(u => u.mail === userL);

    function renderFilas() {

        return(
            
        cart.map((product) => 
        <React.Fragment key={product.id}>
        <tr>
        <td><img className="imageCart" src={product.img} alt="imagen producto" /></td>
        <td>{product.title}</td>
        <td>{product.quantity}</td>
        <td>${product.price}</td>
        <td><button className="btnRemove" onClick={() => removeItem(product)}>
                <CiCircleRemove className="btnRemoveIcon"/>
            </button>
        </td>
        </tr>
        </React.Fragment>
        )
    )
}


    const handleBuy = async () => {
        if(logged){
        const importeTotal = total();
        const orden = generateOrder(
            existU.username,
            existU.mail,
            existU.phone,
            existU.dni,
            cart,
            importeTotal
        );

        const docRef = await addDoc(collection(db, "orders"), orden);

        cart.forEach(async (productoEnCarrito) => {
            const productRef = doc(db, "products", productoEnCarrito.id);
            const productSnap = await getDoc(productRef);
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.quantity,
            });
        });

        clearCart()
        Swal.fire({
          icon: 'success',
          title: '¡Orden Generada!',
          text: `¡Gracias por su compra! Se generó la orden con ID: ${docRef.id}`,
        })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Debes iniciar sesión para finalizar tu compra.',
          })
    }
    };

    return (

        <>
        <div className="tableCart">
        {cart.length ? 
        <table>
                <thead>
                    <tr className="tableCartTop">
                    <td className="tableCartTopItem">Imagen</td>
                    <td className="tableCartTopItem">Producto</td>
                    <td className="tableCartTopItem">Cantidad</td>
                    <td className="tableCartTopItem">Precio</td>
                    <td className="tableCartTopItem"></td>
                    </tr>
                </thead>
                <tbody>{renderFilas()}</tbody>
            </table>
            : 
            <div className="cartEmpty">
                <h2><BsCartXFill/></h2>
                <h2>Carrito Vacio</h2>
            </div>}
        </div>
            <div className="footerTable">
                <button onClick={clearCart} className="clearCart">Limpiar Carrito</button>
                <h3 className="totalCart">Total: ${total()}</h3>
                <button onClick={handleBuy} className="finishCart">Finalizar Compra</button>
            </div>
            </>
            )
};

export default Cart;