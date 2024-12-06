"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "./common/common"; // Ensure this import is correct

function FeaturedProducts() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [likedProducts, setLikedProducts] = useState({});
  const [showImg, setShowImg] = useState(null);

  const addtoCart = (id) =>{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // // Check if the item is already in the cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      
        existingItem.quantity += 1;
    } else {

        cart.push({ id, quantity: 1 });
    }


    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Item ${id} added to cart. Current quantity: ${existingItem ? existingItem.quantity : 1}`);
};

  const handleClick = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleImageClick = (id) => {
    setShowImg(id); 
  };

  const closeModal = () => {
    setShowImg(null);
  };

  return (
    <div className="lg:px-24 md:px-14 px-5 py-10 lg:py-16">
      <div className="lg:text-6xl text-4xl font-semibold text-center pb-7">
        <h1 className="text-[25px] md:text-[32px] lg:text-[36px]">
          Featured Products
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pb-7">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="flex flex-col" data-aos="zoom-in">
            <div className="relative group overflow-hidden">
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
                className="h-auto w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <span className="bg-white shadow-lg flex items-center text-gray-500">
                  <AiOutlineEye
                    className="w-[2.3rem] h-[2.1rem] p-1 border-r-2 border-gray-400 text-gray-300 hover:bg-[#0a9a73] hover:text-white transition-colors duration-300"
                    onClick={() => handleImageClick(product.id)} 
                  />
                  <HiOutlineShoppingCart className="w-[2.3rem] h-[2.1rem] p-1 text-gray-300 border-r-2 border-gray-400 hover:bg-[#0a9a73] hover:text-white transition-colors duration-300" 
                  onClick={()=>addtoCart(product.id)}/>
                  <FaHeart
                    className={`w-[2.3rem] h-[2.1rem] p-1 text-lg ${
                      likedProducts[product.id] ? "text-[#0a9a73]" : "text-gray-300"
                    }`}
                    onClick={() => handleClick(product.id)}
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border border-slate-100 p-3">
              <Link href={product.link}>
                <p className="font-semibold lg:font-bold tracking-wide lg:text-base text-sm text-slate-950 mb-1 hover:text-[#0a9a73]">
                  {product.title}
                </p>
              </Link>
              <div className="inline-flex space-x-3 items-center">
                <span className="font-semibold lg:font-bold text-xs lg:text-base">
                  {product.price}
                </span>
                <del className="font-semibold lg:font-bold text-xs lg:text-sm text-red-500">
                  {product.originalPrice}
                </del>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showImg && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
          <img
            src={products.find((product) => product.id === showImg)?.image}
            alt="Product"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;
