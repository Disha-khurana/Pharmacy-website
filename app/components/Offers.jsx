'use client'
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Offers() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const offers = [
    {
      imgSrc: "/trolley.svg",
      altText: "Free Shipping",
      title: "Free Shipping",
      description: "On all orders over $49.00",
    },
    {
      imgSrc: "/money.svg",
      altText: "15 Days Returns",
      title: "15 Days Returns",
      description: "Moneyback guarantee",
    },
    {
      imgSrc: "/credit.svg",
      altText: "Secure Checkout",
      title: "Secure Checkout",
      description: "Protected by Paypal",
    },
    {
      imgSrc: "/giftcard.svg",
      altText: "Offer & Gift Here",
      title: "Offer & Gift Here",
      description: "On all orders over",
    },
  ];

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center bg-[#f2f6f7] py-10 px-5 md:px-10 lg:px-24 h-auto w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center w-full max-w-full gap-5 lg:gap-20' >
        {offers.map((offer, index) => (
          <div key={index} className='flex items-center w-full py-4 gap-3 justify-center' data-aos="fade-up">
            <img
              src={offer.imgSrc}
              alt={offer.altText}
              className='h-12 w-12'
            />
            <div className='flex flex-col'>
              <p className='font-bold lg:text-xl text-lg'>{offer.title}</p>
              <p className='text-gray-700 lg:text-base text-sm'>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
