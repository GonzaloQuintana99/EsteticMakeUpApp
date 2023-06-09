import React, { useState, useEffect } from "react";

import { AiOutlineCreditCard } from 'react-icons/Ai';

import { ColorRing } from 'react-loader-spinner'

import { db } from '../../Firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

import SwiperControllsNew from "./SwiperControllsNew";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const SliderNew = () => {

    const [product, setProduct] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        ( async () =>{ 
      
            try {
                
                const q = query(collection(db, "products"), where("newproduct", "==", true));

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
        <>
        <div className="titleSell">
        <p>NUEVOS INGRESOS</p>
        </div>
          <Swiper
            loop={true}
            slidesPerView={4}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1279: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className="sliderSells"
          >
        <div className='productContainer'>
            {product.length ? product.map(pd => {
                return <SwiperSlide key={pd.id} onClick={() => navigate(`/detail/${pd.id}`)}>
                <div className='cardSell'>
                <div className='productImg'>
                  <img src={pd.img} alt="foto del producto" />
                </div>
                <div className='id-stock'>
                  <p className='product-id'>{pd.id}</p>
                  <span className='product-stock'>{pd.stock > 0 ? <p className='green'>EN STOCK</p> : <p className='blue'>SIN STOCK</p>}</span>
                </div>
                <div>
                  <h2 className='productTitle'>
                    {pd.title}
                  </h2>
                </div>
                  <div className='price-listprice'>
                      <p className='productPrice product-price'>
                        ${pd.price}.-
                      </p>
                      <p className='product-listprice'>
                      <AiOutlineCreditCard className='cardp'/>${pd.listprice}
                      </p>
                  </div>
                  <p className='specialPrice'>Precio Especial</p>  
              </div> 
              </SwiperSlide>
            })
            :
            <h2 className='productLoader'>
                <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#ff45a1', '#ff45a1', '#ff45a1', '#ff45a1', '#ff45a1']}
                />
            </h2>
        }
          </div>
        <SwiperControllsNew/>
          </Swiper>
          </>
      );
}

export default SliderNew