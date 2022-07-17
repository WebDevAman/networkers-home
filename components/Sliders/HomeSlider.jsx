import people1 from '../../public/assets/images/people1.png'
import people2 from '../../public/assets/images/people2.jpeg'
import people3 from '../../public/assets/images/people3.jpeg'
import people4 from '../../public/assets/images/people4.jpeg'


import Image from 'next/image'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default function HomeSlider() {
  return (
    <div className='px-4'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='rounded-3xl my-12  overflow-hidden'>
        <Image className=' hover:scale-105 transition-all duration-500' src={people1} height={530}/>
        </SwiperSlide>
        <SwiperSlide className='rounded-3xl my-12 overflow-hidden'>
            <Image className=' hover:scale-105 transition-all duration-500' src={people2} />
        </SwiperSlide>
        <SwiperSlide className='rounded-3xl my-12  overflow-hidden'>
            <Image className=' hover:scale-105 transition-all duration-500' src={people3} />
        </SwiperSlide>
        
        <SwiperSlide className='rounded-3xl my-12  overflow-hidden'>
            <Image className=' hover:scale-105 transition-all duration-500' src={people4} />
        </SwiperSlide>
        <SwiperSlide className='rounded-3xl my-12  overflow-hidden'>
         

            <Image className=' hover:scale-105 transition-all duration-500' src={people1} height={530}/>
            
        </SwiperSlide>
        <SwiperSlide className='rounded-3xl my-12  overflow-hidden'>
            <Image className=' hover:scale-105 transition-all duration-500' src={people2} />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
