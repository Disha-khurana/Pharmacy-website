'use client'
import Service from '@/app/components/Service'
import Link from 'next/link'
import React, { useState ,useEffect} from 'react'
import { FaArrowRight, FaHome, FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Servicedetails({id}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    const [activeService, setActiveService] = useState(id ? id : 1);

    const data = {
      services : [
          {
              id:1,
              title:'Medical Accessories',
              link:'/services/medical-accessories'
          },
          {
              id:2,
              title:'Covid - 19 Treatment',
              link:'/services/covid-treatment'
          },
          {
              id:3,
              title:'24-hours Emergency Care',
              link:'/services/24-hours-emergency-care'
          },
          {
              id:4,
              title:'Online Free Consultations',
              link:'/services/online-free-consultations'
          },
          {
              id:5,
              title:'Qualified Products',
              link:'/services/qualified-products'
          },
          {
              id:6,
              title:'Self Protection Kit',
              link:'/services/self-protection-kit'
          },
      ]
  }

  return (
    <div>
        <div className="w-full h-full relative bg-gray-200 lg:bg-transparent">
        <img src="/banner.webp" className="hidden lg:block" />
        <div className="relative lg:absolute font-semibold top-0 py-12 lg:py-0 justify-center px-5 md:px-10 lg:px-24 flex flex-col h-full" data-aos="fade-right">
          <Link href={data.services.find(service => service.id === activeService).title}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4 ">
          {data.services.find(service => service.id === activeService).title}
          </h1>
          </Link>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-green-600 text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <Link href={data.services.find(service => service.id === activeService).title}>
              <h2>{data.services.find(service => service.id === activeService).title}</h2>
            </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-0 lg:px-24 lg:py-16 lg:gap-12">
        <div className="lg:w-2/3 flex flex-col h-auto px-5 md:px-10 py-5 md:py-10 lg:py-0 lg:px-0 space-y-7">
            <img src='/servicedetails.webp' />
            <div className='flex items-center gap-7' >
                <span className='bg-[#0a9a73] px-6 text-white text-[70px] font-bold'>A</span>
                <p className='text-base text-gray-500 leading-[1.75rem] text-justify'>eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <p className='text-base text-gray-500 leading-[1.75rem] text-justify' >Veniamipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
            <div className='flex gap-3 md:gap-8 w-[48.5%]' >
                <img src='/med.webp' />
                <img src='/img3.webp'/>
            </div>
            <p className='text-base text-gray-500 leading-[1.75rem] text-justify' >Fugiat ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
            <p className='text-base text-gray-500 leading-[1.75rem] text-justify' >Aliquaipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>       
        </div>
        
        <div className="flex flex-col w-full lg:w-1/3 px-5 md:px-10 lg:p-0 space-y-8" >
        <div className='border border-slate-100 '>
    <div className='grid grid-cols-1 p-6 space-y-4  bg-white'>
    {data.services.map((item) => (
        <Link href={item.link} key={item.id} className={`flex items-center justify-between  px-6 py-2 group hover:bg-[#0a9a73] transform duration-300 ${activeService === item.id ?'bg-[#0a9a73]':'bg-slate-50'}`}>
            <h3 className={`text-slate-800 group-hover:text-white font-semibold tracking-widest  ${activeService === item.id ? ' text-white' : ' text-black'}`}>{item.title}</h3>
            <div className={`relative flex items-center justify-center group-hover:bg-[#cb3421] group-hover:text-white px-6 py-5 ${activeService === item.id ? 'bg-[#cb3421] text-white' : 'bg-white text-black'}`}
            onClick={() => setActiveService(item.id)}>
            <FaArrowRight className='absolute'/>
            </div>      
        </Link>
    ))}
    </div>
    </div>
    <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10 space-y-7 ">
    <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Search here</h3>
    <div className="relative">
    <input
            type="text"
            placeholder="Search here"
            className="rounded-xl p-4 w-full focus:outline-none border focus:border-[#0a9a73] focus:shadow-none "
          />
          <FaSearch className="absolute flex items-center right-6 text-base text-slate-500 inset-y-0 mt-5" />
    </div>
  </div>
  <img src='/covid19.webp' className='sticky top-[90px] z-[-1px] hidden lg:block'/>
  <img src='/mdcovid19.webp' className='pb-8 md:pb-0 block lg:hidden' />

    </div>
    </div>
   <Service/>

    </div>
      
    
  )
}
