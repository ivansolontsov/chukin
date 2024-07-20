'use client'

import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export const Swiper_back= () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      speed={3000}
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide>
        <img className='img_swiper' src='/swiper/slide1.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
      <img className='img_swiper' src='/swiper/slide2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
      <img className='img_swiper' src='/swiper/slide3.jpg'/>
      </SwiperSlide>
    </Swiper>
  );
};