"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlinePlusSmall } from "react-icons/hi2";
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
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  const [state, setState] = useState({
    showSidebar: false,
    openDropdown: null,
});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleStateChange = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const toggleMenu = () => {
    handleStateChange("showSidebar", !state.showSidebar);
  };

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  

  return (
    <div className="lg:px-24 md:px-14 px-5">
      {/* <div className="text-slate-400 flex lg:hidden border p-1 lg:p-2 mb-3 lg:mb-4 font-bold justify-between border-slate-200">
        <p>MENU</p>
        <GiHamburgerMenu className="text-lg font-bold mt-1" onClick={toggleMenu} />
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
              <form action="#" className="flex ">
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

      <div className="h-auto flex py-0 lg:py-2 sticky top-0 z-20 bg-white">
        <div className="w-full relative">
          <div
            className="bg-emerald-700 text-white p-2 lg:p-4 lg:w-56 w-full font-bold flex justify-between"
            onMouseEnter={() => setOpenDropdown("categories")}
          >
            <div  className="flex gap-6 items-center">
              <GiHamburgerMenu className="text-lg lg:text-2xl font-bold" />
              <h2 className="text-white text-base">CATEGORIES</h2>
            </div>
            <div>
              <MdOutlineKeyboardArrowDown className="text-2xl " />
            </div>
          </div>
          {openDropdown === "categories" && (
            <div onMouseLeave={() => setOpenDropdown(null)} className="absolute top-[55px] w-56 z-10 bg-white h-auto border">
              <ul className="text-gray-500 font-normal">
                <li className="py-3 px-4 hover:text-[#0a9a73] flex gap-2 items-center text-md border-b border-[#e5eaee]">
                  <span className="text-xl">🍎</span> Vegetables and Fruits
                </li>
                <li className="py-3 px-4 hover:text-[#0a9a73] border-b flex items-center text-md gap-2 border-[#e5eaee]">
                  <span className="text-lg">🍖</span> Fresh Meat
                </li>
                <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] gap-2 flex items-center text-md">
                  <span className="text-xl">🐟</span> Fish and Seafood
                </li>
                <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] gap-2 flex items-center text-md">
                  <span className="text-lg">🧈</span> Butter and Cream
                </li>
                <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] gap-2 flex items-center text-md">
                  <span className="text-lg">🛒</span> Oil and Vinegar
                </li>
                <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] gap-2 flex items-center text-md">
                  <span className="text-xl">🍞</span> Breads
                </li>
                <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] gap-2 flex items-center text-md">
                  <span className="text-xl">🍏</span> Apple Juice
                </li>
                <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] gap-2 flex items-center text-md">
                  <span className="text-lg">🌰</span> Dry Nuts
                </li>
                <li
                  className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] flex"
                  onClick={handleToggleMore}
                >
                  More Categories
                  <HiOutlinePlusSmall
                    className={`text-2xl ${
                      showMore ? "transform rotate-45" : ""
                    }`}
                  />
                </li>
                {showMore && (
                  <>
                    <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] flex items-center text-md">
                      <span className="text-lg">🍭</span> Candies
                    </li>
                    <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] flex items-center text-md">
                      <span className="text-lg">🥛</span> Dairy Products
                    </li>
                    <li className="py-3 px-4 hover:text-[#0a9a73] border-b border-[#e5eaee] flex items-center text-md">
                      <span className="text-lg">🌿</span> Organic Products
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="w-full py-3 hidden lg:block">
          <ul className="space-x-5 flex font-semibold text-lg">
            <li
              className="flex relative hover:text-[#0a9a73]"
            ><Link href='/'>
              Home
              </Link>
              <FaPlus className="mt-[0.4rem] p-[3px]" />
            </li>
            <li
              className="flex relative hover:text-[#0a9a73]"
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
                    <Link href='/about '>
                    <li className="my-5 hover:text-[#0a9a73]">About</li>
                    </Link>
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
                      Google Map Locations */}
                    {/* </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="flex relative hover:text-[#0a9a73]"
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
              className="flex relative hover:text-[#0a9a73] "
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
                  <Link href='/blogdetails'>
                    <li className="my-5 hover:text-[#0a9a73]">News</li>
                    </Link>
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
              <li className="hover:text-[#0a9a73]">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="lg:flex w-full justify-end items-center hidden text-lg gap-1">
          <TbPhoneCall className="text-green-700" />
          <Link href="tel:+123-456-789-10" target="blank">
            <h2 className="font-semibold">+91-456-789-10</h2>
          </Link>
        </div>
      </div> */}

<div className="flex flex-col lg:flex-row h-auto lg:py-12 pt-10 relative" >
        <img
          src="/background1.webp"
          alt=""
          className=" lg:w-3/5  object-cover h-auto"
        />
        <div className="absolute lg:top-[30%] md:top-[12%] top-[8%] lg:ms-12 md:ms-10 ms-8">
          <h6 className="text-emerald-600 font-bold text-xs md:text-base">
            Up To 50% Off Today Only!
          </h6>
          <h1 className="text-xl md:text-4xl lg:text-4xl font-bold lg:py-3 py-1 tracking-wide font-head">
            Gold Standard <br />
            Pre-Workout
          </h1>
          <h5 className="text-orange-500 font-extrabold my-2 tracking-wide text-xs md:text-lg lg:text-lg">
            Starting at &16.99
          </h5>
          <button className="bg-emerald-600 text-white p-1 md:p-3 lg:p-3 mt-2 md:mt-5 lg:mt-5 text-xs md:text-base">
            Shop now
          </button>
        </div>

        <div className="flex flex-col lg:ms-8">
          <img
            src="/back2.webp"
            alt=""
            className="lg:w-[600px] w-full h-auto my-5 md:my-10 lg:my-0 lg:mb-7"
          />
          <img
            src="/back3.webp"
            alt=""
            className="lg:w-[600px] w-full h-auto"
          />
        </div>
      </div>
      </div>
  );
}