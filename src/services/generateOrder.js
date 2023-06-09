const generateOrder = (nombre, mail, telefono, dni, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            mail: mail,
            telefono: telefono,
            dni: dni
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrder;