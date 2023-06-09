import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "./styles.css";


import { EffectFade, Navigation, Autoplay } from "swiper";
import SlideNextButton from "./swipercontrolls";


const SliderBanner = () => {



    return (
      <>
        <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={false}
        modules={[EffectFade, Navigation, Autoplay]}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/banner1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner3.jpg" />
        </SwiperSlide>
        <SlideNextButton/>
      </Swiper>
      </>
    )
  }
  
  export default SliderBanner