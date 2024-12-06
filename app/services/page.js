'use client'
import React,{useEffect} from 'react'
import { FaMicroscope } from "react-icons/fa";
import { FaHome } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { CiStethoscope } from "react-icons/ci";
import { RiHospitalLine } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa6";
import { BsMortarboard } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import Link from 'next/link'
import LatestBlogs from '../components/LatestBlogs';
import Service from '../components/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const data = {
    features: [
        {
            id: 1,
            icon: <FaMicroscope />,
            link:'/services/medical-accessories',
            text: "Medical Accessories",
            para: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to ..."
        },
        {
            id: 2,
            icon: <CiStethoscope />,
            link:'/services/covid-treatment',
            text: "Covid-19 Treatment",
            para: "ed imperdiet purus dui, quis efficitur arcu pharetra nec. Cras porta enim non Nulla urna mauris, congue nunc quis, ornare tempus ..."
        },
        {
            id: 3,
            icon: <RiHospitalLine />,
            link:'/services/24-hours-emergency-care',
            text: "24Hours Emergency Care",
            para: "Duis aliquet, enim in euismod accumsan, nibh turpis placerat eros, a feugiat nunc est at risus. Nunc placerat ligula at quam ..."
        },
        {
            id: 4,
            icon: <FaUserNurse />,
            link:'/services/online-free-consultations',
            text: "Online Free Consultations",
            para: "Curabitur consequat tempor elementum. Suspac mauris felis. Vivamus leo dui, viverra vitae coam eleifend, semper ac nibh. Ut at ligula eu"
        },
        {
          id: 5,
          icon: <BsMortarboard />,
          link:'/services/qualified-products',
          text: "Qualified Products",
          para: "Curabitur consequat tempor elementum. Suspac mauris felis. Vivamus leo dui, viverra vitae coam eleifend, semper ac nibh. Ut at ligula eu"
      },
      {
        id: 6,
        icon: <RiSecurePaymentLine />,
        link:'/services/self-protection-kit',
        text: "Self Protection Kit",
        para: "Curabitur consequat tempor elementum. Suspac mauris felis. Vivamus leo dui, viverra vitae coam eleifend, semper ac nibh. Ut at ligula eu"
    }
    ],

  }
  return (
    <div>
      
      <div className="w-full h-full relative bg-gray-200 lg:bg-transparent">
        <img src="/banner.webp" className="hidden lg:block" />
        <div className="relative lg:absolute font-semibold top-0 justify-center px-5 md:px-14 lg:px-24 py-12 lg:py-0 flex flex-col h-full" data-aos="fade-right">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4 ">
            Services
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-green-600 text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <Link href="/services">
              <h2>Services</h2>
            </Link>
            </div>
          </div>
        </div>
        <div className=" md:pt-16 space-y-6 md:space-y-12">
        {/* <div className='flex lg:py-20 justify-center'>
          <div className=' flex-col w-[30%] relative hidden lg:flex justify-center items-center  '>
            <div className='bg-[#0a9a73] w-1/2 h-[100%] absolute left-0 top-0 z-0 '></div>
            <img src='/service1.webp' className='absolute h-[120%] ms-7 z-10' alt="Service" />
          </div>
          <div className='flex flex-col w-full lg:w-[60%] py-10 space-y-5 lg:pl-20 px-5 md:px-10 lg:px-0'>
            <div>
              <Link href='/about'>
              <button className='text-[#0a9a73] rounded-full font-semibold text-sm bg-green-50 py-1 px-3'>About Us</button>
              </Link>
              <h2 className='text-slate-950 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight'>Your faithful partners Medical Goods</h2>
            </div>
            <p className='text-slate-500 text-[15px] md:text-base lg:text-[17px] leading-relaxed tracking-normal text-justify'>
              Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage, combined with specialist services.
            </p>
            <p className='text-slate-500 text-[15px] md:text-base lg:text-[17px] leading-relaxed tracking-normal text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href='/about' ><button className='bg-[#0a9a73] text-white py-2 lg:py-3 px-4 lg:px-5 hover:bg-slate-50 hover:shadow-lg hover:text-[#10B981] duration-200'>ABOUT US</button></Link>
          </div>


         
        </div> */}
        <div className="py-12 bg-[#f2f6f7]">
                <div className='lg:text-6xl text-4xl font-semibold text-center mb-10' data-aos="fade-up">
                <Link href='/service'>
              <button className='text-[#0a9a73] rounded-full font-semibold text-sm bg-slate-200 px-3 py-1'>Our Services</button>
              </Link>
                    <p className="text-2xl lg:text-[44px] py-2">Our Core Services</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-14 lg:px-24 '>
                    {data.features.map((feature) => (
                        <Link href={feature.link} key={feature.id} data-aos="fade-up" className="group relative flex flex-col items-center justify-center bg-white border border-[#f6f6f6]  transition-transform duration-300 hover:scale-105 shadow-xl p-9">
                            <span className='text-5xl text-[#0a9a73]'>{feature.icon}</span>
                            <p className="text-lg md:text-xl my-3 font-bold text-nowrap">{feature.text}</p>
                            <p className=" text-gray-600 text-justify text-[15px] md:text-base">{feature.para}</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0a9a73] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center min-h-screen" data-aos="fade-up">
            <Link href='/blogdetails' className='flex items-center'>
              <button className='text-[#0a9a73] rounded-full font-semibold text-sm  bg-slate-200 py-1 px-3 text-center'>News & Blogs</button>
              </Link>
              <LatestBlogs/>
            </div>
            <Service/>

      </div>
    </div>
  )
}