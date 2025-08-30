"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const qualities = [
  {
    id: 1,
    title: 'The Toddler Box',
    description: 'ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.',
    icon: '/truck.png',
    isHighlighted: false
  },
  {
    id: 2,
    title: 'Learning Materials',
    description: 'ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.',
    icon: '/book.png',
    isHighlighted: true
  },
  {
    id: 3,
    title: 'Music & Fun',
    description: 'ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.',
    icon: '/music.png',
    isHighlighted: false
  },
  {
    id: 4,
    title: 'Expert Guidance',
    description: 'ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.',
    icon: '/women.png',
    isHighlighted: false
  }
];

export default function Qualitiest() {
  return (
    <section className='max-w-7xl mx-auto md:px-12 px-4 md:py-16 py-12'>
      <div className='text-center md:w-[40%] w-full mx-auto md:mb-16 mb-8'>
        <h2 className='md:text-4xl text-2xl text-[#FF66C4]'>Providing Good Qualities For Your Loving Kids</h2>
      </div>
      
      {/* Desktop Grid View - Hidden on mobile */}
      <div className='hidden md:grid md:grid-cols-4 gap-8'>
        {qualities.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col items-center text-center gap-3 p-6 rounded-lg border ${
              item.isHighlighted 
                ? 'text-white bg-[#FF66C4] border-[#FF66C4]' 
                : 'text-[#710A85] bg-[#ff66c426] border-[#ff66c433]'
            }`}
          >
            <div className='w-12 h-12 relative'>
              <Image 
                src={item.icon} 
                alt={item.title} 
                fill
                className='object-contain'
              />
            </div>
            <p className='text-lg font-bold'>{item.title}</p>
            <p className='text-sm'>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper - Hidden on desktop */}
      <div className='md:hidden'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          navigation={false}
          pagination={false}
          className='pb-12 px-2'
        >
          {qualities.map((item) => (
            <SwiperSlide key={item.id}>
              <div 
                className={`flex flex-col items-center text-center gap-3 p-6 rounded-lg h-full ${
                  item.isHighlighted 
                    ? 'text-white bg-[#FF66C4]' 
                    : 'text-[#710A85] bg-[#ff66c426]'
                }`}
              >
                <div className='w-12 h-12 relative'>
                  <Image 
                    src={item.icon} 
                    alt={item.title} 
                    fill
                    className='object-contain'
                  />
                </div>
                <p className='text-lg font-bold'>{item.title}</p>
                <p className='text-sm'>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}