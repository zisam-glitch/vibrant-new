import React from "react";
import Image from "next/image";

const HeroVideo: React.FC = () => {
  return (
    <>
      <section className="relative w-full flex items-center justify-center bg-[#FFD600] overflow-hidden">
        <div className="max-w-7xl mx-auto md:w-3/4 w-full text-center md:px-12 px-8 md:pb-60 md:pb-48 pt-20 pb-30">
          <h2 className="md:text-6xl text-4xl font-bold text-[#FF66C4] pb-5 font-righteous">About Us</h2>
          <p className="text-lg md:text-xl">Vibrant Minds Curriculum is dedicated to enriching early childhood education for home-based learning centers. Our engaging, theme-based, play-based, and bilingual curriculum stimulates curiosity, creativity, and critical thinking in children under five. We prepare children for school with hands-on activities and comprehensive assessments that identify and address learning delays, ensuring each child gets the support they need to thrive.</p>
        </div>
        <div className="w-full absolute -bottom-[0%] 2xl:hidden md:block hidden">
          <Image src="shapes/about.svg" alt="" width={1920} height={200}/>
        </div>
        <div className="w-full absolute -bottom-[0%] 2xl:hidden md:hidden block">
          <Image src="shapes/cloudbottom2.svg" alt="" width={768} height={200}/>
        </div>
      </section>
    </>
  );
};

export default HeroVideo;
