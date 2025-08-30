import React from 'react'

export default function footer() {
  return (
    <div className='bg-[#FFD600]'>
      <div className='md:px-12 px-4 md:pt-24 pt-16 max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1fr_2fr] grid-cols-1 md:gap-20 gap-10'>
        <div className='flex flex-col gap-6'>
          <h4 className='text-xl  text-[#FF66C4]'>Vibrant Minds</h4>
          <p className='text-sm text-[#737373]'>Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus magnis arcu vehicula nascetur feugiat</p>
          <div className='flex gap-4 md:pt-4 pt-0'>
            <a href=""><img src="icon/x.svg" alt="" /></a>
            <a href=""><img src="icon/facebook.svg" alt="" /></a>
            <a href=""><img src="icon/instagram.svg" alt="" /></a>
            <a href=""><img src="icon/linkdin.svg" alt="" /></a>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h4 className='text-xl  text-[#FF66C4]'>Our Services</h4>
          <ul className='text-sm list-none text-[#737373] flex flex-col gap-2'>
            <li>Online class</li>
            <li>Baby care</li>
            <li>Shop</li>
            <li>Kids Playzone</li>
            <li>Nurse</li>
          </ul>

        </div>
        <div className='flex flex-col gap-6'>
          <h4 className='text-xl text-[#FF66C4]'>Useful links</h4>
          <ul className='text-sm list-none text-[#737373] flex flex-col gap-2'>
            <li>About us</li>
            <li>Our team</li>
            <li>Privacy policy</li>
            <li>Contact us</li>
            <li>Terms of service</li>
          </ul>

        </div>
        <div className='flex flex-col gap-6'>
          <h4 className='text-xl  text-[#FF66C4]'>Newsletter</h4>
          <p className='text-sm text-[#737373]'>Aplications prodize before front end ortals visualize front end</p>
          <div className='flex flex-col gap-3'>
            <input className='p-2 rounded-sm border border-[#737373] focus:outline-none' type="email" placeholder='Enter your email' />
            <button className='bg-[#FF66C4] text-[#fff] px-6 py-2 cursor-pointer rounded-sm hover:bg-[#FF66C4]/80 transition'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='text-center p-6 mt-6 border-t border-[#FF66C4]'>
        <p> <span className='text-[#FF66C4]'>© 2025 All Rights Reserved. Powered by Vibrant Minds</span></p>
      </div>
    </div>
  )
}
