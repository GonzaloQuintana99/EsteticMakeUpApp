import React, { useContext, useState, useEffect } from "react";

import { AiFillPhone } from 'react-icons/Ai';
import { GrMail } from 'react-icons/Gr';

import generateUser from "../../services/generateUser";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import Swal from "sweetalert2";

import './styles.css'
import 'animate.css';
import { Auth } from "../../context/AuthProvider";

const AuthContainer = () => {

    const {lr, setLR, setUserL, userL, setPwL, users, logged, setLogged} = useContext(Auth)

    const [textErrorR, setTextErrorR] = useState("");
    const [textErrorL, setTextErrorL] = useState("");

    const [regE, setRegE] = useState("");
    const [regN, setRegN] = useState("");
    const [regP, setRegP] = useState("");
    const [regD, setRegD] = useState("");
    const [regPw, setRegPw] = useState("");
    const [regRpw, setRepPw] = useState("");

    let existU = users.find(u => u.mail === userL);

    const user = generateUser(
        regN,
        regE,
        regPw,
        regP,
        regD
    );

    function inputsLogin(e) {
        e.preventDefault()

        let mailExist = users.some(u => u.mail === e.target.emailL.value);
        let psExist = users.some(u => u.pw === e.target.pwL.value);
        
            if (mailExist && psExist) {    
                setUserL(e.target.emailL.value)
                setPwL(e.target.pwL.value)
                handleLog()
            }
            else{
                setTextErrorL("Email o contraseña incorrectos.");
            }
    };

    const handleLog = async () => {
        setLogged(true)
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de Sesion!',
            text: '¡Iniciaste sesion correctamente!',
            confirmButtonColor: '#ff45a1'
        })
    };

    function inputsRegister(e) {
        e.preventDefault()

        let exist = users.some(u => u.mail === e.target.emailR.value);

        let emailReg = e.target.emailR.value
        let nameReg = e.target.nameR.value
        let phoneReg = e.target.phone.value
        let dniReg = e.target.dni.value
        let pwReg = e.target.pwR.value
        let rpwReg = e.target.rpwR.value

            if (exist) {
                setTextErrorR("El email ya esta en uso.");
            }
            else{
                if(pwReg == rpwReg){
                    setRegE(emailReg)
                    setRegN(nameReg)
                    setRegP(phoneReg)
                    setRegD(dniReg)
                    setRegPw(pwReg)
                    setRepPw(rpwReg)
                    setLR(!lr)
                    setTextErrorR("");
                }
                else{
                    setTextErrorR("Las contraseñas no coinciden");
                } 
            }
        };


        
        useEffect(() => {
        
            
            const handleReg = async () => {
                
                const docRef = await addDoc(collection(db, "users"), user);
                
                Swal.fire({
                    icon: 'success',
                    title: '¡Registro Exitoso!',
                    text: '¡Se registro correctamente!',
                    confirmButtonColor: '#ff45a1'
                })
        };
        if(user.username == "" || user.pw == "" || user.mail == ""){

        }
        else{
        handleReg()
        }

        setRegE("")
        setRegN("")
        setRegPw("")
        setRepPw("")
}, [user])
        

    return (
        <>
        {logged == true ?
        <div className="profileContainer">
            <p>ID: {existU.id}</p>
            <h2>Nombre: {existU.username}</h2>
            <h2>Mail: {existU.mail}</h2>
        </div>
        : 
        <div>
        <div className="s-container">
            {lr ?
            <div className="sign-container animate__animated animate__backInLeft">
                <h2 className="titlelr">INGRESAR</h2>
                <form onSubmit={inputsLogin}>
                    <p className="error">{textErrorL}</p>
                    <div className="subc-sign">
                        <input type="email" name="emailL" className="inputLogin" placeholder="Tu email" required/>
                        <input type="password" name="pwL" className="inputLogin" placeholder="Tu contraseña" required/>
                    </div>
                    <div>
                        <button className="btnLogReg" type="submit">INGRESAR</button>
                    </div>
                </form>
                <div className="ls-subc">
                    <p>¿No tienes cuenta?</p>
                    <button className="btnls" onClick={() => setLR(!lr)}>REGISTRARME</button>
                </div>
            </div>
            :
                <div className="singin-container animate__animated animate__backInRight">
                <h2 className="titlelr">REGISTRARME</h2>
                <p className="error titlelr">{textErrorR}</p>
                <form onSubmit={inputsRegister} className="singin-container" autoComplete="none">
                    <input type="text" name="nameR" className="inputLogin" placeholder="Tu nombre" required/>
                    <input type="email" name="emailR" className="inputLogin" placeholder="Tu email" required/>
                    <input type="number" name="phone" className="inputLogin" placeholder="Tu número" required/>
                    <input type="number" name="dni" className="inputLogin" placeholder="Tu DNI" required/>
                    <input type="password" name="pwR" className="inputLogin" placeholder="Tu contraseña" required/>
                    <input type="password" name="rpwR" className="inputLogin" placeholder="Repite tu contraseña" required/>
                    <button className="btnLogReg" type="submit">REGISTRARME</button>
                </form>    
                <div className="ls-subc">
                    <p>¿Ya tenés cuenta?</p>
                    <button className="btnls" onClick={() => setLR(!lr)}>INGRESAR</button>
                </div>
            </div>       
            }
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
              </div> 
            }
            </>
    );
};

export default AuthContainer;