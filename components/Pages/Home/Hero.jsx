import Link from 'next/link'
import React from 'react'
import Button from '../../common/Button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";

const Hero = () => {
    return (
        <div className='min-h-screen  flex flex-col space-y-12'>
            <div className="flex flex-col container items-center space-y-6">
                <h1
                    data-aos="fade-up"
                    data-aos-delay={`200`}
                    data-aos-duration="800"
                    className='text-lg md:text-xl font-semibold'>100% Placement programs</h1>
                <h1
                    data-aos="fade-up"
                    data-aos-delay={`300`}
                    data-aos-duration="800"
                    className='text-3xl font-lato font-extrabold text-center max-w-[55rem] md:text-5xl lg:text-7xl'>
                    CCIE, Cloud and Cyber Security Programs
                </h1>
                <h1
                    data-aos="fade-up"
                    data-aos-delay={`400`}
                    data-aos-duration="800"
                    className='text-xl md:text-2xl max-w-[50rem] font-semibold text-center'>
                    Lifetime access to Videos. CCIE Certified instructors. 100% Placement programs
                </h1>
                <Link
                    href='/networkers-home-contact-us'>
                    <a
                        data-aos="fade-up"
                        data-aos-delay={`500`}
                        data-aos-duration="800"
                    >
                        <Button text='Join Now' big />
                    </a>
                </Link>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={`600`}
                data-aos-duration="800"
                className="flex flex-col text-themeDark text-center">
                <Link href='/networkers-home-contact-us'>
                    <a className='text-lg md:text-xl font-semibold'>India s Biggest Cisco Training school</a>
                </Link>
                <HomeSlider />
            </div>
        </div >
    )
}


const HomeSlider = () => {
    const HeroSliderImages = [
        '/assets/images/people1.png',
        '/assets/images/people2.jpeg',
        '/assets/images/people3.jpeg',
        '/assets/images/people4.jpeg',
        '/assets/images/people5.jpeg',
    ]
    return (
        <>
            <div className='px-4 '>
                <Swiper
                    slidesPerView={3}
                    freeMode={true}
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper hero"
                >
                    {HeroSliderImages.map((img, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={`${i + 6}00`}
                            data-aos-duration="800"
                        >
                            <SwiperSlide className='rounded-3xl mt-6 mb-16 max-h-[24rem] h-full flex items-center overflow-hidden'>
                                <img className='hover:scale-105 transition-all object-cover duration-500' src={img} alt='image' />
                            </SwiperSlide>
                        </div>
                    ))}

                </Swiper>
            </div>
        </>
    )
}
export default Hero