import React from 'react'
import Image from 'next/image'

export default function Qualitiest() {
  return (
    <section className='max-w-7xl mx-auto md:px-12 px-4 py-16 pt-12 pb-24'>
      <div className='pb-12'>
        <div className='text-center md:w-[40%] w-full mx-auto md:mb-16 mb-8'>
          <h2 className='md:text-4xl text-2xl text-[#FF66C4]'>Need Bulletin Board<br /> Materials?</h2>
          <h5 className='text-lg text-[#FFD600] pt-5'>We custom design bulletin boards to fit your ideal vision!</h5>
        </div>
        <div className='grid md:grid-cols-[1fr_2fr] grid-cols-1 md:gap-10 gap-6'>

          <div className='flex flex-col items-center text-center text-[#710A85] gap-2 px-8 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
            <p className='text-lg font-bold pt-2'>How it works</p>
            <p>Email us a vision you had a mind for your next bulletin board.</p>
          </div>
          <div className='flex flex-col items-center text-center text-white gap-2 px-12 py-6 rounded-lg bg-[#FF66C4] border border-[#FF66C4]'>
            <p className='text-lg font-bold pt-2'>What to Expect</p>
            <p>Our team will reach out to you within 24 hours with different design visuals to choose from. Once the client is satisfied with the design, our production team will begin to prepare the materials.
            </p>
          </div>


        </div>
      </div>
      <div className='pt-12'>
        <div className='text-center md:w-[40%] w-full mx-auto md:mb-16 mb-8'>
          <h2 className='md:text-4xl text-2xl text-[#FF66C4]'>Circle Time Workshops</h2>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-6 pb-10'>

          <div className='flex flex-col items-center justify-center text-center text-[#710A85] gap-2 px-8 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
            <p className='text-lg font-bold pt-2'>Interactive Circle Time <br /> Workshops Designed
            </p>
            <p>ETransform your daycare experience with engaging, hands-on sessions from the Vibrant Minds Curriculum!</p>
          </div>
          <div className='flex flex-col items-center justify-center text-center text-white gap-2 px-12 py-6 rounded-lg bg-[#FF66C4] border border-[#FF66C4]'>
            <Image src="/shapes/castle.png" alt="" width={100} height={100} />
            <p className='text-lg font-bold pt-2'>Material Fee</p>
            <p>$5 per child per session
              Fee waived for subscription members!
            </p>
          </div>
          <div className='flex flex-col items-center justify-center text-center text-[#710A85] gap-2 px-8 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
            <p className='text-lg font-bold pt-2'>Flexible and Affordable Pricing:
            </p>
            <p>Single Session: $100 , high-quality experiences for your children!
              5-Session Package: $450 Save $50 while providing consistent</p>
          </div>


        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6'>

          <div className='flex flex-col items-center justify-center text-center text-[#710A85] gap-2 px-8 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
            <p className='text-lg font-bold pt-2'>Why Choose Us?
            </p>
            <p>Dynamic Circle Time Activities Boost literacy, creativity, and social-emotional skills in a fun, small-group setting. Professional Staff Training Enhance your team's teaching strategies with expert-led workshops. Trusted and Verified Fingerprinted educator with years of experience in early childhood education.</p>
          </div>
          <div className='flex flex-col items-center justify-center text-center text-[#710A85] gap-2 px-8 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
            <p className='text-lg font-bold pt-2'>What’s Included?
            </p>
            <p>High-quality learning materials and engaging activities.
              Hands-on circle time sessions tailored to your daycare.
              Optional staff training to help implement the Vibrant Minds Curriculum.
              Resources and Materials for parents
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}
