"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaRegUser,
  FaPlus,
} from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Nav() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: false
    });
  }, []);
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
    <div className="sticky top-0 z-20">
      <div className="lg:text-slate-400 flex lg:hidden shadow-sm sticky top-0 z-50 bg-slate-50 font-bold justify-between items-center px-5 md:px-14 lg:px-24 py-5">
        <img src="/logo.webp" className="w-[40%] md:w-auto" />
        <div className="gap-3 flex items-center">
          <FaRegUser className="text-base cursor-pointer lg:hidden" />
          <AiOutlineShoppingCart className="text-2xl cursor-pointer lg:hidden" />
          <GiHamburgerMenu
            className="text-2xl font-bold"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transition-transform transform ${
          state.showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <div className="flex flex-col h-full" data-aos="fade-right">
          <div className="px-6 py-9 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <Link href="/">
                  <img
                    src="/logo.webp"
                    alt="Logo"
                    className="h-10 w-full object-cover"
                  />
                </Link>
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
            <div className="flex-1 lg:hidden">
              <ul className="space-y-7">
                {[
                  {
                    title: "HOME",
                    link: "/home",
                  },
                  {
                    title: "ABOUT",
                    link: "/about",
                  },
                  {
                    title: "SERVICES",
                    subItems: [
                      {
                        name: "Medical Accessories",
                        link: "/services/medical-accessories",
                      },
                      {
                        name: "Covid-19 Treatment",
                        link: "/services/covid-treatment",
                      },
                      {
                        name: "24Hours Emergency Care",
                        link: "/services/emergency-care",
                      },
                      {
                        name: "Online Free Consultations",
                        link: "/services/free-consultations",
                      },
                      {
                        name: "Qualified Products",
                        link: "/services/qualified-products",
                      },
                      {
                        name: "Self Protection Kit",
                        link: "/services/self-protection-kit",
                      },
                    ],
                  },
                  {
                    title: "BLOG",
                    link: "/blog",
                  },
                  {
                    title: "PRODUCTS",
                    link: "/products",
                  },
                ].map((item, index) => (
                  <li key={index} className="relative group">
                    <Link href={item.link || "#"}>
                      <button className="flex items-center justify-between w-full text-left hover:text-[#0a9a73]">
                        {item.title}
                        {item.subItems && (
                          <span className="ml-1 text-xl">+</span>
                        )}
                      </button>
                    </Link>
                    {item.subItems && (
                      <ul className="absolute left-full top-0 w-60 text-nowrap bg-white border border-gray-200 shadow-lg mt-2 py-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-opacity duration-300 transform">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.link}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem.name}
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

      <div className="bg-slate-50 sticky top-0 w-full h-full z-20" onMouseLeave={() => setOpenDropdown(null)}>
        <div className="w-full hidden lg:flex items-center justify-between py-4 px-5 md:px-14 lg:px-24 text-wrap">
          <div className="flex w-full">
            <Link href="/">
              <img src="/logo.webp" />
            </Link>
          </div>

          <ul className="space-x-7 w-full font-semibold text-[17px] flex items-center">
            <Link href="/" className="flex items-center hover:text-[#0a9a73]">
              <li>Home</li>
            </Link>
            <Link href="/about" className="hover:text-[#0a9a73]">
              <li>About</li>
            </Link>

            <li
              className="flex relative hover:text-[#0a9a73]"
              onMouseEnter={() => setOpenDropdown("service")}
            >
              <Link href="/services">Services</Link>
              <FaPlus className="mt-[0.4rem] p-[3px]" />
              {openDropdown === "service" && (
                <div
                  
                  className="absolute top-[40px] bg-white z-10 w-[250px] h-auto border-green-600 border-t-4 shadow-md "
                  data-aos="fade-up"
                >
                  <ul className="text-gray-500 px-7 py-5 font-normal text-nowrap space-y-3">
                    <Link href="/services/medical-accessories">
                      <li className=" hover:text-[#0a9a73] my-3">
                        Medical Accessories
                      </li>
                    </Link>
                    <Link href="/services/covid-treatment">
                      <li className=" hover:text-[#0a9a73] my-3">
                        Covid-19 Treatment
                      </li>
                    </Link>
                    <Link href="/services/24-hours-emergency-care">
                      <li className=" hover:text-[#0a9a73] my-3">
                        24 Hours Emergency Care
                      </li>
                    </Link>
                    <Link href="/services/online-free-consultations">
                      <li className=" hover:text-[#0a9a73] my-3">
                        Online Free Consultations
                      </li>
                    </Link>
                    <Link href="/services/qualified-products">
                      <li className=" hover:text-[#0a9a73] my-3">
                        Qualified Products
                      </li>
                    </Link>
                    <Link href="/services/self-protection-kit">
                      <li className=" hover:text-[#0a9a73] my-3">
                        Self Protection Kit
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <Link href="/blog" className="hover:text-[#0a9a73]">
              <li>Blog</li>
            </Link>
            <Link href="/products" className="hover:text-[#0a9a73]">
              <li>Products</li>
            </Link>

            <Link href="/contact" className="hover:text-[#0a9a73]">
              <li>Contact</li>
            </Link>
          </ul>

          <div className="w-full flex justify-end items-center">
            <IoIosSearch className="text-[5.5rem] m-3 lg:hidden" />
            <div className=" w-full py-2">
              <div className="flex place-content-around lg:justify-end z-30 relative group">
                <FaRegUser className="font-bold text-base " />

                <div className=" bg-white text-black rounded-lg shadow-lg absolute hidden group-hover:block p-4 w-[190px] top-[18px]">
                  <Link href='/login' className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                    <span>Login</span>
                  </Link>
                  <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                    <span>Register</span>
                  </p>
                  <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                    <span>My Account</span>
                  </p>
                  <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                    <span>Wishlist</span>
                  </p>
                </div>
              </div>
            </div>

            <AiOutlineShoppingCart className="text-2xl mx-3" />
            <div className=" flex flex-row lg:flex-col">
              <Link href='/add-to-cart'>
              <h2 className="font-bold text-xs text-nowrap hover:text-[#0a9a73]">
                YOUR CART
              </h2>
              </Link>
              <span className="text-[#0a9a73] text-xs font-bold">$89.25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
