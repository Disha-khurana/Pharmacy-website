'use client'
import React, { useState } from 'react'
import {
    FaSearch,
    FaHeart,
    FaShoppingCart,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPlus,
    FaLinkedin,
  } from "react-icons/fa";
  import { GiHamburgerMenu } from "react-icons/gi";
  import { AiOutlineClose } from "react-icons/ai";
  import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
  

export default function Navbar2() {

    const [state, setState] = useState({
        showSidebar: false,
        openDropdown: null,
      });
    
      const [openDropdown, setOpenDropdown] = useState(null);
     
    
      const handleStateChange = (key, value) => {
        setState((prevState) => ({
          ...prevState,
          [key]: value,
        }));
      };

    const toggleMenu = () => {
        handleStateChange("showSidebar", !state.showSidebar);
      };

  return (
    <div>
    <div className="text-slate-400 flex lg:hidden border p-2 mb-4 font-bold justify-between border-slate-200 mx-5 md:mx-10 lg:mx-0">
        <h1>MENU</h1>
        <GiHamburgerMenu className="text-lg font-bold" onClick={toggleMenu} />
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transition-transform transform ${
          state.showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <div className="flex lg:hidden flex-col h-full">
          <div className="px-6 py-9 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <img
                  src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/logo.webp"
                  alt="Logo"
                  className="h-10 w-full object-cover"
                />
              </div>
              <button className="text-lg font-bold" onClick={toggleMenu}>
                <AiOutlineClose />
              </button>
            </div>

            <div className="mb-9 relative">
              <form action="#" className="flex">
                <div className="relative flex w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-md"
                  />
                  <button
                    type="submit"
                    className="absolute top-2 left-2 text-gray-500"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1">
              <ul className="space-y-7">
                {[
                  
                  {
                    title: "ABOUT",
                    subItems: [
                      "About",
                      "Services",
                      "Service Details",
                      "Portfolio",
                      "Portfolio - 02",
                      "Portfolio Details",
                      "Team",
                      "Team Details",
                      "FAQ",
                      "Google Map Locations",
                    ],
                  },
                  {
                    title: "SHOP",
                    subItems: [
                      "Shop",
                      "Shop Grid",
                      "Shop Left sidebar",
                      "Shop right sidebar",
                      "Shop details",
                      "Cart",
                      "Wishlist",
                      "Checkout",
                      "Order Tracking",
                      "My Account",
                      "Sign in",
                      "Register",
                    ],
                  },
                  {
                    title: "NEWS",
                    subItems: [
                      "News",
                      "News Grid",
                      "News Left sidebar",
                      "News Right sidebar",
                      "News details",
                    ],
                  },
                  {
                    title: "PAGES",
                    subItems: [
                      "About",
                      "Services",
                      "Service Details",
                      "Portfolio",
                      "Portfolio - 02",
                      "Portfolio Details",
                      "Team",
                      "Team Details",
                      "FAQ",
                      "History",
                      "Add Listing",
                      "Google Map Locations",
                      "404",
                      "Contact",
                      "Coming Soon",
                    ],
                  },
                ].map((item, index) => (
                  <li key={index} className="relative group">
                    <button className="flex items-center justify-between w-full text-left hover:text-[#0a9a73]">
                      {item.title}
                      {item.subItems && <span className="ml-1 text-xl">+</span>}
                    </button>
                    {item.subItems && (
                      <ul className="absolute left-full top-0 w-40 bg-white border border-gray-200 shadow-lg mt-2 space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-opacity duration-300 transform">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="hover:text-[#0a9a73]">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 w-full mt-3">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-5">
                  <Link href="https://www.facebook.com/">
                    <FaFacebookF />
                  </Link>
                  <Link href="https://x.com/home">
                    <FaTwitter />
                  </Link>
                  <Link href="https://www.instagram.com/">
                    <FaInstagram />
                  </Link>
                  <Link href="https://in.linkedin.com/">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="flex items-center text-gray-600 hover:text-[#0a9a73]"
                >
                  <FaHeart />
                  <span className="ml-2">Wishlist</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-gray-600 hover:text-[#0a9a73]"
                >
                  <FaShoppingCart />
                  <span className="ml-2">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
        <div className="w-full py-5 hidden lg:block bg-[#0a9a73] text-white sticky top-0 z-20 ">
          <ul className="space-x-9 flex font-semibold text-lg justify-center items-center">
            <li
              className="flex relative "
              
            ><Link href='/'>
            Home
            </Link>
              <FaPlus className="mt-[0.4rem] p-[3px]" />
            </li>
            <li
              className="flex relative "
              onMouseEnter={() => setOpenDropdown("about")}
            >
              About
              
              <FaPlus className="mt-[0.4rem] p-[3px]" />
              {openDropdown === "about" && (
                <div
                onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-[40px] z-10 bg-white w-[250px] h-auto border-green-600 border-t-4 shadow-md"
                >
                  <ul className="text-gray-500 py-5 px-9 font-normal">

                    <li className="my-5 hover:text-[#0a9a73]"><Link href='/about'>About</Link></li>
                    <li className="my-5 hover:text-[#0a9a73]">Services</li>
                    <li className="my-5 hover:text-[#0a9a73]">
                      Service Details
                    </li>
                    <li className="my-5 hover:text-[#0a9a73]">Gallery</li>
                    <li className="my-5 hover:text-[#0a9a73]">
                      Gallery Details
                    </li>
                    <li className="my-5 hover:text-[#0a9a73]">Team Details</li>
                    <li className="my-5 hover:text-[#0a9a73]">FAQ</li>
                    <li className="my-5 text-nowrap hover:text-[#0a9a73]">
                      Google Map Locations
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="flex relative "
              onMouseEnter={() => setOpenDropdown("shop")}
            >
              Shop
              <FaPlus className="mt-[0.4rem] p-[3px]" />
              {openDropdown === "shop" && (
                <div
                onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-[40px] bg-white z-10 w-[250px] h-auto border-green-600 border-t-4 shadow-md"
                >
                  <ul className="text-gray-500 py-5 px-9 font-normal">
                    <li className="my-5 hover:text-[#0a9a73]">Shop</li>
                    <li className="my-5 hover:text-[#0a9a73]">Shop Grid</li>
                    <li className="my-5 hover:text-[#0a9a73]">
                      Shop Left sidebar
                    </li>
                    <li className="my-5 hover:text-[#0a9a73]">
                      Shop Right sidebar
                    </li>
                    <li className="my-5 hover:text-[#0a9a73]">Shop Details</li>

                    <div className=" w-full ">
                      <div className="flex place-content-around lg:justify-start z-50 relative group">
                        <li className=" hover:text-[#0a9a73] flex">
                          Other Pages
                          <MdOutlineKeyboardArrowRight className="text-2xl" />
                          <MdOutlineKeyboardArrowRight className="-ms-4 text-2xl" />
                        </li>
                        <div className=" bg-white text-black shadow-lg absolute hidden group-hover:block p-8 w-[250px] top-[25px] border-green-600 border-t-4">
                          <p className="flex justify-start my-4 text-gray-600 hover:text-[#0a9a73]">
                            <span>Cart</span>
                          </p>
                          <p className="flex justify-start  my-4 text-gray-600 hover:text-[#0a9a73]">
                            <span>Wishlist</span>
                          </p>
                          <p className="flex justify-start  my-4 text-gray-600 hover:text-[#0a9a73]">
                            <span>Checkout</span>
                          </p>
                          <p className="flex justify-start  my-4 text-gray-600 hover:text-[#0a9a73]">
                            <span>Order Tracking</span>
                          </p>
                          <p className="flex justify-start  my-4 text-gray-600 hover:text-[#0a9a73]">
                            <span>My Account</span>
                          </p>
                          <p className="flex justify-start  my-4 text-gray-600 hover:text-[#0a9a73]">
                            <span>Sign In</span>
                          </p>
                          <p className="flex justify-start  my-4 text-gray-600 hover:text-[#0a9a73]">
                            <span>Register</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="flex relative "
              onMouseEnter={() => setOpenDropdown("news")}
            >
              News
              <FaPlus className="mt-[0.4rem] p-[3px]" />
              {openDropdown === "news" && (
                <div
                onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-[40px] w-[250px] z-10 bg-white h-auto border-green-600 border-t-4 shadow-md"
                >
                  <ul className="text-gray-500 py-5 px-9 font-normal">
                    <li className="my-5 hover:text-[#0a9a73]"><Link href='/blogdetails'>News</Link></li>
                    <li className="my-5 hover:text-[#0a9a73]">News Grid</li>
                    <li className="my-5 hover:text-[#0a9a73]">
                      News Left sidebar
                    </li>
                    <li className="my-5 hover:text-[#0a9a73]">
                      News Right sidebar
                    </li>
                    <li className="my-5 hover:text-[#0a9a73]">News Details</li>
                  </ul>
                </div>
              )}
            </li>
            <Link href="/contact" target="blank">
              <li >Contact</li>
            </Link>
          </ul>
        </div>
        </div>
  )
}
