"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaHome, FaInstagram, FaPinterestP, FaRegCalendarAlt, FaRegComments, FaRegStar, FaSearch, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PopularTags({id}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    const [imgcount, setimgcount] = useState(0)
    const [activeService, setActiveService] = useState(id ? id : 1);

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
    


 const data={
     blogPosts : [
        {
            
            image: ['/sale.webp', '/img4.webp', '/img3.webp'],
            title: 'How to Make Your Tires Last Longer in 2021',
            date: 'June 22, 2020',
            comments: '0 Comments',
            author: 'Ethan',
            excerpt: 'Vionsectetur dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat […]',
            link: '/blog/how-to-make-your-tires-last-longer-in-2021',
        },
        {
            
            image: '/img5.webp',
            title: 'Electric Car Maintenance, Servicing & Repairs',
            date: 'June 22, 2020',
            comments: '0 Comments',
            author: 'Ethan',
            excerpt: 'Vionsectetur dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat […]',
            link: '/blog/electric-car-maintenance-servicing-and-repairs',
        }],
        adminInfo: {
            image: "/admin.webp",
            name: "Rosalina D. Williams",
            title: "Dentist",
            email: "info@webmail.com",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio",
          },
      
          featuredItems: [
            {
              image: "/med.webp",
              date: "Jan 01, 2024",
              title: "How to: Prepare for your First Track Day",
            },
            {
              image: "/blog.webp",
              date: "Jan 01, 2024",
              title: "How to: Make Your Tire Last Longer",
            },
            {
              image: "/sale.webp",
              date: "Jan 01, 2024",
              title: "Electric Maintenance, Servicing & Repairs",
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


useEffect(() => {
    const interval = setInterval(() => {
      let val = Math.floor(Math.random() * data.blogPosts[0].image.length);
      setimgcount(val);
    }, 2000);
  
    return () => clearInterval(interval); 
  }, []);
  


    return (
        <div>
            <div className="w-full h-full relative bg-gray-200 lg:bg-transparent">
                <img src="/aboutimg.webp" className="hidden lg:block" />
                <div className="relative lg:absolute font-semibold top-0 py-16 lg:py-24 px-5 md:px-10 lg:px-24 flex flex-col h-full" data-aos="fade-right">
                    <Link href={data?.popularTags?.find(popularTag => popularTag.id === activeService).name}>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
                    {data.popularTags.find(popularTag => popularTag.id === activeService).name}
                    </h1>
                    </Link>
                    <div className="flex text-base lg:text-lg items-center">
                        <FaHome className="text-[#0a9a73] text-xl me-2" />
                        <Link href="/">
                            <h2 className="text-gray-500">Home</h2>
                        </Link>
                        <MdKeyboardArrowRight className="text-xl text-gray-500" />
                        <Link href={data.popularTags.find(popularTag => popularTag.id === activeService).name}>
                            <h2>{data.popularTags.find(popularTag => popularTag.id === activeService).name}</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-0 lg:px-20 my-10 lg:my-20 lg:gap-5">
                <div className="lg:w-2/3 flex flex-col gap-10">


                    {data.blogPosts.map((post, index) => (
                        <div key={post.id} data-aos="fade-up">
                            <img src={index == 0 ? post.image[imgcount] : post.image} alt={post.title} className='h-[30rem] w-full' />
                            <div className='h-auto lg:border lg:border-slate-200 p-5 md:p-8 space-y-3 md:space-y-5'>
                                <Link href='/blog' className='bg-[#0a9a73] px-3 py-1 text-white font-semibold'> BLOGS</Link> 
                                <h2 className="text-[21px] md:text-[1.7rem] font-semibold leading-tight text-slate-800">
                                    {post.title}
                                </h2>
                                <div className="flex space-x-3 md:space-x-6 items-center">
                                    <div className="flex items-center md:gap-1 text-nowrap">
                                        <FaRegComments className="text-[#0a9a73] text-sm" />
                                        <p className="font-semibold text-xs md:text-[15px] text-gray-500 hover:text-[#0a9a73]">
                                            {post.comments}
                                        </p>
                                    </div>
                                    <div className="flex items-center md:gap-1 text-nowrap">
                                        <FaRegCalendarAlt className="text-[#0a9a73] text-sm" />
                                        <p className="font-semibold text-xs md:text-[15px] text-gray-500">{post.date}</p>
                                    </div>
                                </div>
                                <p className="text-sm md:text-[16px] text-gray-500 leading-[26px] text-justify">{post.excerpt}</p>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center md:gap-2 text-nowrap">
                                        <img src="/author.webp" className="w-7 rounded-full" alt={post.author} />
                                        <p className="font-semibold text-xs md:text-[15px] text-gray-500 hover:text-[#0a9a73]">
                                            By: {post.author}
                                        </p>
                                    </div>
                                     <Link href={post.link}>
                                        <h3 className='font-semibold text-base text-white bg-[#0a9a73] py-2 px-4 rounded-md hover:bg-emerald-500 transition duration-300'>
                                            Read More
                                        </h3>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col w-full lg:w-1/3 sticky top-0 px-5 md:px-10 lg:px-0">
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
            <p className="text-base text-gray-500 leading-[1.65rem] text-center">{data.adminInfo.description}</p>
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
            <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Search objects</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your keyword..."
                className="rounded-xl p-4 w-full focus:outline-none border focus:border-[#0a9a73] focus:shadow-none "
              />
              <FaSearch className="absolute flex items-center right-6 text-base text-slate-500 inset-y-0 mt-5" />
            </div>
          </div>

          <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10  mt-5" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-6 border-l-2 border-[#0a9a73] pl-3 ">Drop Message for Book</h3>
             <form id="contact-form" onSubmit={handleSubmit} >
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name*"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email*"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
         
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message..."
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className=" bg-[#0a9a73] text-white p-[0.5rem] md:p-3 lg:py-2 lg:px-3 rounded-md hover:bg-[#0a9a73] text-nowrap transition-colors duration-300"
          >
            BOOK NOW
          </button>
        </div>
        
            </div>
            </form> 
            </div>

          {/* Featured Items */}
          <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5" data-aos="fade-up">
            <h3 className="text-xl font-semibold border-l-2 border-[#0a9a73] pl-3 ">Latest Blogs</h3>
            <div className="grid grid-cols-1 gap-4">
              {data.featuredItems.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <img src={item.image} className="w-[25%]" alt={item.title} />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <SlCalender className="text-[#0a9a73]" />
                      <h3 className="text-gray-500 text-sm md:text-base">{item.date}</h3>
                    </div>
                    <p className="text-[17px] font-semibold hover:text-[#0a9a73]">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Popular Tags */}
          <div className="md:w-full h-auto bg-slate-100 rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5 lg:sticky lg:top-20 lg:z-20" data-aos="fade-up">
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
