import React from 'react'
import Image from 'next/image'

export default function Qualitiest() {
  return (
    <section className='md:px-12 px-4 max-w-7xl mx-auto '>
      <div className='md:py-16 py-12 grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
        <div className='flex flex-col md:items-start items-center md:text-start text-center'>
          <h4 className='text-4xl text-[#FF66C4] '>Our Mission</h4>
          <div className='w-50 my-4 h-[4px] bg-[#FFD600]'></div>
          <p className='text-lg'>Our mission is to guide and support home-based providers with professional support and a strategically designed curriculum that will support children&apos;s behavioral and academic development. We aim to get children under five years old ready for school. We aim to catch any early signs of delayment and intervene, by being the bridge of communication between interventionists, caregivers, and parents by altering the curriculum, especially for that child. We aim to focus on our assessments to differentiate activities for individuals in care, where the provider will receive certified training from our experts.</p>
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
          <h4 className='text-4xl text-[#FF66C4]  '>Why a theme-play <br />
          based curriculum?</h4>
          <div className='w-70 my-4 h-[4px] bg-[#FFD600]'></div>
          <p className='text-lg'>Our play-based approach emphasizes learning through guided play, allowing children to explore and discover concepts naturally in a fun and engaging manner. Alongside our theme-based approach, we organize activities around specific topics or themes, providing a focused and cohesive learning experience that integrates various subjects and skills. This dual approach keeps children engaged and motivated to learn about new topics and reintroduces them to familiar concepts, stimulating their background knowledge.</p>
        </div>
        <div className='md:hidden block'>
          <Image src="/classes/8.png" alt="" width={800} height={800} />
        </div>
      </div>
    </section>
  )
}
