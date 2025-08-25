import React from 'react'

export default function Qualitiest() {
  return (
    <section className='md:px-12 px-4 md:py-16 py-12'>
      <div className='text-center md:w-[40%] w-full mx-auto md:mb-16 mb-8'>
        <h2 className='md:text-4xl text-2xl font-bold text-[#FF66C4]'>Providing Good Qualities For Your Loving Kids</h2>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-6'>
       
        <div className='flex flex-col items-center text-center text-[#710A85] gap-2 px-4 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
          <img className='w-12 h-12' src="truck.png" alt="" />
          <h3 className='text-lg font-bold pt-2'>The Toddler Box</h3>
          <p>ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.</p>
        </div>
        <div className='flex flex-col items-center text-center text-white gap-2 px-4 py-6 rounded-lg bg-[#FF66C4] border border-[#FF66C4]'>
          <img className='w-12 h-12' src="book.png" alt="" />
          <h3 className='text-lg font-bold pt-2'>The Toddler Box</h3>
          <p>ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.</p>
        </div>
        <div className='flex flex-col items-center text-center text-[#710A85] gap-2 px-4 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
          <img className='w-12 h-12' src="music.png" alt="" />
          <h3 className='text-lg font-bold pt-2'>The Toddler Box</h3>
          <p>ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.</p>
        </div>
        <div className='flex flex-col items-center text-center text-[#710A85] gap-2 px-4 py-6 rounded-lg bg-[#ff66c426] border border-[#ff66c433]'>
          <img className='w-12 h-12' src="women.png" alt="" />
          <h3 className='text-lg font-bold pt-2'>The Toddler Box</h3>
          <p>ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.</p>
        </div>
       
      </div>
    </section>
  )
}
