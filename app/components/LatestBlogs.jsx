'use client'
import React,{useEffect} from 'react';
import { FaRegUser, FaTags } from 'react-icons/fa';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  }
];

export default function LatestBlogs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='pt-2 lg:px-24 md:px-14 px-5'>
      <div className="lg:text-5xl text-4xl font-semibold text-center pb-7">
        <h1 className='text-[25px] md:text-[32px] lg:text-[36px]'>Latest Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16" >
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col border border-gray-100 shadow-sm overflow-hidden" data-aos="zoom-in">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-auto w-full transition-transform duration-300 ease-in-out transform hover:scale-105 "
            />
            <ul className='px-4 py-2 md:py-3 lg:py-4'>
              <li className='flex items-center gap-7 text-base'>
                <div className='flex items-center gap-1 text-sm '>
                  <FaRegUser className='text-green-700' />
                  <h2 className='font-semibold text-gray-500 hover:text-[#0a9a73]'>by: {blog.author}</h2>
                </div>
                <div className='flex items-center gap-1 text-sm'>
                  <FaTags className='text-green-700' />
                  <h2 className='font-semibold  text-gray-500 hover:text-[#0a9a73]'>{blog.tag}</h2>
                </div>
              </li>
              <h3 className='font-semibold  tracking-wide text-sm lg:text-lg mt-2 hover:text-[#0a9a73] border-b-2 pb-2'>
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
            </ul>
            <div className="inline-flex items-center justify-between pb-3 px-5">
              <span className="font-semibold text-sm  text-gray-500">{blog.date}</span>
              <Link href={blog.link} className="font-semibold text-sm  text-[#0a9a73]">READ MORE</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
