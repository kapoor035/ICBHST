"use client"

import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion';

const sdgoals = [
  {
    id: 1,
    pic: '/images/sdgoals/1.png',
  },
  {
    id: 2,
    pic: '/images/sdgoals/2.png',
  },
  {
    id: 3,
    pic: '/images/sdgoals/3.png',
  },
  {
    id: 4,
    pic: '/images/sdgoals/4.png',
  },
  {
    id: 18,
    pic: '/images/sdgoals/18.jpeg',
  },
  {
    id: 5,
    pic: '/images/sdgoals/5.png',
  },
  {
    id: 6,
    pic: '/images/sdgoals/6.png',
  },
  {
    id: 7,
    pic: '/images/sdgoals/7.png',
  },
  {
    id: 8,
    pic: '/images/sdgoals/8.png',
  },
  {
    id: 18,
    pic: '/images/sdgoals/18.jpeg',
  },
  {
    id: 9,
    pic: '/images/sdgoals/9.png',
  },
  {
    id: 10,
    pic: '/images/sdgoals/10.jpg',
  },

  {
    id: 11,
    pic: '/images/sdgoals/11.png',
  },
  {
    id: 12,
    pic: '/images/sdgoals/12.png',
  },
  {
    id: 18,
    pic: '/images/sdgoals/18.jpeg',
  },
  {
    id: 13,
    pic: '/images/sdgoals/13.png',
  },
  {
    id: 14,
    pic: '/images/sdgoals/14.png',
  },
  {
    id: 15,
    pic: '/images/sdgoals/15.png',
  },
  {
    id: 16,
    pic: '/images/sdgoals/16.jpg',
  },
  {
    id: 17,
    pic: '/images/sdgoals/17.png',
  },
  {
    id: 18,
    pic: '/images/sdgoals/18.jpeg',
  }
]

const aboutText = "As we embark on the concepts of Viksit Bharat 2047 as put forward by the Honorable Prime Minister, Mr Narendra Modi, we owe the next generation of citizens a sustaining, economy that aligns with a healthy climate and compassionate human development. We are proposing multiple panels with speakers representing diverse industry, political and academic viewpoints. At the end of the conclave, the Conveners will develop a Consensus Document, which will be submitted to Niti Aayog and Published as an Editorial in Journal."

const introText = "Current economic models have long relied on production and consumption, while inputs like generated waste, environmental and resource sustainability, and human resource development have been less emphasized. With the circular economy, we have an imperative to minimize material waste, reuse materials, promote resource and energy efficiency, and develop a regenerative economic model. All the while recognizing the importance of human development.  In this Conclave, we will bring together important thought leaders from different domains to share and deliberate how we can drive transformation towards a sustainable, equitable and circular economic future."

function* infiniteImages(images: string | any[]) {
  let index = 0;
  while (true) {
    yield images[index % images.length];
    index++;
  }
}

const imagesGenerator = infiniteImages(sdgoals);

const About = () => {

  const slidingAnimation = {
    animate: {
      x: [0 * sdgoals.length, -100 * sdgoals.length],
    },
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 50,
      },
    },
  };

  return (
    <div className='overflow-hidden' id='Introduction'>
      <div className='bg-[url(/images/bg/white-bg.webp)] bg-cover bg-no-repeat px-4 sm:px-8 md:px-16 md:pb-16 flex flex-col justify-center items-center gap-4'>
        <motion.div className='flex' {...slidingAnimation}>
          {Array.from({ length: sdgoals.length * 30 }).map((_, i) => {
            const image = imagesGenerator.next().value;
            return <Image key={i} src={image.pic} alt='Goals' width={75} height={75} />;
          })}
        </motion.div>
        <div className='w-full h-full flex justify-center items-center'>
          <Image className='' src={'/images/graphics/about-banner.png'} alt="about-banner" width={1000} height={1000} />
        </div>
        <div className='flex flex-col gap-4'>
          {/* <div className='flex gap-2'>
            <div className='px-1 bg-secondaryBg'></div>
            <h2 className='text-3xl font-black'>International Circular Economy Conclave 2024</h2>
          </div> */}
          <p className='text-base md:text-lg font-light text-justify'>{introText}</p>
        </div>
      </div>
      <div className='px-4 sm:px-8 md:px-16 py-12 md:p-16 text-center text-white bg-secondaryBg flex flex-col justify-center items-center gap-4'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-black'>About the Conclave</h2>
        <p className='text-base md:text-lg font-normal text-justify'>{aboutText}</p>
      </div>
    </div>
  )
}

export default About