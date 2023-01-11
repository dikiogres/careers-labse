import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-gray-300'>
    <div className='container mx-auto px-4 sm:px-6 py-4'>
      <Link href='/' className='font-bold md:text-2xl hover:text-gray-600'>
        LABSE
      </Link>
    </div>
  </header>
  )
}

export default Header