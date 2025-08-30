// src/components/HeroVideo.tsx
"use client";

import React from "react";
import Image from "next/image";

const HeroVideo: React.FC = () => {
  return (
    <>
    <section className="relative w-full md:h-[850px] h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/subscriptionHero.png" // place your video inside /public/videos/
        alt=""
        width={1920}
        height={1080}
      />
      {/* Content */}
      <div className="max-w-5xl mx-auto relative md:w-[45%] w-[calc(100%-32px)] bg-[#ffffffcc] z-10 m-4 p-8 rounded-2xl text-center md:text-start">
        <h1 className="text-4xl md:text-5xl text-[#FF66C4] font-bold mb-4">
          Welcome to Vibrant Minds Curriculum.
        </h1>
        <p className="text-lg md:text-lg mb-6">
          We provide educational enrichment services to daycares and homeschooling parents through a monthly subscription box. This box offers children aged 15 months to 4 years a themed, play-based learning experience.

        </p>
        <button className="bg-[#FF66C4] text-white px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#FF66C4]/80 transition">
          Join Now
        </button>
      </div>
      <Image src="/shapes/about.svg" alt="Wave" width={1920} height={200} className="w-full bottom-0 2xl:hidden md:block hidden absolute z-9" />
      <Image src="/shapes/cloudbottom2.svg" alt="Wave" width={768} height={200} className="w-full bottom-0 2xl:hidden md:hidden block absolute z-9" />
     
    </section>
     
   </>
  );
};

export default HeroVideo;
