import React from 'react'
import Image from 'next/image'

const Banners = () => {
  return (
    <div className='flex justify-center items-center px-4 py-8 md:p-16'>
        <div>
            <Image src={'/images/banner/banner-1.jpeg'} alt='Sustainable Development Goals' width={768} height={512} />
        </div>
    </div>
  )
}

export default Banners