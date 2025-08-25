import React from 'react';

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between md:px-12 px-4 py-8 bg-[#FF66C4]">
        <button className='md:hidden block'>
          <img src="/shapes/menu.svg" alt="" />
        </button>
        <div>
          <img src="/logo.svg" alt="Logo" className="h-4 md:h-5" />
        </div>
        <nav className='md:block hidden'>
          <ul className='flex gap-8 text-white'>
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>Home</li>
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>About Us</li>
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>Subscription Box</li>
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>Consulting Services</li>
          </ul>
        </nav>
        <button className='md:hidden block'>
          <img src="/shapes/cart.svg" alt="" />
        </button>
      </div>
      <img
        src="/shapes/header.svg"
        alt="Header Decoration"
        className="w-full absolute z-9 md:block hidden"
      />
       <img
        src="/shapes/mobile.svg"
        alt="Header Decoration"
        className="w-full absolute z-9 md:hidden block -mt-[1px]"
      />
    </div>
  );
}
