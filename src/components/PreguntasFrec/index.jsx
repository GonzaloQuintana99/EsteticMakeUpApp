import React from 'react'
import { AiFillPhone } from 'react-icons/Ai';
import { GrMail } from 'react-icons/Gr';

import './styles.css'

const PreguntasFrec = () => {
  return (
    <>
    <div className='containerPreg animate__animated animate__fadeIn'>
        <h2>Preguntas frecuentes</h2>
        
        <div className='preguntas'>
            <h3>¿Cuales son los medios de pago?</h3>
            <p>Podés abonar tu pedido a través de los siguientes medios de pago: Deposito/Transferencia Bancaria (ABONANDO POR ESTE MEDIO TENES DESCUENTO DEL 15% DEL MONTO TOTAL) Mercado Pago (Rapipago,Pagofacil,Tarjeta de Credito o Debito). Los precios estan expresados en pesos argentinos.</p>
        </div>

        <div className='preguntas'>
            <h3>¿Qué descuentos ofrecen?</h3>
            <p>Ya que somos mayoristas y tratamos de tener siempre los mejores precios para vos, al igual tenemos descuentos especiales en importes totales, eso va a depender del mes y de la temporada, los descuentos o bonificaciones las podras ver en la pagina principal de nuestra web o nuestros vendedores te informaran al momento de armar tu pedido si conseguiste alguna bonificacion especial por tu compra. EL UNICO DESCUENTO QUE REALIZAMOS ES ABONANDO POR DEPOSITO O TRANSFERENCIA BANCARIA DEL 15%</p>
        </div>

        <div className='preguntas'>
        <h3>¿Dónde están ubicados?</h3>
        <p>Tenemos nuestros depositos en Tucuman, desde donde enviamos los pedidos a todo el país.</p>
        </div>

        <div className='preguntas'>
            <h3>¿Cómo realizan los envíos?</h3>
            <p>Realizamos envíos a todo el país por CORREO ARGENTINO A DOMICILIO.</p>
        </div>

        <div className='preguntas'>
            <h3>¿Cuánto tardan en enviar el pedido?</h3>
            <p>Una vez efectuado el pago del pedido, en las proximas 24 A 48 hs despachamos tu pedido.</p>
        </div>

        <div className='preguntas'>
        <h3>¿Cuáles son los costos de envíos?</h3>
        <p>Como siempre pensamos en lo mejor para nuestros clientes, sumamos los envios LOW-COST. Mas Rapido - Mas Seguro - Mas Barato! Los envios LOW-COST se realizan por CORREO ARGENTINO y tienen un costo de $429.- a todo el Pais, inclusive este tipo de envios lleva un seguro por si algun producto llega en mal estado. Si tu compra supera los $10.000 el envio a todo el pais es totalmente gratuito.</p>
        </div>

        <div className='preguntas'>
            <h3>¿Hay stock de todos los productos?</h3>
            <p>Al momento de realizar su pedido todos los productos se encuentran en stock, pero al ser ventas mayoristas muchos clientes optan por llevarse todo lo que tengamos de algunos productos, por lo tanto ya que no reservamos stock hasta que su pedido se encuentre abonado pueden existir faltantes. En el momento en que realice el pago le daremos diferentes opciones que puede seleccionar si esto sucede, como por ejemplo que se envíe un reemplazo por un producto similar, un reemplazo por un producto existente de su pedido o que quede saldo a favor para una próxima compra.</p>
        </div>

        <div className='preguntas'>
        <h3>¿Como selecciono los tonos de los productos?</h3>
        <p>Una vez abonado el pedido, en caso de que no haya podido seleccionar en la web los tonos, nos pondremos en contacto con usted al momento de armar su paquete para ir detallando los tonos de cada producto.</p>
        </div>

        <div className='preguntas'>
        <h3>¿Qué hago luego de realizar mi compra?</h3>
        <p>Para agilizar su pedido envíe su comprobante de pago por cualquier medio de atención así acreditamos el pago a la brevedad.</p>
        </div>

        <div className='preguntas'>
            <h3>¿Ofrecen garantía?</h3>
            <p>Aceptamos cambios y devoluciones de los productos, pero los costos de envío deberán ser abonados íntegramente por el cliente. En el caso de ser un maltrato del paquete por la empresa de transporte, haremos un reclamo de manera inmediata para poder cubrir la rotura con el seguro del mismo. Al finalizar la compra usted acepta que los tiempos de garantia pueden variar de 10 a 45 dias dependiendo el tiempo de espera para reclamos del CORREO ARGENTINO. De ninguna manera la garantia puede ser resuelta en el momento.</p>
        </div>

        <h2>**Para confirmar rapidamente tu compra, una vez abonado el pedido informar el pago del mismo via Whatsapp.**</h2>

    </div>
        <div className='atContainer'>
          <div className='containerAt'>
            <h2>ATENCIÓN TELEFÓNICA</h2>
            <div className='subContainerAt'>
              <AiFillPhone className='phoneIcon'/>
              <p className='phoneNumber'>3815584946</p>
            </div>
          </div>
          <div className='containerAt'>
            <h2>ATENCIÓN AL PÚBLICO</h2>
            <div className='subContainerAt'>
              <GrMail className='phoneIcon'/>
              <p className='phoneNumber'>ventas@esteticmakeup.com</p>
            </div>
          </div>
          <div className='containerAt'>
              <h2>HORARIOS DE ATENCIÓN</h2>
              <p className='hrs'>de Lunes a Sabados de 9:00 a 14:00.</p>
          </div>
        </div>
        </>
  )
}

export default PreguntasFrec