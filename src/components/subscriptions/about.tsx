import React from 'react'
import Image from 'next/image'

export default function Qualitiest() {
  return (
    <section className='md:px-12 px-4 max-w-7xl mx-auto '>
          <div className='md:py-16 py-12 grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
            <div className='flex flex-col md:items-start items-center md:text-start text-center'>
              <h4 className='md:text-4xl text-3xl text-[#FF66C4] '>Why Circle Time Matters</h4>
              <div className='w-50 my-4 h-[4px] bg-[#FFD600]'></div>
              <p className='text-lg'>Circle time isn&apos;t just a daily routine; it&apos;s a cornerstone for developing pre-academic skills. Through structured activities like songs, counting exercises, and letter recognition, children are introduced to foundational concepts in a fun and engaging way. These early exposures help prepare them to seamlessly adapt to a curriculum, even if they start mid-year.</p>
            </div>
            <div className='md:pl-20 pl-0'>
              <Image src="/classes/9.png" alt="" width={800} height={800} />
            </div>
          </div>
          <div className='md:py-16 py-12 grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
            <div className='pr-20 md:block hidden'>
              <Image src="/classes/8.png" alt="" width={800} height={800} />
            </div>
            <div className='flex flex-col md:items-end items-center md:text-right text-center'>
              <h4 className='md:text-4xl text-3xl text-[#FF66C4]  '>The Power of Repetition</h4>
              <div className='w-70 my-4 h-[4px] bg-[#FFD600]'></div>
              <p className='text-lg'>Repetition during circle time helps reinforce learning. Whether it&apos;s singing the alphabet song, counting aloud, or practicing calendar activities, these drills create familiarity and confidence in young learners. Even if a child doesn&apos;t fully grasp a concept right away, the consistent practice provides the building blocks they need to progress.</p>
            </div>
            <div className='md:hidden block'>
              <Image src="/classes/8.png" alt="" width={800} height={800} />
            </div>
          </div>
          <div className='md:py-16 py-12 grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
            <div className='flex flex-col md:items-start items-center md:text-start text-center'>
              <h4 className='md:text-4xl text-3xl text-[#FF66C4] '>Introduction Is Key</h4>
              <div className='w-50 my-4 h-[4px] bg-[#FFD600]'></div>
              <p className='text-lg'>For toddlers, introducing concepts like letters, numbers, and routines is more important than mastery. For instance: If children are learning letters like &quot;K&quot; and &quot;L&quot; exposure is more critical than perfect recall or recognition. When counting to 100, it&apos;s okay if they only reach 20 or 30. The goal is to lay the groundwork for future success. Practicing with safe crayons or stencils helps develop fine motor skills, even if they&apos;re not yet writing numbers perfectly.</p>
            </div>
            <div className='md:pl-20 pl-0'>
              <Image src="/classes/9.png" alt="" width={800} height={800} />
            </div>
          </div>
        </section>
  )
}
