'use client';

import { TiMail } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import Link from "next/link";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="h-auto hidden lg:flex py-5 border border-slate-200 lg:px-24 md:px-14 px-5 text-wrap"  onMouseLeave={() => setOpenDropdown(null)}>
      <div className="w-full flex items-center justify-between">
        
        {/* Left section: Email */}
        <div className="flex items-center">
          <TiMail className="text-2xl text-[#0a9a73] me-1" />
          <Link href="mailto:info@webmail.com" target="blank">
            <h2 className="text-gray-500 font-bold text-base lg:text-base hover:text-[#0a9a73]">
              info@webmail.com
            </h2>
          </Link>
        </div>

        {/* Center section: Categories inside Search */}
        <div className="flex-grow flex justify-center items-center space-x-4">
          {/* Search Input with Categories */}
          <div className="relative w-full max-w-lg flex items-center border border-green-600 rounded-xl">
            {/* Categories Dropdown */}
            <div className="relative flex items-center">
              <div
                className="bg-emerald-700 text-white px-3 py-2 font-semibold flex items-center cursor-pointer rounded-l-xl"
                onMouseEnter={() => setOpenDropdown("categories")}
              >
                <GiHamburgerMenu className="text-lg lg:text-2xl font-semibold" />
                <h2 className="text-white text-base ml-2">CATEGORIES</h2>
                <MdOutlineKeyboardArrowDown className="text-2xl ml-1" />
              </div>

              {openDropdown === "categories" && (
                <div
                  className="absolute top-[55px] w-56 z-50 bg-white h-auto border" data-aos="fade-up"
                >
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
                        className={`text-2xl ${showMore ? "transform rotate-45" : ""}`}
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

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow px-3 py-2 w-full rounded-r-xl focus:outline-none focus:ring-0 border-none"
            />
            <CiSearch className="absolute right-4 text-lg inset-y-0 mt-3" />
          </div>
        </div>

        {/* Right section: Language Dropdown and Social Icons */}
        <div className="flex items-center space-x-3" >
          <div className="relative group" >
            <h2 className="font-bold text-base flex items-center">
              English
              <MdOutlineKeyboardArrowDown className="text-[#0a9a73] " />
            </h2>
            <div className="bg-white rounded-lg shadow-lg z-50 absolute hidden group-hover:block p-4 w-[200px] top-[25px]">
              
              <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                Arabic
              </p>
              <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                Bengali
              </p>
              <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                Chinese
              </p>
              <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                English
              </p>
              <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                French
              </p>
              <p className="flex justify-start text-lg mb-4 text-gray-600 hover:text-[#0a9a73]">
                Hindi
              </p>
    
            </div>
          </div>

          <Link href="https://www.facebook.com/" >
            <FaFacebookF />
          </Link>
          <Link href="https://x.com/home">
            <FaTwitter />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link href="https://maps.app.goo.gl/MhdECUCF2cTUAWUz5">
            <IoIosGlobe className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
