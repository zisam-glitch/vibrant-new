import React from 'react'

export default function subscriptions() {
  return (
    <section className='relative bg-[#FF66C4] my-16'>
      <img src="/shapes/cloudtop.svg" alt="" className='w-full absolute -top-[0%] md:block hidden' />
      <img src="/shapes/cloudbottom.svg" alt="" className='w-full absolute -bottom-[0%] md:block hidden' />
      <img src="/shapes/mobilecloudtop.svg" alt="" className='w-full absolute -top-[0%] md:hidden block -mt-[1px]' />
      <img src="/shapes/mobilecloudbottom.svg" alt="" className='w-full absolute -bottom-[0%] md:hidden block -mb-[1px]' />

      <div className='md:px-12 px-4 md:py-28 py-28'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
          <div className='text-white text-center md:text-start'>
            <h4 className='text-xl font-bold pb-4'>subscriptions</h4>
            <h2 className='text-4xl font-bold pb-4'>Subscribe for a box</h2>
            <p className='text-lg pb-4'>Vibrant Minds Curriculum is thoughtfully designed for homeschooling families and home-based daycare providers, offering a dynamic, bilingual early learning experience.
              Each month, you'll receive a themed, play-based curriculum box that sparks curiosity and keeps young minds engaged. Our boxes are packed with hands-on activities, interactive learning units, and </p>
            <button className='bg-[#FFD600] text-[#fff] px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#FFD600]/80 transition'>learn more</button>
          </div>
          <div>
            <img src="/subscription.png" alt="" />
          </div>
        </div>
        <div className='md:px-12 px-4 pt-24 pb-12 mx-auto md:w-3/4 w-full grid md:grid-cols-4 grid-cols-2 gap-10'>
        <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
          <h4>44</h4>
          <h5>Qualified <br /> Teachers</h5>
        </div>
        <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
          <h4>20</h4>
          <h5>Years Of <br /> Experience</h5>
        </div>
        <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
          <h4>565</h4>
          <h5>Students <br /> Enrolled</h5>
        </div>
        <div className='text-white text-center flex flex-col items-center justify-center gap-4 text-xl font-bold'>
          <h4>15</h4>
          <h5>Total <br /> Groups</h5>
        </div>

      </div>
      </div>

    </section>
  )
}
