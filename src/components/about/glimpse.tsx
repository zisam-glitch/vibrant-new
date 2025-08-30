"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const days = [
  {
    day: 'Monday',
    title: 'Read Aloud Monday',
    description: 'Introducing a friendly toddler book each Monday helps young children develop language and cognitive skills by engaging with a new theme.'
  },
  {
    day: 'Tuesday',
    title: 'Tactile Tuesday',
    description: 'Engaging in hands-on activities that stimulate touch and fine motor skills, helping children explore different textures and materials.'
  },
  {
    day: 'Wednesday',
    title: 'Wordy Wednesday',
    description: 'Focusing on language development through storytelling, rhymes, and vocabulary-building activities.'
  },
  {
    day: 'Thursday',
    title: 'Thoughtful Thursday',
    description: 'Encouraging social-emotional learning and mindfulness through age-appropriate activities and discussions.'
  },
  {
    day: 'Friday',
    title: 'Fun Friday',
    description: 'A day for creative expression and play, reinforcing the week\'s learning through fun and engaging activities.'
  }
];

export default function Glimpse() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative bg-[#FF66C4] my-16'>
      {/* Cloud background elements */}
      <div className='w-full absolute -top-[0%] 2xl:hidden md:block hidden'>
        <Image src="/shapes/cloudtop.svg" alt="" width={1920} height={200} className='w-full' />
      </div>
      <div className='w-full absolute -bottom-[0%] 2xl:hidden md:block hidden'>
        <Image src="/shapes/cloudbottom.svg" alt="" width={1920} height={200} className='w-full' />
      </div>
      <div className='w-full absolute -top-[0%] 2xl:hidden md:hidden block -mt-[1px]'>
        <Image src="/shapes/mobilecloudtop.svg" alt="" width={768} height={200} className='w-full' />
      </div>
      <div className='w-full absolute -bottom-[0%] 2xl:hidden md:hidden block -mb-[1px]'>
        <Image src="/shapes/mobilecloudbottom.svg" alt="" width={768} height={200} className='w-full' />
      </div>

      <div className='max-w-7xl mx-auto md:px-12 px-4 md:py-28 py-16'>
        <div className='text-center pt-12 pb-6'>
          <h2 className='md:text-[42px] text-3xl uppercase text-white'>A Glimpse into the week</h2>
          <div className='flex gap-4 justify-center py-2 text-white text-start md:text-lg text-[13px]'>
            <p>Theme/Unit for example :</p>
            <div className='flex flex-col gap-1'>
              <p>Week 1 Farm Animals</p>
              <p>Week 2 Winter Season</p>
              <p>Week 3 Dental Hygiene</p>
            </div>
          </div>
        </div>

        {/* Desktop View - Grid */}
        <div className='hidden md:grid md:grid-cols-5 gap-8 pt-6 py-20'>
          {days.map((day, index) => (
            <div key={index} className='flex flex-col bg-[#D9D9D9] rounded-lg h-full'>
              <h4 className='text-[20px] p-2 text-center text-[#FF66C4] bg-[#FFC909] rounded-t-lg'>{day.day}</h4>
              <div className='p-3 flex-1 flex flex-col'>
                <p className='text-[18px] text-center pb-2 text-[#FF66C4]'>{day.title}</p>
                <p className='text-center text-[13px] opacity-50 flex-1'>{day.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion */}
        <div className='md:hidden space-y-4 pt-6 pb-24'>
          {days.map((day, index) => (
            <div key={index} className='bg-[#D9D9D9] mb-1 rounded-lg overflow-hidden'>
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full p-4 text-left flex justify-between items-center ${openIndex === index ? 'bg-[#FFC909]' : 'bg-[#FFC909]'}`}
              >
                <span className='text-[#FF66C4] font-medium'>{day.day} - {day.title}</span>
                <span className='text-[#FF66C4] text-xl transition-transform duration-200'>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`bg-[#D9D9D9] overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
              >
                <div className='p-4 pt-2 text-[13px] opacity-50'>
                  {day.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}