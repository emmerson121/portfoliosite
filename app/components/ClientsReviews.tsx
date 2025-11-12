// src/components/ClientReviews.tsx
'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { clientReviews } from "../data/reviews";

const ClientReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === clientReviews.length - 1 ? 0 : prev + 1
      );
    }, 10000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const review = clientReviews[currentIndex];

  return (
    <section data-aos='fade-up' data-aos-delay="200" id="reviews" className="mt-26 md:mt-36">
      <div className="mx-auto text-center transition-all duration-700 lg:p-16">
        <h2 className="text-2xl md:text-3xl mb-6 font-bold text-[#397eff]">
          <span className="text-white">Client</span> Reviews
        </h2>

    <div className="grid gap-9 md:flex md:justify-between w-full md:w-full md:mt-8 p-4">

    <div data-aos='fade-up' data-aos-delay="200" className="text-left w-full md:w-[50%]">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8">What do Clients say?</div>
        <div className="text-xs md:text-base">Check out the feedbacks of clients and people I have collaborated with in building several web projects. I am super reliable, timely in delivering top-notch websites.</div>
    </div>

        <div data-aos='fade-up' data-aos-delay="200" className="w-full md:w-[50%] lg:w-[50%]">
        <div className="relative bg-[#0e0e0e]  xl:h-[280px] rounded-xl shadow-md mx-auto w-full max-w-md transition-opacity duration-700 ease-in-out">
          {review.image && (
            <Image
            width={100}
            height={100}
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-indigo-100"
            />
          )}

          <h3 className="text-lg font-semibold text-white">
            {review.name}
          </h3>
          <p className="text-sm text-[#397eff] mb-6">{review.company}</p>
          <p className="text-white italic mb-4 transition-opacity duration-700 ease-in-out md:text-base text-xs p-2">
            “{review.review}”
          </p>

          <div className="flex justify-center text-yellow-400">
            {/* {"⭐".repeat(review.rating)} */}
            {/* {"☆".repeat(5 - review.rating)} */}
          </div>
        </div>
        
        {/* navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {clientReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#397eff]" : "bg-gray-500"
              } transition-all`}
            />
          ))}
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;

