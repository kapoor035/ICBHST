import React from 'react';
import Image from 'next/image';
import { Belanosima } from "next/font/google";

const belanosima = Belanosima({
    subsets: ["latin"],
    weight: ['400', '600'],
});

const Hero = () => {

    return (
        <div className='relative overflow-hidden'>
            <video autoPlay loop muted className='w-full h-screen object-cover z-0'>
                <source src='/videos/hero-video.mp4' type='video/mp4' height={500} />
            </video>

            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
            <div className='px-4 text-center absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                <div className='-mt-80 md:-mt-24 sm:px-16'>
                    <Image className='w-[700px] ' src={'/images/graphics/hero-image.png'} alt='CirCon-24' width={1024} height={512} />
                </div>
            </div>

        </div>
    )
}

export default Hero