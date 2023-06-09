import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { RxDoubleArrowLeft } from 'react-icons/Rx';
import { RxDoubleArrowRight } from 'react-icons/Rx';

const SlideNextButton = () => {

    const swiper = useSwiper();

  return (
    <>
    <button className='swiper-btn-next' onClick={() => swiper.slideNext()}><strong><RxDoubleArrowLeft/></strong></button>
    <button className='swiper-btn-prev' onClick={() => swiper.slidePrev()}><strong><RxDoubleArrowRight/></strong></button>
    </>
  )
}

export default SlideNextButton