'use client'
import React,{useEffect} from "react";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return(
<div className=" bg-[#171b2a] w-full lg:px-24 md:px-10 px-5 md:mt-10">
      <div className="relative bg-[#198754] text-center py-8 lg:py-10 px-12 shadow-lg flex flex-col lg:flex-row items-center justify-between lg:gap-8" >
       
        <div className="text-white " data-aos="fade-right">
          <h1 className="text-[20px] md:text-2xl lg:text-[2.3rem] font-semibold leading-[1.5] md:leading-[1.5] lg:leading-tight ">
            Buy medical disposable face mask 
            to protect your loved ones
          </h1>
        </div>

        
        <div className="flex flex-row lg:flex-col items-center mt-5 lg:mt-0" data-aos="fade-left">
        <button className="group hover:w-52 flex justify-center w-48 items-center gap-4 bg-white text-black py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
  Explore Products <MdArrowForward className="group-hover:translate-x-3 duration-200" />

</button>
        </div>
      </div>
    </div>
    )
}