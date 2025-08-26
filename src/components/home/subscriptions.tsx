import React from 'react'
import Image from 'next/image'

export default function subscriptions() {
  return (
    <section className='relative bg-[#FF66C4] my-16'>
      <div className='w-full absolute -top-[0%] md:block hidden'>
        <Image src="/shapes/cloudtop.svg" alt="" width={1920} height={200} className='w-full' />
      </div>
      <div className='w-full absolute -bottom-[0%] md:block hidden'>
        <Image src="/shapes/cloudbottom.svg" alt="" width={1920} height={200} className='w-full' />
      </div>
      <div className='w-full absolute -top-[0%] md:hidden block -mt-[1px]'>
        <Image src="/shapes/mobilecloudtop.svg" alt="" width={768} height={200} className='w-full' />
      </div>
      <div className='w-full absolute -bottom-[0%] md:hidden block -mb-[1px]'>
        <Image src="/shapes/mobilecloudbottom.svg" alt="" width={768} height={200} className='w-full' />
      </div>

      <div className='md:px-12 px-4 md:py-28 py-28'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
          <div className='text-white text-center md:text-start'>
            <h4 className='text-xl font-bold pb-4'>subscriptions</h4>
            <h2 className='text-4xl font-bold pb-4'>Subscribe for a box</h2>
            <p className='text-lg pb-4'>Vibrant Minds Curriculum is thoughtfully designed for homeschooling families and home-based daycare providers, offering a dynamic, bilingual early learning experience.
              Each month, you&apos;ll receive a themed, play-based curriculum box that sparks curiosity and keeps young minds engaged. Our boxes are packed with hands-on activities, interactive learning units, and </p>
            <button className='bg-[#FFD600] text-[#fff] px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#FFD600]/80 transition'>learn more</button>
          </div>
          <div className='relative w-full h-[300px] md:h-[400px]'>
            <Image 
              src="/subscription.png" 
              alt="Subscription box" 
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div className='md:px-12 px-4 pt-24 pb-12 mx-auto md:w-3/4 w-full grid md:grid-cols-4 grid-cols-2 gap-10'>
          <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
            <h4>44</h4>
            <h5>Qualified <br /> Teachers</h5>
          </div>
          <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
            <h4>20</h4>
            <h5>Years of <br /> Experience</h5>
          </div>
          <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
            <h4>100+</h4>
            <h5>Happy <br /> Students</h5>
          </div>
          <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
            <h4>10+</h4>
            <h5>Awards <br /> Won</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
