'use client'

import React,{useEffect} from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { products } from "./common/common";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
// const products = [
//   {
//     id: 1,
//     image: "/featuredhome3.webp",
//     title: "Antiseptic Spray",
//     price: "$129.00",
//     originalPrice: "$140.00",
//     rating: [1, 1, 1, 0.5, 0] 
//   },
//   {
//     id: 2,
//     image: "/stethoscope.webp",
//     title: "Digital Stethoscope",
//     price: "$145.00",
//     originalPrice: "$155.00",
//     rating: [1, 1, 1, 0.5, 0]
//   },
//   {
//     id: 3,
//     image: "/gun.webp",
//     title: "Thermometer Gun",
//     price: "$135.00",
//     originalPrice: "$145.00",
//     rating: [1, 1, 1, 0.5, 0]
//   },
//   {
//     id: 4,
//     image: "/stethoscope.webp",
//     title: "Digital Stethoscope",
//     price: "$145.00",
//     originalPrice: "$155.00",
//     rating: [1, 1, 1, 0.5, 0]
//   },
//   {
//     id: 5,
//     image: "/featuredhome2.webp",
//     title: "Tail Light Lens",
//     price: "$149.00",
//     originalPrice: "$162.00",
//     rating: [1, 1, 1, 0.5, 0]
//   },
//   {
//     id: 6,
//     image: "/featuredhome1.webp",
//     title: "Coil Spring Kit",
//     price: "$140.00",
//     originalPrice: "$150.00",
//     rating: [1, 1, 1, 0.5, 0]
//   },
//   {
//     id: 7,
//     image: "/cosmetic-container.webp",
//     title: "Cosmetic Containers",
//     price: "$110.00",
//     originalPrice: "$120.00",
//     rating: [1, 1, 1, 0.5, 0]
//   },
//   {
//     id: 8,
//     image: "/gun.webp",
//     title: "Thermometer Gun",
//     price: "$145.00",
//     originalPrice: "$155.00",
//     rating: [1, 1, 1, 0.5, 0]
//   },
//   {
//     id: 9,
//     image: "/stethoscope.webp",
//     title: "Digital Stethoscope",
//     price: "$145.00",
//     originalPrice: "$155.00",
//     rating: [1, 1, 1, 0.5, 0]
//   }
// ];

function Featured() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-slate-100 h-full py-12 lg:px-24 md:px-14 px-5">
      <div className="lg:text-5xl text-4xl font-semibold text-center pb-1">
        <h1 className="text-[25px] md:text-[32px] lg:text-[36px]">Featured Products</h1>
      </div>
      <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 overflow-hidden">
        {products.slice(0,9).map((product) => (
          <div key={product.id}  className="border border-gray-100 shadow-sm bg-white w-full h-full p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 " data-aos="zoom-in">
            <div className="flex items-center ">
              <img src={product.image} alt={product.title} className="h-28 w-28 mr-5 object-cover " />
              <div>
                <div className="flex gap-1 text-yellow-400 text-sm">
                  {product.rating.map((r, index) => {
                    if (r === 1) return <FaStar key={index} />;
                    if (r === 0.5) return <FaStarHalfAlt key={index} />;
                    return <FaRegStar key={index} />;
                  })}
                </div>
                <Link href={product.link}>
                <p className="pt-2 lg:pt-3 font-semibold lg:font-bold tracking-wide text-sm lg:text-base text-slate-950 lg:mb-1 hover:text-[#0a9a73]">
                  {product.title}
                </p>
                </Link>
                <div className="inline-flex space-x-3 items-center text-[#0a9a73]">
                  <span className="font-semibold lg:font-bold text-xs lg:text-base">{product.price}</span>
                  <del className="font-semibold lg:font-bold text-xs lg:text-sm">{product.originalPrice}</del>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
