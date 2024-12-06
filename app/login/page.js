import Link from 'next/link';
import React from 'react';
import { FaEye, FaHome } from 'react-icons/fa'; // Import eye icon from react-icons
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function page (){
  return (
    <div className="flex flex-row ">
      <div className="w-full lg:w-1/2 flex flex-col items-start px-24 pt-24 ">
        
           <img src="Securelogin.gif" alt="Login" className="w-full h-auto " /> 
          
     
        
      </div>

      <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center items-center py-20 bg-green-50">
        <div className="login-area w-full max-w-md space-y-3 border border-black rounded-md py-20 px-14">
          <h2 className="font-serif text-center text-3xl font-bold">Login</h2>
          <p className="text-center mb-6 text-gray-500">Welcome please login to your account</p>
          <form>
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
            <div className="flex items-center justify-between mb-6 ">
              <div className="flex items-center">
                <input type="checkbox" />
                <label className="text-gray-500 ml-2" >Remember Me</label>
              </div>
              <div>
                <Link href="/signup" className="text-green-700">Forgot Password?</Link>
              </div>
            </div>
            <div className="text-center py-8">
              <Link href="/login" className=" bg-black tracking-wide font-semibold text-white py-2 px-7 rounded-md mr-2 ">LOGIN</Link>
              <Link href="/register" className=" border border-black hover:bg-black hover:text-white font-semibold tracking-wide text-black py-2 px-7 rounded-md ">REGISTER</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


