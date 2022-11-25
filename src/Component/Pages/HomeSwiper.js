import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import origins from "../Images/origins.png";
import redheadphone from "../Images/red-headphone.png";
import mike from "../Images/mike.png";
import blueheadphone from "../Images/blue-headphone.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./HomeSwiper.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
    
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={origins} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={redheadphone} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={mike} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={blueheadphone} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={origins} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={redheadphone} alt="" /> </SwiperSlide>
     
      </Swiper>
    </>
  );
}
