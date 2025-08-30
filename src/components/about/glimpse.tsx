import React from 'react'
import Image from 'next/image'

export default function subscriptions() {
  return (
    <section className='relative bg-[#FF66C4] my-16'>
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

      <div className='max-w-7xl mx-auto md:px-12 px-4 md:py-28 py-28'>
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
        <div className='grid md:grid-cols-5 grid-cols-1 gap-8 pt-6 py-20'>
          <div className='flex flex-col bg-[#D9D9D9] rounded-lg'>
            <h4 className='text-[20px] p-2 text-center text-[#FF66C4] bg-[#FFC909] rounded-t-lg'>Monday</h4>
            <div className='p-3'>
              <p className='text-[18px] text-center pb-2 text-[#FF66C4]'>Read Aloud Monday</p>
              <p className='text-center text-[13px] opacity-50'>Introducing a friendly toddler book each Monday helps young children develop language and cognitive skills by engaging with a new theme. This routine fosters.
              </p>
            </div>

          </div>
          <div className='flex flex-col bg-[#D9D9D9] rounded-lg'>
            <h4 className='text-[20px] p-2 text-center text-[#FF66C4] bg-[#FFC909] rounded-t-lg'>Monday</h4>
            <div className='p-3'>
              <p className='text-[18px] text-center pb-2 text-[#FF66C4]'>Read Aloud Monday</p>
              <p className='text-center text-[13px] opacity-50'>Introducing a friendly toddler book each Monday helps young children develop language and cognitive skills by engaging with a new theme. This routine fosters.
              </p>
            </div>

          </div>
          <div className='flex flex-col bg-[#D9D9D9] rounded-lg'>
            <h4 className='text-[20px]  p-2 text-center text-[#FF66C4] bg-[#FFC909] rounded-t-lg'>Monday</h4>
            <div className='p-3'>
              <p className='text-[18px] text-center pb-2 text-[#FF66C4]'>Read Aloud Monday</p>
              <p className='text-center text-[13px] opacity-50'>Introducing a friendly toddler book each Monday helps young children develop language and cognitive skills by engaging with a new theme. This routine fosters.
              </p>
            </div>

          </div>
          <div className='flex flex-col bg-[#D9D9D9] rounded-lg'>
            <h4 className='text-[20px]  p-2 text-center text-[#FF66C4] bg-[#FFC909] rounded-t-lg'>Monday</h4>
            <div className='p-3'>
              <p className='text-[18px] text-center pb-2 text-[#FF66C4]'>Read Aloud Monday</p>
              <p className='text-center text-[13px] opacity-50'>Introducing a friendly toddler book each Monday helps young children develop language and cognitive skills by engaging with a new theme. This routine fosters.
              </p>
            </div>

          </div>
          <div className='flex flex-col bg-[#D9D9D9] rounded-lg'>
            <h4 className='text-[20px]  p-2 text-center text-[#FF66C4] bg-[#FFC909] rounded-t-lg'>Monday</h4>
            <div className='p-3'>
              <p className='text-[18px] text-center pb-2 text-[#FF66C4]'>Read Aloud Monday</p>
              <p className='text-center text-[13px] opacity-50'>Introducing a friendly toddler book each Monday helps young children develop language and cognitive skills by engaging with a new theme. This routine fosters.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
