"use client";
import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebookF,
  FaBlog,
  FaShopify,
  FaTwitter,
  FaUserCircle,
  FaInfoCircle,
  FaLinkedin,
  FaYoutube,
  FaUserFriends,
} from "react-icons/fa";
import { FaVirusCovid } from "react-icons/fa6";
import { GiMedicalThermometer } from "react-icons/gi";
import { RiVidiconLine } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiMedicalPack } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="lg:px-24 md:px-14 px-5 w-full h-full bg-[#171b2a] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-14 text-white">
          <div className="flex flex-col items-start w-full " data-aos="fade-up">
            <img
              src="/logo-2.webp"
              alt="Company Logo"
              className="max-w-full h-10"
            />
            <p className="mb-3 lg:mt-2 mt-1 text-justify">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <IoLocationOutline className="text-lg md:text-xl text-[#0a9a73]" />
                <Link
                  href="https://maps.app.goo.gl/idiGmMPvX4DvwkFh6"
                  target="_blank"
                >
                  <p className="text-nowrap">SCO No 54-55,34A</p>
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <LuPhoneCall className="text-lg text-[#0a9a73]" />
                <Link href="tel:+0123-456789" target="_blank">
                  <p className="hover:text-[#0a9a73]">+0123-456789</p>
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <TfiEmail className="text-base text-[#0a9a73]" />
                <Link href="mailto:info@webmail.com" target="_blank">
                  <p classname="hover:text-[#0a9a73]">info@webmail.com</p>
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-5 text-lg mt-5">
              <Link href="https://www.facebook.com/">
                <FaFacebookF />
              </Link>
              <Link href="https://x.com/home">
                <FaTwitter />
              </Link>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin classname="hover:text-[#0a9a73]" />
              </Link>
              <Link href="https://www.youtube.com/">
                <FaYoutube classname="hover:text-[#0a9a73]" />
              </Link>
            </div>
          </div>

          <div
            className="flex flex-col lg:items-center items-start justify-center space-y-7 w-full"
            data-aos="fade-up"
          >
            <p className="font-bold font-josefin tracking-wide text-lg md:text-xl">
              <u>Quick Links</u>
            </p>
            <ul className="space-y-5">
              <li className="flex items-center gap-2">
                <FaInfoCircle className="text-[#0a9a73]" />
                <Link
                  href="/about"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaBlog className="text-lg text-[#0a9a73]" />
                <Link href="/blog" className="font-normal hover:text-[#0a9a73]">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaShopify className="text-lg text-[#0a9a73]" />
                <Link
                  href="/products"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  All Products
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MdMedicalServices className="text-lg text-[#0a9a73]" />
                <Link
                  href="/services"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  Our Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <LuPhoneCall className="text-lg text-[#0a9a73]" />
                <Link
                  href="/contact"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="flex flex-col items-start space-y-7 w-full justify-center"
            data-aos="fade-up"
          >
            <p className="font-bold font-josefin tracking-wide text-lg md:text-xl">
              <u>Our Services</u>
            </p>
            <ul className="space-y-5">
              <li className="flex items-center gap-2">
                <FaHandHoldingMedical className="text-lg text-[#0a9a73]" />
                <Link
                  href="/services/medical-accessories"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  Medical care
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <GiMedicalPack className="text-lg text-[#0a9a73]" />
                <Link
                  href="/services/24-hours-emergency-care"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  Emergency treatment
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <RiVidiconLine className="text-lg text-[#0a9a73]" />
                <Link
                  href="/services/online-free-consultations"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  Online Free Consultations
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaVirusCovid className="text-lg text-[#0a9a73]" />
                <Link
                  href="/services/covid-treatment"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  Covid Treatment
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <GiMedicalThermometer className="text-lg text-[#0a9a73]" />
                <Link
                  href="/services/qualified-products"
                  className="font-normal hover:text-[#0a9a73]"
                >
                  Qualified Products
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="flex flex-col items-start space-y-6 w-full"
            data-aos="fade-up"
          >
            <p className="font-bold font-josefin tracking-wide text-lg md:text-xl">
              Newsletter
            </p>
            <p>
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="p-3 w-full rounded-md border-none outline-none text-black"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 bg-green-600 text-white p-3 rounded-r-md"
              >
                <FaLocationArrow />
              </button>
            </div>
            <h5 className="font-bold text-lg">We Accept</h5>
            <img src="/payment.webp" alt="Payment Methods" />
          </div>
        </div>
      </div>

      <div className="bg-[#282b38] lg:px-24 md:px-14 px-5 w-full h-full text-white flex flex-col lg:flex-row md:flex-row items-center py-5">
        <div className="w-full pb-5 md:pb-0 lg:pb-0 flex justify-center md:justify-start lg:justify-start">
          <p className="text-sm md:text-base lg:text-base font-normal">
            All Rights Reserved @ Company 2024
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-end lg:justify-end">
          <ul className="flex items-center gap-8 font-normal text-xs md:text-sm lg:text-sm">
            <Link href='/terms-and-conditions'>
            <li>Terms & Conditions</li>
            </Link>
            <Link href='/privacy-policy'>
            <li>Privacy & Policy</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
