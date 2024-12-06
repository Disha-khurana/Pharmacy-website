"use client";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [activeClients, setActiveClients] = useState(0);
  const [cupOfCoffee, setCupOfCoffee] = useState(0);
  const [getRewards, setGetRewards] = useState(0);
  const [countryCover, setCountryCover] = useState(0);

  useEffect(() => {
    const duration = 2000; // Duration for the animation

    const incrementCounter = (setCounter, targetValue, startValue = 0) => {
      const incrementTime = Math.floor(duration / (targetValue - startValue));
      const counterInterval = setInterval(() => {
        startValue += 1;
        setCounter(startValue);
        if (startValue >= targetValue) {
          clearInterval(counterInterval);
        }
      }, incrementTime);
    };

    // Increment counters with the specified target values
    incrementCounter(setActiveClients, 733, 0); // From 0 to 733
    incrementCounter(setCupOfCoffee, 33, 0); // From 0 to 33
    incrementCounter(setGetRewards, 100, 0); // From 0 to 100
    incrementCounter(setCountryCover, 21, 0); // From 0 to 21
  }, []);

  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12  mt-8 overflow-hidden">
        <div className="bg-[#0a9a73]">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto relative top-[3rem] ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center border-b relative  border-gray-400 rounded-lg shadosw-lg p-8 bg-gray-50">
             
              <div className="text-center p-4 lg:border-r-2">
                <h2 className="text-2xl font-bold text-[#000]">
                  {activeClients.toLocaleString()}+
                </h2>
                <p className="text-gray-500">Active Clients</p>
              </div>

              
              <div className="text-center p-4 lg:border-r-2">
                <h2 className="text-2xl font-bold text-[#000]">
                  {cupOfCoffee}K+
                </h2>
                <p className="text-gray-500">Cup of coffee</p>
              </div>

              <div className="text-center p-4 lg:border-r-2">
                <h2 className="text-2xl font-bold text-[#000]">
                  {getRewards}+
                </h2>
                <p className="text-gray-500">Get Rewards</p>
              </div>

              <div className="text-center p-4 ">
                <h2 className="text-2xl font-bold text-[#000]">
                  {countryCover}+
                </h2>
                <p className="text-gray-500">Country Cover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
