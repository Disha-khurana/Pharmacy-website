'use client'
import React,{useEffect} from "react";
import { products } from "./common/common";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

// const products = [
//   {
//     id: 1,
//     name: "Cosmetic Containers",
//     price: "$78.00",
//     originalPrice: "$85.00",
//     image: "/cosmetic-container.webp",
//     isNew: true
//   },
//   {
//     id: 2,
//     name: "Antiseptic Spray",
//     price: "$32.00",
//     originalPrice: "$46.00",
//     image: "/spray.webp",
//     isNew: false
//   },
//   {
//     id: 3,
//     name: "Digital Stethoscope",
//     price: "$25.00",
//     originalPrice: "$35.00",
//     image: "/stethoscope.webp",
//     isNew: false
//   },
//   {
//     id: 4,
//     name: "Blue Hand Gloves",
//     price: "$150.00",
//     originalPrice: "$180.00",
//     image: "/glove.webp",
//     isNew: false
//   }
// ];

function Trending() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-10 lg:py-16 lg:px-24 md:px-14 px-5">
      <div className="lg:text-5xl text-4xl font-semibold text-center py-7">
        <h1 className="text-[25px] md:text-[32px] lg:text-[36px]">Trending Products</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-16 overflow-hidden" >
        {products.slice(0,8).map((product) => (
          <div key={product.id} className="flex flex-col border border-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-105" data-aos="zoom-in">
            <div className="relative">
              {product.isNew && (
                <ul className="absolute top-3 right-3">
                  <li className="bg-green-600 text-white md:text-sm text-xs flex font-semibold items-center justify-center px-2 py-1 md:px-3 md:py-1">
                    NEW
                  </li>
                </ul>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="h-auto w-auto"
              />
            </div>
            <Link href={product.link}>
            <p className="pt-3 font-semibold lg:font-bold tracking-wide text-sm lg:text-base text-slate-950 mb-1 text-center hover:text-[#0a9a73]">
              {product.title}
            </p>
            </Link>
            <div className="inline-flex space-x-3 items-center justify-center text-[#0a9a73] mb-3">
              <span className="font-semibold lg:font-bold text-xs lg:text-base">{product.price}</span>
              <del className="font-semibold lg:font-bold lg:text-sm text-xs">{product.originalPrice}</del>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
