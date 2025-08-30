"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    id: 4,
    title: 'Luisa Mora',
    designation: 'Co-founder & COO',
    description: 'Early Childhood Consultant ExpertCurriculum developer Behavior Technician (Training)',
    image: 'team/4.png'
  },
  {
    id: 5,
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
        pagination={false}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{
          overflow: 'hidden',
        }}
      >
        {classData.map((classItem) => (
          <SwiperSlide key={classItem.id}>
            <div>
              <Image
                src={`/${classItem.image}`}
                alt={classItem.title}
                width={800}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col gap-1 py-4">
                <p className="md:text-lg text-sm">{classItem.title}</p>
                <p className="md:text-lg text-sm font-bold">{classItem.designation}</p>
                <p className="md:text-lg text-sm">{classItem.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
