"use client";

import React from "react";
import {
  FaMicroscope,
  FaSyringe,
  FaStethoscope,
  FaHandHoldingMedical,
  FaProcedures,
  FaNotesMedical,
  FaBoxTissue,
  FaPumpMedical,
  FaTooth,
  FaBong,
} from "react-icons/fa";

// Import Swiper and SwiperSlide components directly
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  const sliderData = [
    { id: 0, title: "All Products", icon: <FaSyringe /> },
    { id: 1, title: "Germs Pads", icon: <FaStethoscope /> },
    { id: 2, title: "Accessories", icon: <FaHandHoldingMedical /> },
    { id: 3, title: "Medicine Cap", icon: <FaProcedures /> },
    { id: 4, title: "Best Deals", icon: <FaNotesMedical /> },
    { id: 5, title: "Germs Pads", icon: <FaBoxTissue /> },
    { id: 6, title: "Accessories", icon: <FaPumpMedical /> },
    { id: 7, title: "Dental Item", icon: <FaTooth /> },
    { id: 8, title: "Best Deals", icon: <FaMicroscope /> },
    { id: 9, title: "Medicine Cap", icon: <FaBong /> },
    { id: 10, title: "Best Deals", icon: <FaMicroscope /> },
    { id: 11, title: "Germs Pads", icon: <FaStethoscope /> },
    { id: 12, title: "Accessories", icon: <FaHandHoldingMedical /> },
    { id: 13, title: "Medicine Cap", icon: <FaProcedures /> },
    { id: 14, title: "Best Deals", icon: <FaNotesMedical /> },
    { id: 15, title: "Germs Pads", icon: <FaBoxTissue /> },
    { id: 16, title: "Accessories", icon: <FaPumpMedical /> },
    { id: 17, title: "Dental Item", icon: <FaTooth /> },
    { id: 18, title: "Best Deals", icon: <FaMicroscope /> },
    { id: 19, title: "Medicine Cap", icon: <FaBong /> },
    { id: 20, title: "Best Deals", icon: <FaMicroscope /> },
  ];

  return (
    <div className="relative lg:px-24 md:px-14 px-5 ">
      <Swiper
  modules={[Navigation, Autoplay]}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    el: ".swiper-pagination",
  }}
  centeredSlides={true}
  loop={true}
  breakpoints={{
    
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
   
    1024: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  }}
  className="mySwiper"
>
  {sliderData.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="flex flex-col items-center group  py-2">
        <span className="text-gray-400 group-hover:text-green-800 text-3xl md:text-3xl lg:text-4xl p-4">
          {item.icon}
        </span>
        <h2 className="text-sm lg:text-base font-semibold group-hover:text-green-800 text-nowrap">
          {item.title}
        </h2>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      <div className="border-b-2 border-gray-200 py-3"></div>
    </div>
  );
}