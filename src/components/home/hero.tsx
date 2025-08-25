// src/components/HeroVideo.tsx
"use client";

import React from "react";

const HeroVideo: React.FC = () => {
  return (
    <>
    <section className="relative w-full md:h-[850px] h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4" // place your video inside /public/videos/
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative md:w-[45%] w-full bg-[#ffffffcc] z-10 m-4 p-8 rounded-2xl text-center md:text-start">
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
      <img src="/shapes/wave.svg" alt="Wave" className="w-full bottom-0 absolute z-9" />
     
    </section>
     
   </>
  );
};

export default HeroVideo;
