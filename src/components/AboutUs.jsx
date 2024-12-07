import React from 'react'
import { stats } from '../constants'
import styles from '../style.js'
import Reveal from './Reveal'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const AboutUs = () => {
  return (
    <section className='min-w-full'>
      <div className='min-w-full'>
        <Reveal>
          <h1 className="right-0 text-[64px] font-medium leading-tight text-white font-sans">
            About Us
          </h1>
        </Reveal>
        <h1 className=" text-center min-w-full text-[54px] font-bold text-secondary font-sans">
          7th Edition so far
        </h1>
      </div>
      <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-6`}>
        {stats.map((stat) => (
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className='font-sans font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-secondary'>{stat.value}</h4>
            <p className='font-sans text-white font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3'>{stat.title}</p>
          </div>

        ))}
      </div>
      <div
        className=" flex-col lg:flex-row xs:flex-col-reverse md:flex-col-reverse sm:flex-row-reverse justify-between pb-5 mb-3 font-sans
  "
      >
        <div className='justify-center flex flex-col'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,

            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-1/2 w-1/2"
          >
            <SwiperSlide >
              <img src="https://res.cloudinary.com/dzm8drvuk/image/upload/v1714803834/nh24/photoGallery1_o4xtih.jpg" className="rounded-box" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dzm8drvuk/image/upload/v1714804301/nh24/photoGallery3_ebpbe9.jpg" className="rounded-box" />  </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dzm8drvuk/image/upload/v1714804299/nh24/photoGallery2_ufm9ml.jpg" className="rounded-box" />
            </SwiperSlide>

          </Swiper>

          <div className='justify-center items-center mt-10' >
            <div
              className="font-
      myFont leading-tight text-white font-sans items-center"
            >
              <div className="md:text-[1.5rem] lg:text-[2.25rem] sm:text-[1.5rem] xs:text-[1.2rem] xxs:text-[1rem] leading-normal lg:leading-snug  xxs:flex-col">
                <div className='justify-center items-center flex flex-col'>
                  <div className="mb-2 text-center">
                    We support{" "}
                    <span className="text-secondary font-semiBold text-center ">
                      budding developers
                    </span>{" "}
                    on their quest to set the spirit of innovation ablaze.
                  </div>


                  <div className="mb-2 text-center ">
                    Over the course of{" "}
                    <span className="text-secondary font-semiBold ">
                      6 editions
                    </span>
                    , NMIT Hacks has hosted participants coming from prestigious
                    institutions across India, and industry experts with several
                    years of domain-experience
                  </div>


                  <div className="text-center">
                    This makes it the perfect opportunity for both{" "}
                    <span className="text-secondary font-semiBold ">
                      beginners
                    </span>{" "}
                    and{" "}
                    <span className="text-secondary font-semiBold ">
                      expert developers
                    </span>{" "}
                    to learn, collaborate, and build their network.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutUs




// <div className="carousel  h-[40rem] w-[60rem] max-w-sm xxs:max-w-xxs p-4 space-x-4 bg-primary rounded-box">
// <div className="carousel-item">
//   <img
//     src="\assets\photoGallery2.jpg"
//     className="rounded-box "
//   />
// </div>
// <div className="carousel-item">
//   <img src="\assets\photoGallery1.jpg" className="rounded-box" />
// </div>
// <div className="carousel-item">
//   <img src="\assets\photoGallery3.jpg" className="rounded-box" />
// </div>
// <div className="carousel-item">
//   <img src="\assets\photoGallery4.jpg" className="rounded-box" />
// </div>
// <div className="carousel-item">
//   <img src="/assets/photoGallery5.jpg" className="rounded-box" />
// </div>
// <div className="carousel-item">
//   <img src="/assets/photoGallery6.jpg" className="rounded-box" />
// </div>
// {/* <div className="carousel-item">
//   <img
//     src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
//     className="rounded-box"
//   />
// </div> */}
// </div>
