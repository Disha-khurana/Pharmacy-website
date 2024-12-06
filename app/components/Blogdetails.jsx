"use client";
import React, { useState,useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { format } from 'date-fns';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Blogdetails({ id }) {

  const [activeService, setActiveService] = useState(id ? id : 1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const data = {

    tags: [
      { name: "BUSINESS", link: "/blogdetails" },
      { name: "DESIGN", link: "/blogdetails" },
      { name: "APPS", link: "/blogdetails" },
      { name: "DATA", link: "/blogdetails" },
    ],
    adminInfo: {
      image: "/admin.webp",
      name: "Rosalina D. Williams",
      title: "Dentist",
      email: "info@webmail.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio",
    },

    featuredItems: [
      {
        id: 1,
        image: '/img.webp',
        title: '7 home trends that will shape your house in 2021',
        date: 'June 24, 2021',
        link: '/blog/7-home-trends-that-will-shape-your-house-in-2021'
      },
      {
        id: 2,
        image: '/2img.webp',
        title: '10 Brilliant Ways To Decorate Your Home in 2021',
        date: 'June 24, 2021',
        link: '/blog/10-brilliant-ways-to-decorate-your-home-in-2021'
      },
      {
        id: 3,
        image: '/img3.webp',
        title: 'The Most Inspiring Interior Design Of house in 2021',
        date: 'June 23, 2021',
        link: '/blog/the-most-inspiring-interior-design-of-house-in-2021'
      },
      {
        id: 4,
        image: '/blog.webp',
        title: 'How to Make Your Tires Last Longer in 2021?',
        date: 'June 23, 2021',
        link: '/blog/how-to-make-your-tires-last-longer-in-2021'
      },
      {
        id: 5,
        image: '/img4.webp',
        title: 'Common Engine Oil Problems and Solutions',
        date: 'June 23, 2021',
        link: '/blog/common-engine-oil-problems-and-solutions'
      },
      {
        id: 6,
        image: '/sale.webp',
        title: 'Electric Car Maintenance, Servicing & Repairs',
        date: 'June 23, 2021',
        link: '/blog/electric-car-maintenance-servicing-and-repairs'
      },
    ],

    categories: [
      "Personal Care",
      "Vitamins & Supplements",
      "Health & Wellness",
      "Fitness & Nutrition",
    ],

   
      popularTags: [
        {
          id:1,
          name:"Multivitamins",
          link:'../popular-tags/multivitamins'
          },
          {
          id:2,
          name:"Antiseptic",
          link:'../popular-tags/antiseptic'
          },
          {
          id:3,
          name:"Oncology",
          link:'../popular-tags/oncology'
          },
          {
          id:4,
          name:"Hydration",
          link:'../popular-tags/hydration'
          },
          {
          id:5,
          name:"Eye Care",
          link:'../popular-tags/eye-care'
          },
          {
          id:6,
          name:"HIV Care",
          link:'../popular-tags/HIV-care'
          },
          {
          id:7,
          name:"Thermometers",
          link:'../popular-tags/thermometers'
          },
          {
          id:8,
          name:"First Aid",
          link:'../popular-tags/first-aid'
          }
        ]
    
  }

  return (
    <div>
      {/* {/ image /} */}
      <div className="w-full h-full relative bg-gray-200 lg:bg-transparent">
        <img src="/aboutimg.webp" className="hidden lg:block" />
        <div className="relative lg:absolute font-semibold top-0 py-12 lg:py-0 justify-center px-5 md:px-10 lg:px-24 flex flex-col h-full" data-aos="fade-right">
          <Link href={data.featuredItems.find(featuredItem => featuredItem.id === activeService).title}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
              {data.featuredItems.find(featuredItem => featuredItem.id === activeService).title}
            </h1>
          </Link>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <Link href={data.featuredItems.find(featuredItem => featuredItem.id === activeService).title}>
              <h2>{data.featuredItems.find(featuredItem => featuredItem.id === activeService).title}</h2>
            </Link>
          </div>
        </div>
      </div>



      <div className="flex flex-col lg:flex-row px-0 lg:px-24 my-10 lg:my-20 lg:gap-5">
        <div className="lg:w-2/3 flex flex-col h-auto lg:border lg:border-slate-200 p-5 md:p-8 space-y-3 md:space-y-5" >
          <h2 className="text-[21px] md:text-[1.7rem] font-semibold leading-tight text-slate-800" data-aos="fade-up">
            Lorem Ipsum has been the industry's standard dummy text ever since
          </h2>
          <div className="flex space-x-3 md:space-x-6 items-center" data-aos="fade-up">
            <div className="flex items-center md:gap-1 text-nowrap">
              <img src="/author.webp" className="w-7 rounded-full" />
              <p className="font-bold text-xs md:text-sm text-gray-600 hover:text-[#0a9a73]">
                By: Ethan
              </p>
            </div>
            <div className="flex items-center md:gap-1 text-nowrap">
              <FaRegCalendarAlt className="text-[#0a9a73] text-sm" />
              <p className="font-bold text-xs md:text-sm text-gray-600">June 22,2020</p>
            </div>
            <div className="flex items-center md:gap-1 text-nowrap">
              <FaRegComments className="text-[#0a9a73] text-sm" />
              <p className="font-bold text-xs md:text-sm text-gray-600 hover:text-[#0a9a73]">
                35 Comments
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt.
          </p>
          <img src="/sale.webp" className="h-auto w-full mx-auto" data-aos="fade-up"/>
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800" data-aos="fade-up">
            A cleansing hot shower or bath
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800" data-aos="fade-up">
            Setting the mood with incense
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800" data-aos="fade-up">
            Setting the mood with incense
          </h2>
          <ul className="space-y-2" data-aos="fade-up">
            <li className="text-sm text-gray-500  leading-relaxed flex items-center gap-3" >
              <FaCheck className="text-slate-800" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </li>
            <li className="text-sm text-gray-500  leading-relaxed flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </li>
            <li className="text-sm text-gray-500  leading-relaxed flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </li>
            <li className="text-sm text-gray-500  leading-relaxed flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </li>
            <li className="text-sm text-gray-500  leading-relaxed flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </li>
          </ul>

          <div className="bg-slate-100 h-auto w-full md:px-5 md:py-3 relative">
            <BiSolidQuoteLeft className="text-white text-[10rem] ml-auto" />
            <div className="absolute top-5 md:top-[27%] items-center text-center md:left-[15%]">
              <h2 className="text-[#0a9a73] font-extrabold text-center font-serif text-sm md:text-[15px]">
                BY HETMAYAR
              </h2>
              <h6 className="mt-3 text-slate-600 font-bold leading-relaxed text-sm md:text-base">
                Viral dreamcatcher keytar typewriter, aest hetic offal umami.
                <br className="hidden md:block" /> Aesthetic polaroid pug
                pitchfork post-ironic.
              </h6>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>

          <div className="flex flex-col lg:flex-row gap-5" data-aos="fade-up">
            <img src="/blog.webp" />

            <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.irure
              dolor in reprehenderit in voluptate velit esse cillum dolore.
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.irure
              dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <h2 className="text-[21px] md:text-[1.7rem] text-slate-800 font-semibold" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-6 w-[48.5%]" data-aos="fade-up">
            <img src="/med.webp" />
            <img src="/img3.webp" />
          </div>

          <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify" data-aos="fade-up">
            We have covered many special events such as fireworks, fairs,
            parades, races, walks, awards ceremonies, fashion shows, sporting
            events, and even a memorial service.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. vestibulum rhoncus, dolor eget viverra
            pretium, dolor ellus aliquet nunc.
          </p>

          <div className="flex flex-col items-start space-y-4 justify-between border-b border-slate-200 pb-7" data-aos="fade-up">
            <div className="flex items-center">
              <h3 className="text-base md:text-lg font-semibold me-3">Tag:</h3>
              <ul className="grid grid-cols-2 md:grid-cols-4 items-center text-center gap-3">
                {data.tags.map((tag, index) => (
                  <Link key={index} href={tag.link} >
                    <li className="border border-slate-200 py-1 px-3 rounded text-sm md:text-medium text-gray-500 hover:text-white hover:bg-[#0a9a73] transform duration-300">
                      {tag.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-base md:text-lg font-semibold">Share:</h3>
              <Link
                href="https://www.facebook.com/"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300"
              >
                <BiLogoFacebook />
              </Link>
              <Link
                href="https://x.com/home"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.pinterest.com "
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300"
              >
                <FaPinterestP />
              </Link>
            </div>
          </div>

          {/* Comments */}
          <div className="flex flex-col space-y-3 md:space-y-5" data-aos="fade-up">
            <h3 className="font-semibold text-xl md:text-2xl ">(04) Comment</h3>
            <div className="flex flex-col md:flex-row md:gap-5">
              <img src="/comment.webp" className="w-3/12 md:h-[60px] m-3" />
              <div>
                <div className="flex justify-between">
                  <h4 className="font-semibold text-base md:text-lg">Rohan De Spond</h4>
                  <FaReplyAll className="text-xl md:text-2xl text-gray-400 " />
                </div>
                <span className="text-xs md:text-sm text-gray-500">25 JANUARY 2021</span>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify my-3">
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the leap into electronic type setting,
                  remaining essentiallyuncha opularisedthe with the release of
                  Letrasetsheets containingth leap electrtypesetting
                  remainingmajority have. There are many variations of passages
                  of Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 md:pl-10">
              <img src="/comment2.webp" className="w-3/12 lg:w-[13%] md:h-[70px] m-3" />
              <div>
                <h4 className="font-semibold text-base md:text-lg">Johan Ritaxon</h4>

                <span className="text-xs md:text-sm text-gray-500">25 JANUARY 2021</span>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify my-3">
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have. There are many variations of
                  passages
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5">
              <img src="/comment.webp" className="w-3/12 md:h-[60px] m-3" />
              <div>
                <div className="flex justify-between">
                  <h4 className="font-semibold text-base md:text-lg">Rohan De Spond</h4>
                  <FaReplyAll className="text-xl md:text-2xl text-gray-400" />
                </div>
                <span className="text-xs md:text-sm text-gray-500">25 JANUARY 2021</span>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed text-justify my-3">
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the leap into electronic type setting,
                  remaining essentiallyuncha opularisedthe with the release of
                  Letrasetsheets containingth leap electrtypesetting
                  remainingmajority have. There are many variations of passages
                  of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 md:p-10 shadow-sm rounded-md max-w-full" data-aos="fade-up">
            <h4 className="text-xl md:text-2xl font-semibold mb-6">Write your Comment</h4>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name*"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address*"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="url"
                    name="website"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website*"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number*"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message*"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded "
                  required
                />
                <label htmlFor="agree" className="text-gray-700">
                  Save my name, email, and website for next time I comment.
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-[65%] md:w-1/2 lg:w-[20%] text-sm md:text-normal bg-[#0a9a73] text-white p-2 rounded-md hover:bg-[#0a9a73] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>

          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 px-5 md:px-10 lg:px-0" >
          {/* Admin Info */}
          <div className="md:w-full flex flex-col h-auto bg-slate-100 rounded-xl items-center py-10 px-5 md:px-10 space-y-3 " data-aos="fade-up">
            <img src={data.adminInfo.image} alt="Admin" className="w-1/3" />
            <h3 className="text-lg font-semibold">{data.adminInfo.name}</h3>
            <h5 className="text-center text-base text-gray-500">{data.adminInfo.title}</h5>
            <ul className="flex gap-1 text-yellow-400 text-base">
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStarHalfAlt /></li>
              <li><FaRegStar /></li>
            </ul>
            <p className="text-base text-gray-500 leading-relaxed text-center">{data.adminInfo.description}</p>
            <Link href={`mailto:${data.adminInfo.email}`} target="_blank" className="font-semibold text-[17px] hover:text-[#0a9a73]">
              {data.adminInfo.email}
            </Link>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/" className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300">
                <BiLogoFacebook />
              </Link>
              <Link href="https://x.com/home" className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300">
                <FaXTwitter />
              </Link>
              <Link href="https://www.instagram.com/" className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300">
                <FaInstagram />
              </Link>
              <Link href="https://www.pinterest.com" className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#0a9a73] transform duration-300">
                <FaPinterestP />
              </Link>
            </div>
          </div>

          {/* Send Message */}
          <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5" data-aos="fade-up">
            <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Send Message</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search product"
                className="rounded-xl p-4 w-full focus:outline-none border focus:border-[#0a9a73] focus:shadow-none "
              />
              <FaSearch className="absolute flex items-center right-6 text-base text-slate-500 inset-y-0 mt-5" />
            </div>
          </div>

          {/* Featured Items */}
        
  <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5" data-aos="fade-up">
  <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3">Featured Items</h3>
  {/* const formattedDate = format(new Date(item.date), 'MMMM dd, yyyy'); */}
  {/* Vertical slider container */}
  <div className="h-auto overflow-y-auto scroll-smooth snap-y snap-mandatory">
    <div className="flex flex-col gap-4">
      {data?.featuredItems?.sort(() => 0.5 - Math.random()).slice(0,3).map((item, index) => {
        const formattedDate = format(new Date(item.date), 'MMMM dd, yyyy');
        console.log(item.title)
        return(
          <>

           <Link href={item.link} key={index} className="flex gap-5 snap-start">
          <img src={item.image} className="w-[25%] h-auto object-cover" alt={item.title} />
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <SlCalender className="text-[#0a9a73]" />
              <h3 className="text-gray-500 text-sm md:text-base">{formattedDate}</h3>
            </div>
            <p className="text-[17px] font-semibold hover:text-[#0a9a73]">
              {item.title}
            </p>
          </div>
        </Link>
          
          </>
        )
      })}
    </div>
  </div>
</div>





          {/* Categories */}
          {/* <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5">
            <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Top Categories</h3>
            <div className="grid grid-cols-1 md:flex-cols-2 lg:flex-cols-1 gap-4">
              {data.categories.map((category, index) => (
                <h3 key={index} className="text-base md:text-[17px] text-gray-500 bg-white py-3 px-4 border border-slate-200 rounded-xl hover:text-white hover:bg-[#0a9a73] transform duration-300">
                  {category}
                </h3>
              ))}
            </div>
          </div> */}

          {/* Popular Tags */}
          <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5 lg:sticky lg:top-20 lg:z-[-1px]" data-aos="fade-up">
            <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Popular Tags</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 text-center gap-4 text-nowrap w-full">
              {data.popularTags.map((tag) => (
                <Link href={tag.link} key={tag.id} className="text-base md:text-[17px] text-gray-500 bg-white py-3 px-4 border border-slate-200 rounded-xl hover:text-white hover:bg-[#0a9a73] transform duration-300" onClick={() => setActiveService(tag.id)}>
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>


        </div>

      </div>
           
    

    </div>
  )
}
