import React from 'react';
import { useState, useContext } from 'react'

import { ImSearch } from 'react-icons/Im';
import { FaUserAlt } from 'react-icons/Fa';
import { FaShoppingCart } from 'react-icons/Fa';
import { IoMdArrowDropdown } from 'react-icons/Io';
import { IoMdArrowDropup } from 'react-icons/Io';
import { RxHamburgerMenu } from 'react-icons/Rx';

import 'animate.css';
import './styles.css';

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Search } from '../../context/SearchProvider'

const NavBar = () => {

    const {setPSearch, product} = useContext(Search)

    const navigate = useNavigate();

    const [maquillaje, setMaquillaje] = useState(false);
    const [skincare, setSkinCare] = useState(false);
    const [accesorios, setAccesorios] = useState(false);

    const [burgernav, setBurgerNav] = useState(false);

    const [maquillajeb, setMaquillajeB] = useState(false);
    const [skincareb, setSkinCareB] = useState(false);
    const [accesoriosb, setAccesoriosB] = useState(false);

    function inputsSearch(e){
        e.preventDefault()

        let inputText = e.target.searching.value.toLowerCase()
        let psearched = []
        
        product.forEach(p => {
            if (p.title.toLowerCase().includes(inputText)) {
                psearched.push(p)
            }
            setPSearch(psearched)
        });
        navigate(`/search`)
        e.target.searching.value = ""
      }

  return (
    <header>
        <nav>
            <div className='navBarTop'>
                <Link to="/"><img className='logo' src="/img/logo.png" alt="logo"/></Link>
                <form onSubmit={inputsSearch} className='search'>
                    <input type="text" name='searching' className="searchTerm" placeholder="Buscar producto..."/>
                    <button type="submit" className="searchButton">
                        <ImSearch/>
                    </button>
                </form>
                <div className='login-cart'>
                    <p className='login'><Link to="/user"><FaUserAlt/><span>INGRESAR</span></Link></p>
                    <p className='cart'><Link to="/cart"><FaShoppingCart/></Link></p>
                </div>
            </div>
            {window.innerWidth > 1279 ?
            <div className='navBar'>
                <div className='navBarBot'>
                    <ul>
                        <li onClick={() => { setMaquillaje(!maquillaje); setSkinCare(false); setAccesorios(false);}}>MAQUILLAJE{maquillaje ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</li>
                        <li onClick={() => { setSkinCare(!skincare); setMaquillaje(false); setAccesorios(false);}}>SKINCARE{skincare ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</li>
                        <li onClick={() => { setAccesorios(!accesorios); setMaquillaje(false); setSkinCare(false);}}>ACCESORIOS{accesorios ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</li>
                        <li><Link to="/category/Capilar">CAPILAR</Link></li>
                    </ul>
                </div>    
                <div className='navBarBot2'>
                    <ul>
                        <li><Link to="/preguntasfrecuentes">PREGUNTAS FRECUENTES</Link></li>
                        <li><Link to="/testimonios">TESTIMONIOS</Link></li>
                    </ul>
                </div>
            </div>
            :
            <div className='navBarB'>
                <RxHamburgerMenu className='burgerMenu' onClick={() => setBurgerNav(!burgernav)}/>
            </div>
            }

            <div className={burgernav ? 'burgerNav animate__animated animate__zoomInDown' : 'hide'}>
                    <ul>
                        <li onClick={() => { setMaquillajeB(!maquillajeb); setSkinCareB(false); setAccesoriosB(false);}}>MAQUILLAJE{maquillajeb ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</li>
                        <div className={maquillajeb ? 'maquillaje-containerB animate__animated animate__backInUp' : 'hide'}>
                            <ul className='maquillaje-itemsB'>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Bases - Polvos" className='maquillaje-itemB'>BASES - POLVOS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Correctores" className='maquillaje-itemB'>CORRECTORES</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Labiales" className='maquillaje-itemB'>LABIALES</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Sombras" className='maquillaje-itemB'>SOMBRAS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Brochas - Esponjas" className='maquillaje-itemB'>BROCHAS - ESPONJAS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Delineadores" className='maquillaje-itemB'>DELINEADORES</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Pestañas" className='maquillaje-itemB'>PESTAÑAS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Cejas" className='maquillaje-itemB'>CEJAS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Glitter" className='maquillaje-itemB'>GLITTER</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Primer - Fijador" className='maquillaje-itemB'>PRIMER - FIJADOR</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Contornos" className='maquillaje-itemB'>CONTORNOS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Iluminadores" className='maquillaje-itemB'>ILUMINADORES</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Rubores" className='maquillaje-itemB'>RUBORES</Link></li>
                            </ul>
                        </div>
                        <li onClick={() => { setSkinCareB(!skincareb); setMaquillajeB(false); setAccesoriosB(false);}}>SKINCARE{skincareb ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</li>
                        <div className={skincareb ? 'maquillaje-containerB animate__animated animate__backInUp' : 'hide'}>
                            <ul className='maquillaje-itemsB'>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Accesorios" className='maquillaje-itemB'>ACCESORIOS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Esponjas y Aplicadores" className='maquillaje-itemB'>ESPONJAS Y APLICADORES</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Mascarillas y Serum" className='maquillaje-itemB'>MASCARILLAS Y SERUM</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Cremas" className='maquillaje-itemB'>CREMAS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Desmaquillantes" className='maquillaje-itemB'>DESMAQUILLANTES</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Blanqueadores de Dientes" className='maquillaje-itemB'>BLANQUEADOR DE DIENTES</Link></li>
                            </ul>
                        </div> 
                        <li onClick={() => { setAccesoriosB(!accesoriosb); setMaquillajeB(false); setSkinCareB(false);}}>ACCESORIOS{accesoriosb ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</li>
                        <div className={accesoriosb ? 'maquillaje-containerB animate__animated animate__backInUp' : 'hide'}>
                            <ul className='maquillaje-itemsB'>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Fragancias" className='maquillaje-itemB'>FRAGANCIAS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Porta Cosmeticos" className='maquillaje-itemB'>PORTA COSMETICOS</Link></li>
                                <li><Link onClick={() => setBurgerNav(false)} to="/category/Utilidades" className='maquillaje-itemB'>UTILIDADES</Link></li>
                            </ul>
                        </div>  
                        <li><Link to="/category/Capilar" onClick={() => setBurgerNav(false)}>CAPILAR</Link></li>
                        <div className='navBarBot2B'>
                        <li><Link onClick={() => setBurgerNav(false)} to="/preguntasfrecuentes">PREGUNTAS FRECUENTES</Link></li>
                        <li><Link onClick={() => setBurgerNav(false)} to="/testimonios">TESTIMONIOS</Link></li>
                        </div>
                    </ul>
                </div>
                


        <div className={maquillaje ? 'maquillaje-container animate__animated animate__flipInX' : 'hide'}>
            <ul className='maquillaje-items'>
                <li><Link to="/category/Bases - Polvos" className='maquillaje-item'>BASES - POLVOS</Link></li>
                <li><Link to="/category/Correctores" className='maquillaje-item'>CORRECTORES</Link></li>
                <li><Link to="/category/Labiales" className='maquillaje-item'>LABIALES</Link></li>
                <li><Link to="/category/Sombras" className='maquillaje-item'>SOMBRAS</Link></li>
                <li><Link to="/category/Brochas - Esponjas" className='maquillaje-item'>BROCHAS - ESPONJAS</Link></li>
                <li><Link to="/category/Delineadores" className='maquillaje-item'>DELINEADORES</Link></li>
                <li><Link to="/category/Pestañas" className='maquillaje-item'>PESTAÑAS</Link></li>
                <li><Link to="/category/Cejas" className='maquillaje-item'>CEJAS</Link></li>
                <li><Link to="/category/Glitter" className='maquillaje-item'>GLITTER</Link></li>
                <li><Link to="/category/Primer - Fijador" className='maquillaje-item'>PRIMER - FIJADOR</Link></li>
                <li><Link to="/category/Contornos" className='maquillaje-item'>CONTORNOS</Link></li>
                <li><Link to="/category/Iluminadores" className='maquillaje-item'>ILUMINADORES</Link></li>
                <li><Link to="/category/Rubores" className='maquillaje-item'>RUBORES</Link></li>
            </ul>
        </div> 

        <div className={skincare ? 'maquillaje-container animate__animated animate__flipInX' : 'hide'}>
            <ul className='maquillaje-items'>
                <li><Link to="/category/Accesorios" className='maquillaje-item'>ACCESORIOS</Link></li>
                <li><Link to="/category/Esponjas y Aplicadores" className='maquillaje-item'>ESPONJAS Y APLICADORES</Link></li>
                <li><Link to="/category/Mascarillas y Serum" className='maquillaje-item'>MASCARILLAS Y SERUM</Link></li>
                <li><Link to="/category/Cremas" className='maquillaje-item'>CREMAS</Link></li>
                <li><Link to="/category/Desmaquillantes" className='maquillaje-item'>DESMAQUILLANTES</Link></li>
                <li><Link to="/category/Blanqueadores de Dientes" className='maquillaje-item'>BLANQUEADOR DE DIENTES</Link></li>
            </ul>
        </div> 

        <div className={accesorios ? 'maquillaje-container animate__animated animate__flipInX' : 'hide'}>
            <ul className='maquillaje-items'>
                <li><Link to="/category/Fragancias" className='maquillaje-item'>FRAGANCIAS</Link></li>
                <li><Link to="/category/Porta Cosmeticos" className='maquillaje-item'>PORTA COSMETICOS</Link></li>
                <li><Link to="/category/Utilidades" className='maquillaje-item'>UTILIDADES</Link></li>
            </ul>
        </div>  

        </nav>
    </header>
  )
}

export default NavBar