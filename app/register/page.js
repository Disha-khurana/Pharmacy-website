import Link from 'next/link';
import React from 'react';
import { FaEye, FaHome } from 'react-icons/fa'; // Import eye icon from react-icons
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function page (){
  return (
    <div className="flex flex-row bg-[#0a9a73]">
      <div className="w-full lg:w-1/2 flex flex-col items-start px-24 pt-24 ">
        <div>
          <h1 className="text-5xl font-bold font-serif">Register</h1>
          <nav>
          <div className="flex text-base lg:text-lg items-center py-3">
            <FaHome className="text-gray-700 text-xl me-2" />
            <Link href="/">
              <h2 className="text-gray-700 font-semibold">Home</h2>
            </Link>
            <MdKeyboardArrowRight className="text-xl text-gray-700 " />
            <Link href="/login">
              <h2 className='font-semibold'>Register</h2>
            </Link>
          </div>
          </nav>
          <img src="/loginside.webp" alt="Login" className="w-full h-auto " />
        </div>
        
      </div>

      <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center items-center p-6 bg-green-50">
        <div className="login-area w-full max-w-md space-y-3 border border-black rounded-md py-20 px-14">
          <h2 className="font-serif text-center text-3xl font-bold">Register</h2>
          <p className="text-center mb-6 text-gray-500">Welcome please register to your account</p>
          <form>
          <div className="mb-6">
              <label className="font-semibold ">Username</label>
              <input
                name="username"
                className="form-control w-full p-3 border border-black rounded-md placeholder-black mt-1 outline-none"
                placeholder="Username"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="font-semibold ">Email Address</label>
              <input
                name="email"
                className="form-control w-full p-3 border border-black rounded-md placeholder-black mt-1 outline-none"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="font-semibold">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="form-control w-full p-3 border border-black rounded-md placeholder-black mt-1 outline-none"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-y-3">
                  <FaEye className="cursor-pointer" />
                </div>
              </div>
            </div>
            
            <div className="text-center py-8">
              <Link href="/register" className=" border border-black bg-black text-white font-semibold tracking-wide mr-2  py-2 px-7 rounded-md ">REGISTER</Link>
              <Link href="/login" className=" hover:bg-black tracking-wide font-semibold border border-black hover:text-white py-2 px-7 rounded-md ">LOGIN</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


