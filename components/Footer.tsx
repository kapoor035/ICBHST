import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center gap-4 bg-black text-white text-center p-16'>
      <div>
        <Image src={'/images/logo/sdc-logo-white.png'} alt="CirCon'24" width={150} height={50} />
      </div>
      <div className=''>
        <p className='text-sm text-gray-300 font-light'>&copy; 2024 All Rights Reserved by Software Development Centre, CSE, MUJ</p>
      </div>
    </footer>
  )
}

export default Footer