import React from 'react'
import Image from 'next/image'

interface BannerProps {
  title:string,
  description:string
}
const Banner: React.FC<BannerProps> = ({title,description}) => {
  return (
    <>
    <section
    className="bg-indigo-600 mt-2 pt-14 pb-14 shadow-lg text-white relative"
  >
    
    <div className="container mx-auto px-20 relative">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <p className="mt-4 z-10 relative text-justify">
        {description}
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