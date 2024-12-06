"use client"; // This line is necessary for Next.js app router

import Link from "next/link";
import React from "react";
import { useEffect,useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { products } from "../components/common/common";
import { TbCircleXFilled } from "react-icons/tb";


export default function page() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsInCart = storedCart.map((item) => {
        const product = products.find((p) => p.id === item.id);
        return {
            ...product
        };
    });
    setCartItems(itemsInCart);
}, []);



const handleRemove = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== id); // Remove the item
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Update cartItems state to reflect the changes
  const updatedItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
    };
  });
  
  setCartItems(updatedItems);
};






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

  return (
    <>
    <div className="w-full h-full relative bg-gray-200 lg:bg-transparent ">
        <img src="/privacy.webp" className="hidden lg:block" />
        <div
          className="relative lg:absolute font-semibold top-0 justify-center px-5 md:px-14 lg:px-24 py-12 lg:py-0 flex flex-col h-full"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
            Wishlist
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <h2>Wishlist</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 md:py-20">
        <div className="flex justify-center">
          <div className="lg:w-9/12 w-full">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                <thead>
                  <tr className=" border-b-2 border-b-slate-100">
                    <th className="py-5 text-left ps-5">Product</th>
                    <th className="py-5 text-left ">Price</th>
                    <th className="py-5 text-left">Stock</th>
                    <th className="py-5 text-left"></th>
                    <th className="py-5 text-left"></th>
                    <th className="py-5 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(1,4).map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-100"
                    >
                      <td className="py-6 px-6 border-b-2 border-b-slate-100 flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-24 w-24 object-cover rounded-lg"
                        />
                      
                      <h2 className="py-6 px-2 text-lg font-semibold">{product.title}</h2></td>
                      <td className="py-6 px-2 border-b-2 border-b-slate-100">
                        <del className="text-gray-600">{product.originalPrice}</del>
                        <strong className="text-green-600 ml-2">{product.price}</strong>
                      </td>
                      <td className="py-6 px-2 font-semibold border-b-2 border-b-slate-100">{product.stock}</td>
                      <td className="py-6 px-8 border-b-2 border-b-slate-100 ">
                        <button  onClick={()=>addtoCart(product.id)} className="hover:bg-white  hover:text-black hover:border border-black transition-colors duration-300 ease-in-outtext-nowrap bg-gray-800 text-white rounded px-4 py-2">
                          Add To Cart
                        </button>
                      </td>
                      <td className="py-6 px-2 border-b-2 border-b-slate-100 ">
                      
                        <TbCircleXFilled  className='text-4xl rounded-full' onClick={()=>handleRemove(product.id)}/>
                       
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
}


