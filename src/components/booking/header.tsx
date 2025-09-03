import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function header() {
  return (
    <div className='flex items-center justify-center p-8 border-b border-gray-200'>
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
  )
}
