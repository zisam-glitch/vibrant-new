"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-full bg-[#FF66C4] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:px-12 px-4 py-8">
          <button 
            className="md:hidden block z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Image src="/shapes/close.svg" alt="Close menu" width={24} height={24} />
            ) : (
              <Image src="/shapes/menu.svg" alt="Open menu" width={24} height={24} />
            )}
          </button>
          
          <div className="z-50">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={120} 
                height={32} 
                className="h-4 md:h-5 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-white">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/subscription">Subscription Box</NavLink>
              <NavLink href="/consulting-services">Consulting Services</NavLink>
            </ul>
          </nav>

          <button className="md:hidden block z-50">
            <Image src="/shapes/cart.svg" alt="Cart" width={24} height={24} />
          </button>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-0 bg-[#FF66C4] z-40 pt-20 px-4
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:hidden
          `}>
            <ul className="flex flex-col gap-6 text-white text-xl">
              <MobileNavLink 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </MobileNavLink>
              <MobileNavLink 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </MobileNavLink>
              <MobileNavLink 
                href="/subscription" 
                onClick={() => setIsMenuOpen(false)}
              >
                Subscription Box
              </MobileNavLink>
              <MobileNavLink 
                href="/consulting-services" 
                onClick={() => setIsMenuOpen(false)}
              >
                Consulting Services
              </MobileNavLink>
             
            </ul>
          </div>
        </div>

        <Image
          src="/shapes/header.svg"
          alt="Header Decoration"
          className="w-full absolute z-10 2xl:hidden md:block hidden"
          width={1440}
          height={200}
        />
        <Image
          src="/shapes/mobile.svg"
          alt="Header Decoration"
          className="w-full absolute z-10 md:hidden block -mt-[1px]"
          width={375}
          height={100}
        />
      </div>
      
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

// Reusable NavLink component for desktop
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="hover:text-gray-200 transition-colors">
      <Link href={href} className="block py-2">
        {children}
      </Link>
    </li>
  );
}

// Reusable MobileNavLink component
function MobileNavLink({ 
  href, 
  children,
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <li className="border-b border-pink-300 border-opacity-30 py-3">
      <Link 
        href={href} 
        className="block py-2 hover:text-gray-200 transition-colors"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}