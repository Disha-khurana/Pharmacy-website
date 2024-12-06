'use client'
import React,{useEffect} from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { products } from "./common/common";
import AOS from 'aos';
import 'aos/dist/aos.css';


// const products = [
//   {
//     id: 1,
//     image: '/band.webp',
//     title: 'Cosmetic Containers',
//     price: '$78.00',
//     oldPrice: '$85.00',
//     isNew: true,
//   },
//   {
//     id: 2,
//     image: '/cover.webp',
//     title: 'Antiseptic Spray',
//     price: '$32.00',
//     oldPrice: '$46.00',
//     isNew: false,
//   },
//   {
//     id: 3,
//     image: '/glove.webp',
//     title: 'Digital Stethoscope',
//     price: '$25.00',
//     oldPrice: '$35.00',
//     isNew: true,
//   },
//   {
//     id: 4,
//     image: '/machine.webp',
//     title: 'Blue Hand Gloves',
//     price: '$150.00',
//     oldPrice: '$180.00',
//     isNew: true,
//   },
//   {
//     id: 5,
//     image: '/img2.webp',
//     title: 'Digital Stethoscope',
//     price: '$25.00',
//     oldPrice: '$35.00',
//     isNew: true,
//   },
//   {
//     id: 6,
//     image: '/img4.webp',
//     title: 'Digital Stethoscope',
//     price: '$25.00',
//     oldPrice: '$35.00',
//     isNew: true,
//   },
//   {
//     id: 7,
//     image: '/img1.webp',
//     title: 'Digital Stethoscope',
//     price: '$25.00',
//     oldPrice: '$35.00',
//     isNew: true,
//   },
//   {
//     id: 8,
//     image: '/8.webp',
//     title: 'Digital Stethoscope',
//     price: '$25.00',
//     oldPrice: '$35.00',
//     isNew: true,
//   },
// ];

export default function BestSelling() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='py-12'>
      <div className="lg:text-5xl text-4xl font-semibold text-center pb-10">
        <h1 className='text-[25px] md:text-[32px] lg:text-[36px]'>Best Selling Items</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:px-24 md:px-14 px-5 overflow-hidden ">
        {products.slice(1,9).map((product) => (
          <div key={product.id} className="flex flex-col border border-gray-100 shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-105" data-aos="zoom-in">
            <div className="relative">
              {product.isNew && (
                <ul className="absolute top-3 right-3">
                  <li className="bg-[#0a9a73] text-white md:text-sm text-xs flex font-semibold items-center justify-center px-1 py-1 md:px-3 md:py-1">
                    NEW
                  </li>
                </ul>
              )}
              <img src={product.image} alt={product.title} className="h-auto w-auto" />
            </div>
            <div className='p-4'>
              <div className="flex gap-1 text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
              <h1 className="pt-2 font-bold tracking-wide text-sm text-slate-950 mb-1 hover:text-[#0a9a73]">
                {product.title}
              </h1>
              <div className="inline-flex space-x-3 items-center text-[#0a9a73] mb-3">
                <span className="font-bold text-sm">{product.price}</span>
                <del className="font-bold md:text-sm text-xs">{product.oldPrice}</del>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}
