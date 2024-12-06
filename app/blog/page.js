'use client'
import React,{useEffect} from 'react'
import { FaRegUser, FaTags } from 'react-icons/fa';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  

    const blogs = [
        {
          id: 1,
          image: '/img.webp',
          author: 'Vicodin',
          tag: 'Latest News',
          title: '7 home trends that will shape your house in 2021',
          date: 'June 24, 2021',
          link: '/blog/7-home-trends-that-will-shape-your-house-in-2021'
        },
        {
          id: 2,
          image: '/2img.webp',
          author: 'Vicodin',
          tag: 'Latest News',
          title: '10 Brilliant Ways To Decorate Your Home in 2021',
          date: 'June 24, 2021',
          link: '/blog/10-brilliant-ways-to-decorate-your-home-in-2021'
        },
        {
          id: 3,
          image: '/img3.webp',
          author: 'Vicodin',
          tag: 'Latest News',
          title: 'The Most Inspiring Interior Design Of house in 2021',
          date: 'June 23, 2021',
          link: '/blog/the-most-inspiring-interior-design-of-house-in-2021'
        },
        {                    
            id: 4,
            image: '/2img.webp',
            author: 'Vicodin',
            tag: 'Latest News',
            title: 'How to Make Your Tires Last Longer in 2021?',
            date: 'June 23, 2021',
            link: '/blog/how-to-make-your-tires-last-longer-in-2021'
          },
          {
            id: 5,
            image: '/img4.webp',
            author: 'Vicodin',
            tag: 'Latest News',
            title: 'Common Engine Oil Problems and Solutions',
            date: 'June 23, 2021',
            link: '/blog/common-engine-oil-problems-and-solutions'
          },                     
          {
            id: 6,
            image: '/img5.webp',
            author: 'Vicodin',
            tag: 'Latest News',
            title: 'Electric Car Maintenance, Servicing & Repairs',
            date: 'June 23, 2021',
            link: '/blog/electric-car-maintenance-servicing-and-repairs'
          },
          {               
            id: 2,
            image: '/2img.webp',
            author: 'Vicodin',
            tag: 'Latest News',
            title: '10 Brilliant Ways To Decorate Your Home in 2021',
            date: 'June 24, 2021',
            link: '/blog/10-brilliant-ways-to-decorate-your-home-in-2021'
          },            
          {
            id: 1,
            image: '/img.webp',
            author: 'Vicodin',
            tag: 'Latest News',
            title: '7 home trends that will shape your house in 2021',
            date: 'June 24, 2021',
            link: '/blog/7-home-trends-that-will-shape-your-house-in-2021'
          },
          {
            id: 5,
            image: '/img4.webp',
            author: 'Vicodin',
            tag: 'Latest News',
            title: 'Common Engine Oil Problems and Solutions',
            date: 'June 23, 2021',
            link: '/blog/common-engine-oil-problems-and-solutions'
          }

      ];

  return (
    <div className='py-16 lg:px-24 md:px-10 px-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 ">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col border border-gray-100 shadow-sm overflow-hidden" data-aos="zoom-in">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-auto w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <ul className='px-4 py-2 md:py-3 lg:py-4 '>
              <li className='flex items-center gap-7 text-base'>
                <div className='flex items-center gap-1 text-[14px] md:text-[14px] lg:text-[16px]'>
                  <FaRegUser className='text-green-700' />
                  <p className='font-semibold text-gray-500 hover:text-[#0a9a73]'>by: {blog.author}</p>
                </div>
                <div className='flex items-center gap-1 text-[15px]'>
                  <FaTags className='text-green-700' />
                  <p className='font-semibold  text-gray-500 hover:text-[#0a9a73]'>{blog.tag}</p>
                </div>
              </li>
              <Link href={blog.link}>
              <h3 className='font-semibold  tracking-wide text-[15px] md:text-[16px] lg:text-[18px] hover:text-[#0a9a73] border-b-2 py-3'>
                {blog.title}
              </h3>
              </Link>
            </ul>
            <div className="inline-flex items-center justify-between pb-3 px-5">
              <span className="font-semibold text-[14px] md:text-[14px] lg:text-[15px] text-gray-500">{blog.date}</span>
              <Link href={blog.link} className="font-semibold text-[14px] md:text-[14px] lg:text-[15px] text-[#0a9a73]">READ MORE</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
