import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <>
    <section
    className="bg-indigo-600 hover:bg-indigo-700 mt-2 pt-14 pb-14 shadow-lg text-white relative"
  >
    
    <div className="container mx-auto px-20 relative">
      <h1 className="text-4xl md:text-5xl font-bold">Image Enhancer</h1>
      <p className="mt-4 z-10 relative">
        The Image Enhancer is a powerful AI tool that intelligently enhances
        the quality and appearance of images. Using advanced algorithms, it
        can improve sharpness, color vibrancy, and overall visual clarity,
        making images look their best. Whether it's for photography, design,
        or any application, the Image Enhancer effortlessly transforms
        ordinary images into stunning, high-quality visuals with just a click.
      </p>
    </div>
    <Image
      src='/banner.png'
      alt="banner"
      width='300'
      height='80'
      className='absolute right-28 top-0 opacity-30'
    />
  </section>
  </>
  )
}

export default Banner