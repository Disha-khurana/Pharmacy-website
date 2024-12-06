"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Poster(props) {
    // Initialize the timer with 1 day (24 hours * 60 minutes * 60 seconds)
    const initialTime = 24 * 60 * 60;

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        // Exit early if time is 0
        if (time === 0) return;

        // Set up a timer
        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000); // Update every second

        // Clear the timer on component unmount
        return () => clearInterval(timerId);
    }, [time]);

    // Format time as DD:HH:MM:SS
    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;

        return {
            days: days < 10 ? `0${days}` : days,
            hours: hours < 10 ? `0${hours}` : hours,
            minutes: minutes < 10 ? `0${minutes}` : minutes,
            seconds: secs < 10 ? `0${secs}` : secs,
        };
    };

    const { days, hours, minutes, seconds } = formatTime(time);

    return (
        <div className='relative w-full h-auto bg-slate-100 lg:bg-transparent '>
            <div className='relative lg:absolute px-5 md:px-14 lg:px-0 lg:left-[21%] py-10 lg:py-12 justify-center lg:transform lg:-translate-x-1/2 space-y-5 flex flex-col '>
                <p className='text-[#0a9a73] font-bold text-sm md:text-base lg:text-lg tracking-wider'>Today's Hot Offer</p>
                <p className='font-bold text-[25px] md:text-[30px] lg:text-[40px] font-sans leading-tight'>Free Covid-19 Vaccine <br className='hidden lg:block'/>Campaign Ticket</p>
                <p className='text-sm md:text-base lg:text-[17px] text-gray-600'>Cur tantas regiones barbarorum obiit, tot maria transmist<br className='hidden lg:block'/>
                    summo bono fruitur id est voluptate barbarorum</p>
                <div className='flex space-x-4 ' style={{'marginTop':'1rem'}} >
                    <div className='flex flex-col items-center'>
                        <div className='bg-white text-[#0a9a73] shadow-sm'>
                            <p className=' text-xl md:text-2xl font-bold   h-8 w-11 md:h-9 md:w-14 text-center leading-normal '>{days}</p>
                        </div>
                        <p className='text-center mt-2 text-[14px] md:text-[17px] text-custom-gray'>Days</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white text-[#0a9a73] shadow-sm'>
                            <p className=' text-xl md:text-2xl font-bold  h-8 w-11 md:h-9 md:w-14 text-center leading-normal'>{hours}</p>
                        </div>
                        <p className='text-center mt-2 text-[14px] md:text-[17px] text-custom-gray'>Hrs</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white text-[#0a9a73] shadow-sm'>
                            <p className=' text-xl md:text-2xl font-bold  h-8 w-11 md:h-9 md:w-14 text-center leading-normal'>{minutes}</p>
                        </div>
                        <p className='text-center mt-2 text-[14px] md:text-[17px] text-custom-gray'>Mins</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white text-[#0a9a73] shadow-sm'>
                            <p className='text-xl md:text-2xl font-bold  h-8 w-11 md:h-9 md:w-14 text-center leading-normal'>{seconds}</p>
                        </div>
                        <p className='text-center mt-2 text-[14px] md:text-[17px] text-custom-gray'>Secs</p>
                    </div>
                </div>
                <div className='flex items-center space-x-7 py-6' >
                    
                    <Link href='/products' className='bg-green-700 text-white p-1 md:p-2 rounded-lg hover:text-black hover:bg-slate-300 hover:border hover:border-slate-200 font-medium'><button className='text-sm md:text-base'>BOOK NOW</button></Link>
                    <Link href='/deal' className='text-green-700 text-sm md:text-base lg:text-[17px] font-normal'><u>Deal of The Day</u></Link>
                </div>
            </div>
            {/* <img src='/photo.webp' alt="poster" className='hidden lg:block h-auto w-full ' /> */}
            <div className="today-bg hidden lg:block"></div>
        </div>
    );
}

export default Poster;
