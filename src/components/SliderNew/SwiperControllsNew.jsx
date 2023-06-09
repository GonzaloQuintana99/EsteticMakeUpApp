import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { RxDoubleArrowLeft } from 'react-icons/Rx';
import { RxDoubleArrowRight } from 'react-icons/Rx';


const SwiperControllsNew = () => {

    const swiper = useSwiper();

  return (
    <div>
    <button className='swiper-btn-nexts' onClick={() => swiper.slidePrev()}><strong><RxDoubleArrowLeft/></strong></button>
    <button className='swiper-btn-prevs' onClick={() => swiper.slideNext()}><strong><RxDoubleArrowRight/></strong></button>
    </div>
  )
}

export default SwiperControllsNew