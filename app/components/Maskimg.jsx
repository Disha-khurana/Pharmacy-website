import React from "react";
import Link from "next/link";
import { FaHome, FaMountain, FaHeart, FaShieldAlt } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

export default function Maskimg() {
  return (
    <div className=" bg-slate-100 lg:bg-transparent pb-12">
      <div className="relative flex flex-col lg:flex-row items-center lg:justify-end ">
        {/* <img src="/backimg.webp" alt="N95 Mask" className='hidden lg:block w-[100%] h-[400px] object-cover my-10' />
         */}

        <div className="relative lg:w-1/2 lg:absolute pt-6 px-5 md:px-14 md:pt-10 lg:right-5 lg:pt-[30rem] space-y-4">
          <h2 className="text-emerald-500 font-semibold tracking-normal text-[1rem] ">
            N95 Facial Covering Mask
          </h2>
          <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[38px] leading-tight text-[#071c1f] font-josefin">
            Grade A Safety Masks
            <br />
            For Sale. Hurry Up!
          </h1>
          <p className="text-[15px] md:text-base lg:text-[1rem] text-gray-500 text-justify">
            Over 39,000 people work for us in more than 70 countries all over
            the
            <span className="hidden lg:inline-block">
              {" "}
              <br />
            </span>
            This breadth of global coverage, combined with specialist services
          </p>

          <div className="flex flex-col md:flex-row lg:justify-between gap-5 md:gap-12 lg:gap-5 ">
            <ul className="flex flex-col gap-4 lg:w-1/2">
              <li className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
                <FaHome className="text-xl md:text-2xl lg:text-2xl text-emerald-500" />
                <span className="text-[15px] md:text-base lg:text-[1rem] text-gray-500">
                  Activated Carbon
                </span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
                <FaMountain className="text-xl md:text-2xl lg:text-2xl text-emerald-500" />
                <span className="text-[15px] md:text-base lg:text-[1rem] text-gray-500">
                  6 Layer Filtration
                </span>
              </li>
            </ul>

            <ul className="flex flex-col gap-4 lg:w-1/2">
              <li className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
                <FaHeart className="text-xl md:text-2xl lg:text-2xl text-emerald-500" />
                <span className="text-[15px] md:text-base lg:text-[1rem] text-gray-500">
                  Breathing Valve
                </span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
                <FaShieldAlt className="text-xl md:text-2xl lg:text-2xl text-emerald-500" />
                <span className="text-[15px] md:text-base lg:text-[1rem] text-gray-500">
                  Rewashes & Reusable
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-5">
            <Link
              href="/products"
              className="group hover:w-48 flex justify-center w-44 items-center gap-4 hover:bg-white hover:text-black py-2 rounded-lg font-semibold bg-emerald-500 text-white transition duration-300 ease-in-out"
            >
              View Products{" "}
              <MdArrowForward className="group-hover:translate-x-3 duration-200" />
            </Link>
          </div>
        </div>
      </div>
      <div className="my-bg hidden lg:block"></div>
    </div>
  );
}
