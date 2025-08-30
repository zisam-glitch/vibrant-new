import React from 'react'
import Image from 'next/image'

export default function subscriptions() {
  return (
    <section className='relative bg-[#FFD600] my-16'>
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

      <div className='max-w-7xl mx-auto md:px-12 px-4 md:py-36 py-28 grid md:grid-cols-2 grid-cols-1 gap-10'>
        <div className='flex flex-col justify-between text-center md:text-start' >
          <h2 className='md:text-4xl text-3xl text-[#FF66C4]'>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
          <div className='md:flex hidden flex-col gap-4 w-1/2' >
          <button className='flex items-center gap-2 py-4 px-6 text-[#fff] rounded-lg cursor-pointer '>
            <Image src="/EnvelopeFill.svg" alt="" width={16} height={16} />
            <p className='leading-none'>info@vibrantminds.com</p>
          </button>
          <button className='flex items-center gap-2 py-4 px-6 bg-[#FF66C4] text-[#fff] rounded-lg cursor-pointer '>
            <Image src="/TelephoneFill.svg" alt="" width={16} height={16} />
            <p className='leading-none'>+123 456 789</p>
          </button>
          <button className='flex items-center gap-2 py-4 px-6 text-[#fff] rounded-lg cursor-pointer '>
            <Image src="/map.svg" alt="" width={16} height={16} />
            <p className='leading-none'>123 Street 456 House</p>
          </button>
          </div>
        </div>
        <div className='p-8 bg-[#ffffffcc] rounded-lg'>
          <div>
            <p className='text-xl'>I’m interested in...</p>
            <form className='s flex flex-col gap-8' action="">
              <div>
                <div className="button">
                  <input type="radio" id="a25" name="check-substitution-2" />
                  <label className="btn btn-default" htmlFor="a25">Lorem ipsum </label>
                </div>
                <div className="button">
                  <input type="radio" id="a50" name="check-substitution-2" defaultChecked />
                  <label className="btn btn-default" htmlFor="a50">dolor sit amet</label>
                </div>
                <div className="button">
                  <input type="radio" id="a75" name="check-substitution-2" />
                  <label className="btn btn-default" htmlFor="a75">consectetuer</label>
                </div>
                <div className="button">
                  <input type="radio" id="a100" name="check-substitution-2" />
                  <label className="btn btn-default" htmlFor="a100">adipiscing</label>
                </div>
                <div className="button">
                  <input type="radio" id="a125" name="check-substitution-2" />
                  <label className="btn btn-default" htmlFor="a125">5 Other</label>
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <input className='py-2 border-b-[#FF66C4] border-b-3 focus:border-[#A91079] focus:outline-none ' type="text" placeholder='Full Name' />
                <input className='py-2 border-b-[#FF66C4] border-b-3 focus:border-[#A91079] focus:outline-none ' type="email" placeholder='Email' />
                <input className='py-2 border-b-[#FF66C4] border-b-3 focus:border-[#A91079] focus:outline-none ' type="tel" placeholder='Phone' />
                <div>
                  <button className='bg-[#FF66C4] text-[#fff] px-6 py-3 cursor-pointer rounded-sm hover:bg-[#FF66C4]/80 transition'>Book now</button></div>
              </div>
             

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
