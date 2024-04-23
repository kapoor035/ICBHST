import React from 'react'
import Image from 'next/image'

const Banners = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 px-4 py-8 md:p-16'>
      <div>
        <Image src={'/images/banner/banner-1.jpeg'} alt='Banner 1' width={768} height={512} />
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
        <Image src={'/images/banner/banner-2.jpeg'} alt='Banner 2' width={256} height={256} />
        <Image src={'/images/banner/banner-3.jpeg'} alt='Banner 3' width={256} height={256} />
        <Image src={'/images/banner/banner-4.jpeg'} alt='Banner 4' width={256} height={256} />
      </div>
    </div>
  )
}

export default Banners