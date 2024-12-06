'use client'
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  FaHome,
  FaRegStar,
  FaSearch,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { products } from "./common/common";
import ReactImageMagnify from 'react-image-magnify';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Productdetails({ id }) {
  const [activeService, setActiveService] = useState(id ? id : 1);
  const [activeImg, setActiveImg] = useState(products?.find(product => product.id === activeService)?.image)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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


  const [section, setSection] = useState("Description");
  const data = {

    popularTags: [
      {
        id: 1,
        name: "Multivitamins",
        link: '../popular-tags/multivitamins'
      },
      {
        id: 2,
        name: "Antiseptic",
        link: '../popular-tags/antiseptic'
      },
      {
        id: 3,
        name: "Oncology",
        link: '../popular-tags/oncology'
      },
      {
        id: 4,
        name: "Hydration",
        link: '../popular-tags/hydration'
      },
      {
        id: 5,
        name: "Eye Care",
        link: '../popular-tags/eye-care'
      },
      {
        id: 6,
        name: "HIV Care",
        link: '../popular-tags/HIV-care'
      },
      {
        id: 7,
        name: "Thermometers",
        link: '../popular-tags/thermometers'
      },
      {
        id: 8,
        name: "First Aid",
        link: '../popular-tags/first-aid'
      }
    ],


    // products: [
    //   {
    //     id: 1,
    //     image: "/cosmetic-container.webp",
    //     title: "Cosmetic Containers",
    //     link: '/products/cosmetic-containers',
    //     price: "$75.00",
    //     originalPrice: "$92.00",
    //     rating: [1, 1, 1, 0.5, 0]
    //   },
    //   {
    //     id: 2,
    //     image: "/spray.webp",
    //     title: "Antiseptic Spray",
    //     link: '/products/antiseptic-spray',
    //     price: "$32.00",
    //     originalPrice: "$46.00",
    //     rating: [1, 1, 1, 0.5, 0]
    //   },
    //   {
    //     id: 6,
    //     image: "/stethoscope.webp",
    //     title: "Digital Stethoscope",
    //     link: '/products/digital-sthethoscope',
    //     price: "$25.00",
    //     originalPrice: "$35.00",
    //     rating: [1, 1, 1, 0.5, 0]
    //   },

    // ]
  }
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* <div className=" w-[500px] h-[500px] flex flex-col">


       <ReactImageMagnify {...{
  smallImage: {
    alt: 'Wristwatch by Ted Baker London',
    isFluidWidth: true,
    src: '/cosmetic.webp'
  },
  largeImage: {
    src: '/cosmetic.webp',
    width: 900,
    height: 900
  } 
}} />

      </div> */}

      <div className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-24 py-10 lg:py-16 lg:gap-10">
        <div className="lg:w-2/3 flex flex-col h-auto lg:p-0 space-y-7 lg:space-y-10" >
          <div className="flex flex-col md:flex-row md:gap-7 lg:gap-12">

            {/* <img  src={data.products.find(product => product.id === activeService).image} className="w-1/2 h-auto"/> */}

            <div className="w-[400px] h-auto" >
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'productimg',
                  isFluidWidth: false, // Keep this for responsiveness
                  width: 420,
                  height:400,
                  src: activeImg || ''
                },
                
                largeImage: {
                  src: activeImg  || '',
                  width: 700,
                  height: 700
                },
                enlargedImageContainerStyle: { zIndex: 15 }, // Optional styling for enlarged image
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }} />

              <div className='flex w-1/2 gap-3 pt-5'>

              { products.find(product => product.id === activeService)["subimg"].map((info)=><img  src={info} onClick={()=>setActiveImg(info)} className='w-24 h-24'/>)}
              </div>
            </div>


            <div className="flex flex-col space-y-4 py-5" >
              <div>
              <h2 className='text-2xl font-bold '>{products.find(product => product.id === activeService)?.title}</h2>
              
              <div className="inline-flex space-x-2 items-center">
                <del className="font-bold text-xs md:text-[15px]  text-green-500">
                  {products.find(product => product.id === activeService)?.originalPrice}
                </del>
                <span className="font-bold text-xs md:text-base text-green-600">
                  {products.find(product => product.id === activeService)?.price}
                </span>
              </div>
              </div>
              <div className="flex items-center gap-7">
                <div className="flex gap-1 text-[#0a9a73] text-sm md:text-base">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <p className="text-[#9e9e9e] text-sm font-semibold hover:text-yellow-500">
                  (1 Customer Review)
                </p>
              </div>
              
              <p className="text-slate-500 text-xs md:text-base leading-relaxed text-justify">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo. etus et malesuada fames ac
                turpis egestas.
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  className="border border-slate-300 bg-slate-50 w-[22%] p-[3px] md:p-[0.7rem] text-black placeholder-black text-center"
                  placeholder="1"
                />
                <button className="bg-[#0a9a73] p-2 md:p-3 hover:bg-white text-white hover:text-black hover:border border-black transition-colors duration-300 ease-in-out">
                  <div className="flex items-center gap-2 text-base transform transition-transform duration-300 ease-in-out hover:translate-x-1">
                    <FaShoppingCart className="text-base md:text-lg" />
                    <h2 className="text-xs md:text-base">Add to Basket</h2>
                  </div>
                </button>
              </div>
              <div className="space-y-1 text-xs md:text-base">
                <p className="text-gray-600 font-bold">
                  sku :
                  <span className="text-[#75706d] font-normal">
                    {" "}
                    woo-beanie
                  </span>
                </p>
                <p className="text-gray-600 font-bold">
                  category :
                  <span className="text-[#75706d]  font-normal"> hoodies</span>
                </p>
                <p className="text-gray-600 font-bold">
                  tags :
                  <span className="text-[#75706d] font-normal"> hand,mask</span>
                </p>
              </div>
            </div>
          </div>


          <div className="flex flex-col">
            <div className="flex items-center gap-1 md:gap-3 text-xs md:text-[17px] ">
              <p onClick={() => setSection("Description")} className={`py-2 text-center font-semibold border border-slate-100 w-auto px-1 md:px-4 cursor-pointer ${section === "Description"
                ? "bg-white text-gray-500 border-t-4 border-t-gray-500"
                : "bg-slate-50 text-black border-none"
                }`}>
                Description
              </p>
              <p onClick={() => setSection("AdditionalInformation")} className={`py-2 text-center font-semibold border border-slate-100 px-1 md:px-4 w-auto cursor-pointer text-nowrap  ${section === "AdditionalInformation"
                ? "bg-white text-gray-500 border-t-4 border-t-gray-500 "
                : "bg-slate-50 text-black border-none"
                }`}>
                Additional Information
              </p>
              <p onClick={() => setSection("Reviews")} className={`py-2 text-center font-semibold px-1 md:px-4 border border-slate-100 w-auto cursor-pointer ${section === "Reviews"
                ? "bg-white text-gray-500 border-t-4 border-t-gray-500  "
                : "bg-slate-50 text-black border-none"
                }`}>
                Reviews (1)
              </p>
            </div>
            {section == "Description" && <p className="text-justify text-slate-500 text-xs md:text-base border border-slate-200 px-6 pb-12 leading-relaxed py-6">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>}
            {section == "AdditionalInformation" &&
              <div className="flex flex-col px-6 py-5 border border-slate-200 text-sm md:text-[17px]">
                <h2 className=" font-semibold border-b border-b-slate-200 border-dotted p-3 text-slate-900">Additional Information</h2>
                <div className="flex items-center gap-16 p-2 text-[#5c727d] border-b border-b-slate-200 border-dotted">
                  <h2 className="font-semibold">Weight</h2>
                  <h2>0.2 kg</h2>

                </div>
                <div className="flex items-center gap-7 p-2 text-[#5c727d] border-b border-b-slate-200 border-dotted bg-slate-100">
                  <h2 className="font-semibold">Dimensions</h2>
                  <div className="flex items-center gap-1">
                    <h2>6 </h2>
                    <RxCross2 className="text-xs" />
                    <h2>4 </h2>
                    <RxCross2 className="text-xs" />
                    <h2>1 </h2>
                    <h2>cm</h2>
                  </div>

                </div>

              </div>
            }
            {section == "Reviews" && <div className="text-xs md:text-[17px] border border-slate-200 px-8 py-9 space-y-6">
              <h4 className="font-semibold text-slate-800">1 REVIEW FOR COSMETIC CONTAINERS</h4>
              <div className="flex items-start gap-4">
                <img src="/review.jpeg" className="w-10" />
                <div className="border border-slate-100 p-5 space-y-4 w-full">
                  <div className="flex gap-1 text-[#0a9a73] text-sm md:text-base text-center justify-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                  <div className="text-sm flex gap-1">
                    <h4 className="font-semibold">vicodin </h4>
                    <h4> -15 august 2022</h4>
                  </div>
                  <h4 className="text-sm">4</h4>
                </div>

              </div>
              <div className="flex flex-col text-xs md:text-[15px]">
                <h4 className="font-semibold text-slate-800">ADD A REVIEW</h4>
                <p className="text-[#5c727d] text-sm">Your email address will not be published. Required fields are marked *</p>
              </div>
              <div className="flex flex-col text-xs md:text-[15px] gap-1">
                <h3 className="font-semibold text-slate-800">Your rating *</h3>
                <div className="flex gap-1 text-[#0a9a73] text-sm md:text-base text-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
              </div>
              <div className="rounded-md max-w-full">
                <form id="contact-form" onSubmit={handleSubmit} >
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                      <label className="mb-2 text-gray-700" htmlFor="name">Write your review *</label>
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=""
                        className="p-1 border border-gray-300 focus:outline-none rounded-md  h-32"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 text-gray-700" htmlFor="name">Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
                        className="p-2 border border-gray-300 focus:outline-none rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 text-gray-700" htmlFor="name">Email *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        className="p-2 border border-gray-300 focus:outline-none rounded-md"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#0a9a73] focus:ring-[#0a9a73] border-gray-300 rounded-md"
                      />
                      <label htmlFor="agree" className="text-gray-700">
                        Save my name, email, and website for next time I comment.
                      </label>
                    </div>

                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="  bg-[#0a9a73] text-white p-[0.5rem] md:p-3 lg:py-2 lg:px-6 rounded-md hover:bg-[#0a9a73] text-nowrap transition-colors duration-300"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>

            </div>
            }
          </div>

          <div className="lg:sticky lg:top-24 z-[-1px] ">
            <h1 className="text-xl lg:text-2xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Related Products</h1>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-5 pb-7">
              {products.slice(1,4).map((product) => (
                <div key={product.id} className="flex flex-col hover:shadow-xl">
                  <div className="relative group ">
                    <img src={product.image} className="h-auto w-auto" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                      <span className="bg-white shadow-lg flex items-center text-gray-500">
                        <FaShoppingCart className="w-[3rem] h-[2.7rem] p-3 border-r-2 border-gray-400 hover:bg-green-700 hover:text-white transition-colors duration-300" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center border border-slate-100 p-3 w-auto">
                    <div className="flex gap-1 text-yellow-400 text-xs md:text-sm">
                      {product.rating.map((r, index) => {
                        if (r === 1) return <FaStar key={index} />;
                        if (r === 0.5) return <FaStarHalfAlt key={index} />;
                        return <FaRegStar key={index} />;
                      })}
                    </div>
                    <Link href={product.link}>
                      <h1 onClick={() => setActiveService(product.id)} className="pt-1 md:pt-3 font-bold tracking-wide lg:text-base md:text-sm text-xs text-slate-950 mb-1 hover:text-green-600 text-center text-nowrap">
                        {product.title}
                      </h1>
                    </Link>
                    <div className="inline-flex space-x-1 items-center">
                      <del className="font-bold text-[11px] md:text-xs  text-green-400">
                        {product.originalPrice}
                      </del>
                      <span className="font-bold text-xs md:text-sm text-green-600">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>

        </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/3 space-y-7 lg:space-y-10">
          <div className="md:w-full flex flex-col h-auto bg-white lg:border lg:border-slate-200 rounded-xl lg:items-center lg:px-6 lg:py-5 lg:space-y-3">
            <div className="md:w-full h-auto rounded-xl lg:items-center space-y-6">
              <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3">
                Top Rated Product
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 justify-center ">
                {products.slice(1,4).map((product) => (
                  <div key={product.id} className="flex gap-5 ">
                    <img src={product.image} className="w-28 h-28" />
                    <div className="flex flex-col justify-center space-y-1">
                      <div className="flex gap-1 text-yellow-400 text-xs md:text-sm">
                        {product.rating.map((r, index) => {
                          if (r === 1) return <FaStar key={index} />;
                          if (r === 0.5) return <FaStarHalfAlt key={index} />;
                          return <FaRegStar key={index} />;
                        })}
                      </div>
                      <div className="inline-flex gap-1 items-center">
                        <del className="font-bold text-[11px] md:text-xs   text-green-400">
                          {product.originalPrice}
                        </del>
                        <span className="font-bold text-xs md:text-sm  text-green-600">
                          {product.price}
                        </span>
                      </div>
                      <Link href={product.link}>

                        <p className="text-sm md:text-base font-semibold hover:text-[#0a9a73] text-nowrap">
                          {product.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-full h-auto bg-white rounded-xl items-center md:px-6 py-6 space-y-6 md:border md:border-slate-200">
            <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">
              Search Objects
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your keyword..."
                className="rounded-xl p-4 w-full focus:outline-none border focus:border-[#0a9a73] focus:shadow-none placeholder-black bg-slate-50"
              />
              <FaSearch className="absolute flex items-center right-6 text-base text-slate-500 inset-y-0 mt-5" />
            </div>
          </div>
          <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-6 space-y-6 ">
            <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Popular Tags</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 text-center gap-4 text-nowrap w-full">
              {data.popularTags.map((tag) => (
                <Link href={tag.link} key={tag.id} className="text-sm md:text-[15px] w-auto text-gray-500 bg-white py-3 px-2 border border-slate-200 rounded-xl hover:text-white hover:bg-[#0a9a73] transform duration-300">
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
          <img src="/productimg.webp" className="hidden lg:block "/>
          <img src="/mdproductimg.webp" className="lg:hidden" />
        </div>
      </div>
   
    </div>
  );
}