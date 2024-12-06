"use client";
import React, { useState } from "react";
import { FaHandHoldingMedical, FaHome, FaMicroscope, FaStethoscope } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiUserAddLine } from "react-icons/ri";
import { RiArmchairLine } from "react-icons/ri";
import { PiPackageDuotone } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti"
import Counter from "../components/Counter.jsx"
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import Poster from "../components/Poster";
import Navbar2 from "../components/Navbar2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import Service from "../components/Service";
import LatestBlogs from "../components/LatestBlogs";


export default function page() {

    const [expandedIndex, setExpandedIndex] = useState(0);
    const toggleAnswer = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const data = {
        features: [
            {
                id: 1,
                image: 'fe1.webp',
                text: "Free Delivery",
                para: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
            },
            {
                id: 2,
                image: 'fe2.webp',
                text: "100% Cash Back",
                para: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
            },
            {
                id: 3,
                image: 'fe3.webp',
                text: "Quality Product",
                para: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
            },
            {
                id: 4,
                image: 'fe4.webp',
                text: "24/7 Support",
                para: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
            }
        ],

        clients: [
            {
                id: 1,
                icon: <RiUserAddLine />,
                rate: '733+',
                title: 'Active Clients'
            },
            {
                id: 2,
                icon: <RiArmchairLine />,
                rate: '33K+',
                title: 'Cup of Coffee'
            },
            {
                id: 3,
                icon: <PiPackageDuotone />,
                rate: '100+',
                title: 'Get Rewards'
            },
            {
                id: 4,
                icon: <GrMapLocation />,
                rate: '21+',
                title: 'Country Cover'
            }
        ],

        doctors: [
            {
                id: 1,
                name: 'Rosalina D. William',
                designation: 'Scientist',
                image: '/doc1.webp'
            },
            {
                id: 2,
                name: 'Kelian Anderson',
                designation: 'Dentist',
                image: '/doc2.webp'
            },
            {
                id: 3,
                name: 'Miranda H. Halim',
                designation: 'Cardiologist',
                image: '/doc3.webp'
            }
        ],

        sliderData: [
            {
                id: 1,
                image: '/client1.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 2,
                image: '/client2.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 3,
                image: '/client3.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 4,
                image: '/client4.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 5,
                image: '/client1.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 6,
                image: '/client2.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 7,
                image: '/client3.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 8,
                image: '/client4.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 9,
                image: '/client1.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 10,
                image: '/client2.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 11,
                image: '/client3.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            },
            {
                id: 12,
                image: '/client4.webp',
                text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Rosalina D. William',
                designation: 'Founder'
            }
        ],

        faqData: [
            {
                'question': 'How to buy a product?',
                'answers': [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac."
                ]
            },
            {
                'question': 'How can i make refund from your website?',
                'answers': [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac."
                ]
            },
            {
                'question': 'I am a new user. How should I start?',
                'answers': [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac."
                ]
            },
            {
                'question': 'Returns and refunds',
                'answers': [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac."
                ]
            },
            {
                'question': 'Are my details secured?',
                'answers': [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac."
                ]
            },

        ],

        contactUs: [
            {
                'id': 1,
                'image': <FaHandHoldingMedical />,
                'title': 'All Kind Brand',
                'description': 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.'
            },
            {
                'id': 2,
                'image': <FaMicroscope />,
                'title': 'Curated Products',
                'description': 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.'
            },
            {
                'id': 3,
                'image': <FaStethoscope />,
                'title': 'Pesticide Free Goods',
                'description': 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.'
            }
        ]
    }

    return (
        <>


            {/* {/ image /} */}
            <div className="w-full h-full relative bg-gray-200 lg:bg-transparent">
        <img src="/productbanner.webp" className="hidden lg:block" />
        <div className="relative lg:absolute font-semibold top-0 justify-center px-5 md:px-14 lg:px-24 py-12 lg:py-0 flex flex-col h-full" data-aos="fade-right">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">
            About Us
          </h1>
          <div className="flex text-base lg:text-lg items-center">
            <FaHome className="text-[#0a9a73] text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-500">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-500" />
            <Link href="/about">
              <h2>About Us</h2>
            </Link>
          </div>
        </div>
      </div>


            {/* {/ next /} */}
            <div className="space-y-16">
                <div>
                    <div className="flex flex-col lg:flex-row items-center gap-10 px-5 md:px-14 lg:px-24  pt-24">

                        <div className="lg:w-1/2 mb-6 lg:mb-0">

                            <img src="/plusimg.webp" alt="About Us" className="w-full h-auto" />

                        </div>
                        <div className="lg:w-1/2 ">
                            <div>

                                <div className="mb-6">
                                    <h6 className="text-gray-600 hidden">About Us</h6>
                                    <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">Your Faithful Partners in Medical Goods</p>
                                    <p className="text-gray-600">Houzez allow you to design unlimited panels and real estate custom forms<br /> to capture leads and keep record of all information.</p>
                                </div>


                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <FaCheckSquare className="text-green-500 mr-2 text-xl" />
                                        <span className="text-gray-600">Better security for patient privacy and information.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckSquare className="text-green-500 mr-2 text-xl" />
                                        <div className="flex items-center">
                                            <span className="text-gray-600">More products at lower prices.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center pb-8">
                                        <FaCheckSquare className="text-green-500 mr-2 text-xl" />
                                        <span className="text-gray-600 ">Connect customers with the power of eCommerce at all.</span>
                                    </li>
                                </ul>

                                <div className="border-t pt-9">
                                    <ul className=" flex items-center space-x-5 ">

                                        <li className="flex items-center pr-5 border-r border-gray-300">
                                            <div className="flex items-center ">
                                                <img src="/author.webp" alt="Author" className="w-12 h-12 rounded-full mr-4" />
                                                <div >
                                                    <h4 className="font-semibold text-gray-800">Jerry Henson</h4>
                                                    <small className="text-gray-600">Medical Specialist</small>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="flex items-center">
                                            <div className="flex items-center">
                                                <PiPhoneCallLight className="text-3xl text-gray-600 mr-2" />
                                                <div>

                                                    <small className="text-gray-600">Get Support</small>
                                                    <h6 className="font-semibold text-gray-800">123-456-789-10</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          

            {/* {/ poster /} */}
            <Poster />

            {/* {/ core features /} */}
                <div className='lg:text-6xl text-4xl font-semibold text-center'>
                    <p className="text-[25px] md:text-[32px] lg:text-[36px]">Core Features</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-14 lg:px-24 '>
                    {data.features.map((feature) => (
                        <div key={feature.id} className="group relative flex flex-col items-center justify-center  bg-slate-50 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl p-9">
                            <img src={feature.image} alt={feature.text} />
                            <h2 className="text-2xl my-5 font-semibold text-nowrap">{feature.text}</h2>
                            <p className=" text-gray-600 text-justify">{feature.para}</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0a9a73] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        </div>
                    ))}
                </div>

            {/* {/ clients /} */}

            {/* <div className="bg-gray-100 h-auto w-full py-10">
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:mx-[13rem] md:mx-14 mx-5 gap-5 md:gap-0'>
                    {data.clients.map((client) => (
                        <div key={client.id} className="flex flex-col items-center justify-center gap-3">
                            <span className="text-[#0A9A73] text-[3.3rem] md:text-6xl">{client.icon}</span>
                            <p className="text-2xl md:text-3xl font-bold">{client.rate}</p>
                            <p className="text-center text-gray-500 text-sm md:text-base font-semibold text-nowrap">{client.title}</p>
                        </div>
                    ))}
                </div>
            </div> */}
            
            <Counter/>

            {/* {/ expert doctors /} */}
            <div className='lg:text-6xl text-4xl font-semibold text-center '>
                <p className='text-[25px] md:text-[32px] lg:text-[36px]'>Our Expert Doctor</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-14 lg:px-24 gap-10 border border-slate-100'>
                {data.doctors.map((doctor) => (
                    <div key={doctor.id} className='flex flex-col items-center justify-center '>
                        <div className='border border-gray-100 hover:shadow-xl '>

                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="h-auto w-full"
                            />

                            <div className="text-center p-5">
                                <p className='font-bold tracking-wide md:text-xl text-base text-slate-950 hover:text-[#101b18]'>
                                    {doctor.name}
                                </p>
                                <p className='font-bold tracking-wide text-base text-[#0a9a73] my-3'>
                                    {doctor.designation}
                                </p>

                                <div className='inline-flex space-x-5 items-center text-gray-500 '>
                                    <Link href='https://www.facebook.com/'>
                                    <FaFacebookF className="hover:text-[#0a9a73]"/>
                                    </Link>
                                    <Link href='https://x.com/home'>
                                    <FaTwitter className="hover:text-[#0a9a73]"/>
                                    </Link>
                                    <Link href='https://www.linkedin.com/'>
                                    <FaLinkedin className="hover:text-[#0a9a73]"/>
                                    </Link>
                                </div>
                                </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* {/ slider /} */}
            <div className="bg-slate-100 overflow-hidden py-16">
                <div className='lg:text-6xl text-4xl font-semibold text-center pb-10'>
                    <h1 className='text-[25px] md:text-[32px] lg:text-[36px]'>Clients Feedbacks</h1>
                </div>
                <div className="h-auto group relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination",
                        }}
                        centeredSlides={true}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },

                            640: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                        }}

                        className="mySwiper"
                    >
                        {data.sliderData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex items-center p-7 bg-white space-x-3">
                                    <img src={item.image} className="h-[130px]" />
                                    <div className="flex flex-col relative">
                                        <p className="mb-1 text-[0.74rem] md:text-[0.9rem] lg:text-[0.82rem] text-gray-500">{item.text}</p>
                                        <p className="text-[0.6rem] md:text-base lg:text-[0.8rem] font-semibold font-serif ">{item.name}</p>
                                        <p className="text-[0.55rem] font-semibold font-serif text-[#0a9a73] lg:text-[0.7rem]">{item.designation}</p>
                                    </div>
                                    <div className="absolute bottom-0 right-0 text-[6.25rem] hidden lg:block text-gray-100">
                                        <FaRegComments />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

            {/* {/ questions /} */}
            <section id="faq">
                <div className='lg:text-6xl text-4xl font-semibold text-center pb-10'>
                    <h1 className='text-[25px] md:text-[32px] lg:text-[36px]'>Some Questions</h1>
                </div>

                <div className="">
 
                    <div className="  w-full flex flex-col lg:flex-row lg:gap-10   justify-center px-5 md:px-14 lg:px-24 ">
                        <div className="w-full ">
                            {data.faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className="mb-4 border-b border-gray-300   border flex flex-col justify-center  rounded"
                                >
                                    <h3
                                        className={`text-base flex justify-between items-center p-3 font-semibold cursor-pointer text-slate-950 transition-colors duration-300 ${expandedIndex === index && "text-amber-900"}`}
                                        onClick={() => toggleAnswer(index)}
                                    >
                                        {index + 1}. {faq.question}
                                        <span>{expandedIndex === index ? <TiMinus /> : <TiPlus />}</span>
                                    </h3>

                                    <ul className={`${expandedIndex === index ? "h-max md:max-h-[300px] px-3 pb-3" : "h-0 overflow-hidden"} list-disc pl-6 text-gray-700 space-y-2 duration-500`}>
                                        {faq.answers.map((answer, i) => (
                                            <li key={i} className="text-base text-justify">
                                                {answer}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className=" lg:flex hidden items-start lg:ml-5 mt-5 lg:mt-0  lg:w-[60rem]">
                            <img src="/other.webp" className="w-full " alt="FAQ Related Image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* {/ why choose us /} */}
            <div className="bg-slate-100 py-16">
                <div className='lg:text-6xl text-4xl font-semibold text-center pb-10'>
                    <h1 className='text-[25px] md:text-[32px] lg:text-[36px]'>Why Choose Us</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-24 md:px-14 px-5 gap-8">
                    {data.contactUs.map((item) => (
                        <div key={item.id} className="flex flex-col justify-center p-7 bg-white">
                            <div className="flex items-center gap-4 mb-3">
                                <p className='text-[#0A9A73] text-[60px]'>{item.image}</p>
                                <p className="text-slate-950 font-semibold text-[1.2rem]">{item.title}</p>
                            </div>
                            <p className="text-base text-gray-500 text-justify">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <LatestBlogs />
            </div>
            <Service />
            




        </>
    )
}