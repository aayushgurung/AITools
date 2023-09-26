import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-light mt-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className='pl-20'>
          <Image src="/logo.png" alt="Logo"  width = "120" height="80"/>
        </Link>
 
        <div className="flex items-center space-x-10 mr-20">
          <Link href="#" className="text-gray-600 hover:text-black">Image</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Audio</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Text</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar