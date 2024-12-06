'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaHeart } from "react-icons/fa";
import { FaHome, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { products } from '../components/common/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const addToWishlist = (id) => {
    const itemInCart = cartItems.find((item) => item.id === id);
    if (itemInCart) {
      // Add to wishlist
      setWishlistItems((prev) => {
        const updatedWishlist = [...prev, itemInCart];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
        return updatedWishlist;
      });

      // Remove from cart
      setCartItems((prev) => {
        const updatedCart = prev.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
        return updatedCart;
      });
      
      console.log(`Item ${id} moved to wishlist.`);
    }
  };

  const addtoCart = (id) => {
    const existingItem = cartItems.find(item => item.id === id);
    const updatedCart = existingItem
      ? cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...cartItems, { id, quantity: 1 }];

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log(`Item ${id} added to cart. Current quantity: ${existingItem ? existingItem.quantity + 1 : 1}`);
  };

  const [likedProducts, setLikedProducts] = useState({});
  const [showImg, setShowImg] = useState(null);

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
    <div>
      <div className="w-full h-full relative bg-gray-200 lg:bg-transparent">
        <img src="/productbanner.webp" className="hidden lg:block" />
        <div className="relative lg:absolute font-semibold top-0 justify-center px-5 md:px-14 lg:px-24 py-12 lg:py-0 flex flex-col h-full" data-aos="fade-right">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
            Products
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <Link href="/products">
              <h2>Products</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 lg:px-24 md:px-14 px-5 py-10 md:py-12 lg:py-20'>
        {products.slice(0,12).map((product) => (
          <div key={product.id} className='flex flex-col hover:shadow-xl' data-aos="zoom-in">
            <div className='relative group'>
              <img
                src={product.image}
                alt={product.title}
                className="h-auto w-auto "
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <span className="bg-white shadow-lg flex items-center text-gray-500">
                  <AiOutlineEye className="w-[2.3rem] h-[2.1rem] p-1 border-r-2 border-gray-400 hover:bg-green-700 hover:text-white transition-colors duration-300" onClick={() => handleImageClick(product.id)} />
                  <HiOutlineShoppingCart className="w-[2.3rem] h-[2.1rem] p-1 border-r-2 border-gray-400 hover:bg-green-700 hover:text-white transition-colors duration-300" onClick={() => addtoCart(product.id)} />
                </span>
              </div>
              <div className='absolute top-5 right-5'>
                <FaHeart
                  className={`text-lg ${likedProducts[product.id] ? 'text-[#0a9a73]' : 'text-gray-300'}`} 
                  onClick={() => { handleClick(product.id); addToWishlist(product.id); }}
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center border border-slate-100 p-3'>
              <div className="flex gap-1 text-yellow-400 text-xs md:text-sm">
                {product.rating.map((r, index) => {
                  if (r === 1) return <FaStar key={index} />;
                  if (r === 0.5) return <FaStarHalfAlt key={index} />;
                  return <FaRegStar key={index} />;
                })}
              </div>
              <Link href={product.link}>
                <h1 className='pt-1 md:pt-3 font-bold tracking-wide lg:text-base md:text-sm text-xs text-slate-950 mb-1 hover:text-green-600 text-center'>
                  {product.title}
                </h1>
              </Link>
              <div className='inline-flex space-x-1 items-center'>
                <del className='font-bold text-[11px] md:text-xs text-green-300'>{product.originalPrice || ""}</del>
                <span className='font-bold text-xs md:text-sm text-green-600'>{product.price}</span>
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
            className={`max-w-full max-h-full object-contain transition-transform duration-300 ${showImg ? "scale-100" : "scale-0"}`}
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
