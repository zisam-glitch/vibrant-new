import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full bg-[#FF66C4] ">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:px-12 px-4 py-8 ">
        <button className='md:hidden block'>
          <img src="/shapes/menu.svg" alt="" />
        </button>
        <div>
          <img src="/logo.svg" alt="Logo" className="h-4 md:h-5" />
        </div>
        <nav className='md:block hidden'>
          <ul className='flex gap-8 text-white'>
            <Link href="/">
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>Home</li>
            </Link>
            <Link href="/about">
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>About Us</li>
            </Link>
            <Link href="/subscription">
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>Subscription Box</li>
            </Link>
            <Link href="/consulting-services">
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>Consulting Services</li>
            </Link>
            <Link href="/contact">
            <li className='hover:text-gray-200 transition-colors cursor-pointer'>Contact Us</li>
            </Link>
          </ul>
        </nav>
        <button className='md:hidden block'>
          <img src="/shapes/cart.svg" alt="" />
        </button>
      </div>
      <img
        src="/shapes/header.svg"
        alt="Header Decoration"
        className="w-full absolute z-9 2xl:hidden md:block hidden"
      />
       <img
        src="/shapes/mobile.svg"
        alt="Header Decoration"
        className="w-full absolute z-9 md:hidden block -mt-[1px]"
      />
    </div>
  );
}
