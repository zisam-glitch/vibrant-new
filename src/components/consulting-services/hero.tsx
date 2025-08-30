// src/components/HeroVideo.tsx
"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <>
      <section className=" relative bg-[#FFD600] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl px-4 py-16 md:px-12 md:pt-40 pb-52 grid grid-cols-2 gap-20 justify-center items-center">

          <div className="flex flex-col gap-6 pr-20">
            <h1 className="text-5xl text-[#ff66c4] leading-[1.2]">Vibrant Mind <br />Consulting Services</h1>
            <p className="text-lg">We custom design bulletin boards to fit your ideal vision!
              Our team will reach out to you within 24 hours with different design visuals to choose from. Once the client is satisfied with the design, our production team will begin to prepare the materials.
            </p>

          </div>
          <div>
            <Image src="/hero.png" alt="Hero" width={1000} height={1000} />
          </div>
        </div>

        <Image src="/shapes/wave.svg" alt="Wave" width={1920} height={200} className="w-full bottom-0 absolute z-9 2xl:hidden block" />

      </section>

    </>
  );
};

export default Hero;
