import React from 'react'
import Image from 'next/image'

const PhotoCard = ({profileimage, fullName, des}: {profileimage: string, fullName: string, des: string}) => {
    return (
        <div className='py-16 flex flex-col justify-center items-center'>
            <Image className='w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-full border-[6px] border-secondaryBg' src={profileimage} alt='Image' width={256} height={256} priority />
            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mt-8'>{fullName}</h3>
            <p className='text-base lg:text-lg mt-2'>{des}</p>
        </div>
    )
}

export default PhotoCard