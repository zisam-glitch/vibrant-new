"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom pagination styles
const paginationStyles = {
  '--swiper-pagination-color': '#FF66C4',   
  '--swiper-pagination-bullet-inactive-color': '#D1D5DB', 
  '--swiper-pagination-bullet-size': '12px',
  '--swiper-pagination-bullet-horizontal-gap': '6px',
} as React.CSSProperties;

const classData = [
  {
    id: 1,
    title: 'Karina Ozuna',
    designation: 'Founder & CEO',
    description: 'Early Childhood Consultant ExpertCurriculum developer Behavior Technician (Training)',
    image: 'team/1.png'
  },
  {
    id: 2,
    title: 'Luisa Mora',
    designation: 'Co-founder & COO',
    description: 'Early Childhood Consultant ExpertCurriculum developer Behavior Technician (Training)',
    image: 'team/2.png'
  },
  {
    id: 3,
    title: 'Luisa Mora',
    designation: 'Co-founder & COO',
    description: 'Early Childhood Consultant ExpertCurriculum developer Behavior Technician (Training)',
    image: 'team/3.png'
  },
  {
    id: 5,
    title: 'Luisa Mora',
    designation: 'Co-founder & COO',
    description: 'Early Childhood Consultant ExpertCurriculum developer Behavior Technician (Training)',
    image: 'team/2.png'
  },
  {
    id: 4,
    title: 'Luisa Mora',
    designation: 'Co-founder & COO',
    description: 'Early Childhood Consultant ExpertCurriculum developer Behavior Technician (Training)',
    image: 'team/4.png'
  },
];

export default function Team() {
  return (
    <section className='max-w-7xl mx-auto relative md:px-12 px-4 pt-12 pb-30'>
      <div className='text-center md:w-[40%] w-full mx-auto md:mb-16 mb-8'>
        <h2 className='md:text-4xl text-[#FF66C4] text-2xl'>Meet the Team</h2>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.2}
        navigation={false}
        pagination={{ 
          clickable: true,
          el: '.team-pagination',
          bulletClass: 'team-pagination-bullet',
          bulletActiveClass: 'team-pagination-bullet-active'
        }}
        style={paginationStyles}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="relative"
      >
        {classData.map((classItem) => (
          <SwiperSlide key={classItem.id} className='pb-12'>
            <div className='h-full'>
              <Image 
                src={`/${classItem.image}`} 
                alt={classItem.title} 
                width={300} 
                height={400}
                className='w-full h-auto rounded-lg object-cover'
              />
              <div className='flex flex-col gap-1 py-4'>
                <p className='text-lg'>{classItem.title}</p>
                <p className='text-lg font-bold'>{classItem.designation}</p>
                <p className='text-sm text-gray-600'>{classItem.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="team-pagination flex justify-center gap-2 "></div>
      </Swiper>

    
    </section>
  );
}
