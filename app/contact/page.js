"use client";
import React, { useState,useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Service from "../components/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
     
    
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        agree: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      };
    

  return (
     <>
    
      
        {/* {/ image /} */}
        <div className="w-full h-full relative bg-gray-200 lg:bg-transparent">
        <img src="/contactbanner.webp" className="hidden lg:block" />
        <div className="relative lg:absolute font-semibold top-0 justify-center px-5 md:px-14 lg:px-24 py-12 lg:py-0 flex flex-col h-full" data-aos="fade-right">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
            Contact
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <Link href="/contact">
              <h2>Contact</h2>
            </Link>
          </div>
        </div>
      </div>
        {/* {/ info /} */}
        <div className="px-5 md:px-14 lg:px-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-16 ">
            <div className="flex flex-col items-center bg-slate-50 shadow-md w-full py-9 transition-transform duration-300 hover:scale-105 ">
                <img src="/email.webp" className="h-[38px] lg:h-[50px]"/>
                <h3 className="text-[1.3rem] md:text-[20px] lg:text-2xl font-bold tracking-wide my-0 lg:my-4">Email Address</h3>
                <Link href='mailto:info@webmail.com' target="blank"><p className="text-gray-600 text-center text-[0.8rem] md:text-sm lg:text-base">info@webmail.com <br/>
                jobs@webexample.com</p></Link>
            </div>
            <div className="flex flex-col items-center bg-slate-50 shadow-md w-full py-9 transition-transform duration-300 hover:scale-105 ">
                <img src="/phone.webp" className="h-[38px] lg:h-[50px]"/>
                <h3 className="text-[1.3rem] md:text-[20px] lg:text-2xl font-bold tracking-wide my-0 lg:my-4">Phone Number</h3>
                <Link href='tel:+0123-456789' target="blank"><p className="text-gray-600 text-center text-[0.8rem] md:text-sm lg:text-base">+0123-456789  <br/>
                +987-6543210</p></Link>
            </div>
            <div className="flex flex-col items-center bg-slate-50 shadow-md w-full py-9 transition-transform duration-300 hover:scale-105 ">
                <img src="/loc.webp" className="h-[38px] lg:h-[50px]"/>
                <h3 className="text-[1.3rem] md:text-[20px] lg:text-2xl font-bold tracking-wide my-0 lg:my-4">Office Address</h3>
                <Link href="https://maps.app.goo.gl/idiGmMPvX4DvwkFh6"><p className="text-gray-600 text-center text-[0.8rem] md:text-sm lg:text-base">SCO No 54-55,34A <br/>               
                Chandigarh, India</p></Link>
            </div>
        </div>

        {/* {/ form /} */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="p-7 md:p-10  shadow-xl rounded-md max-w-full bg-slate-50" data-aos="fade-right">
      <h4 className="text-2xl md:text-3xl font-semibold mb-6">Get A Quote</h4>
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none "
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="p-3 border border-gray-300 rounded-md focus:outline-none "
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700" htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700" htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="p-3 border border-gray-300 rounded-md focus:outline-none "
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none h-32"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="text-gray-700">
            Save my name, email, and website for next time I comment.
          </label>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-[98%] md:w-[36%] lg:w-1/2  bg-[#0a9a73] text-white p-[0.5rem] md:p-3 lg:p-4 rounded-md hover:bg-[#0a9a73] text-nowrap transition-colors duration-300"
          >
            GET A FREE SERVICE
          </button>
        </div>
      </form>
    </div>
    <div className="w-full hidden lg:block" data-aos="fade-left">
      <img src="/contact.webp" className="h-full"/>
    </div>
    </div>
    


    {/* {/ map /} */}
    <div className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8415914702914!2d76.7702054!3d30.722853399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited!5e0!3m2!1sen!2sin!4v1726419057788!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </div>

    {/* {/ service /} */}
    <Service/>
      </>
  )
}




