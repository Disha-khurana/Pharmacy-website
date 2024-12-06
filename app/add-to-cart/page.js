"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { products } from "../components/common/common";
import { TbCircleXFilled } from "react-icons/tb";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { RiShip2Line } from "react-icons/ri";

export default function Page() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsInCart = storedCart.map((item) => {
      const product = products.find((p) => p.id === item.id);
      return {
        ...product,
        quantity: item.quantity,
      };
    });
    setCartItems(itemsInCart);
  }, []);

  const addToCart = (id, qty) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += qty; // Update quantity
    } else {
      cart.push({ id, quantity: qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(
      `Item ${id} added to cart. Current quantity: ${
        existingItem ? existingItem.quantity : qty
      }`
    );
    // Refresh the cart items state
    setCartItems(
      cart.map((item) => ({
        ...products.find((p) => p.id === item.id),
        quantity: item.quantity,
      }))
    );
  };

  const handleIncrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      addToCart(id, 1); // Add 1 more item
    }
  };

  const handleDecrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      addToCart(id, -1); // Remove 1 item
    }
  };

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

  return (
    <div>
      <div className="w-full h-full relative bg-gray-200 lg:bg-transparent ">
        <img src="/privacy.webp" className="hidden lg:block" />
        <div className="relative lg:absolute font-semibold top-0 justify-center px-5 md:px-14 lg:px-24 py-12 lg:py-0 flex flex-col h-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
            Shop cart
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <h2>Shop cart</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-0 lg:px-24 my-10 lg:my-20 lg:gap-8">
        <div className="lg:w-2/3 flex flex-col h-auto ">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
              <thead>
                <tr className="border-b-2 border-b-slate-100">
                  <th className="py-5 text-left px-6">Product</th>
                  <th className="py-5 text-center">Price</th>
                  <th className="py-5 text-center">Quantity</th>
                  <th className="py-5 text-center">Sub Total</th>
                  <th className="py-5 text-left"></th>
                  <th className="py-5 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-100">
                      <td className="py-4 px-6 border-b-2 border-b-slate-100 flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-20 w-20 object-cover rounded-lg"
                        />
                        <h2 className="py-4 px-2 text-lg font-semibold">
                          {product.title}
                        </h2>
                      </td>
                      <td className="py-4 px-2 border-b-2 border-b-slate-100">
                        <strong className="text-[#0a9a73] ml-2">
                          {product.price}
                        </strong>
                      </td>
                      <td className="py-4 px-2 font-semibold border-b-2 border-b-slate-100">
                        <div className="flex items-center gap-2">
                          <FaCircleMinus
                            className="text-4xl text-[#0a9a73] hover:text-black"
                            onClick={() => handleDecrease(product.id)}
                          />
                          <h2 className="border border-black rounded-full px-3 py-1">
                            {product.quantity}
                          </h2>
                          <FaCirclePlus
                            className="text-4xl text-[#0a9a73] hover:text-black"
                            onClick={() => handleIncrease(product.id)}
                          />
                        </div>
                      </td>
                      <td className="py-4 px-8 border-b-2 border-b-slate-100 ">
                        <strong>
                        ${(parseFloat(product.price) * product.quantity).toFixed(2)}
                        </strong>
                      </td>
                      <td className="py-4 px-2 border-b-2 border-b-slate-100 ">
                        
                          <TbCircleXFilled className="text-4xl  rounded-full text-[#0a9a73] hover:text-black" onClick={() => handleRemove(product.id)}/>
                        
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center p-4">
                      Your cart is empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-between bg-slate-50 items-center px-4 py-3 w-[45%] border border-black rounded-lg ">
              <h2>Coupon Code</h2>
              <h2 className="font-semibold">Apply Coupon</h2>
            </div>
            <Link href="/products">
              <button className="px-7 py-3 bg-[#0a9a73] hover:bg-black text-white font-semibold rounded-md">
                UPDATE CART
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 sticky top-0 px-5 md:px-10 lg:px-0 ">
          <h2 className="text-lg font-semibold pb-4">Cart Total</h2>
          <div className="flex flex-col border border-black rounded-md px-5 py-7 space-y-4">
            <h2 className="text-base text-center border border-black rounded-md py-2 font-semibold hover:bg-[#0a9a73] hover:text-white">
              Bank Offer 5% Cashback
            </h2>
            <div className="flex items-center gap-4 px-7 py-4 border border-black rounded-md">
              <RiShip2Line className="text-4xl" />
              <div className="flex flex-col">
                <h2 className="text-slate-600">FREE</h2>
                <h2 className="font-semibold">Enjoy the Product</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 px-7 py-4 border border-black rounded-md">
              <img src="/addcart.webp" />
              <div className="flex flex-col">
                <h2 className="font-semibold">Enjoy the Product</h2>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b border-b-slate-200 pb-3">
              <FiCheckCircle className="text-xl" />
              <p className="font-semibold tracking-wide ">
                You will save ₹504 on this order
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="font-bold tracking-wide text-base">Total</h2>
              <strong className="text-xl">
                $
                {cartItems
                  .reduce((total, item) => {
                    const itemPrice = parseFloat(item.price) || 0; 
                    return total + itemPrice * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </strong>
            </div>

            <button className="bg-[#0a9a73] hover:bg-black tracking-wide text-white font-bold py-2 rounded-md">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
