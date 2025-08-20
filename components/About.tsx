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

const aboutText = "TrustNet will serve as a global platform for distinguished thought leaders from academia, industry, and policy to engage in meaningful dialogue on the future of trusted digital ecosystems. Through a series of keynote sessions, expert panels, and collaborative discussions, participants will critically examine the most pressing challenges and emerging opportunities in secure networks and intelligent systems. These deliberations will not only generate actionable insights but also foster cross-sector collaboration. The outcomes will be consolidated into a Consensus Document by the Conveners, capturing the collective vision and recommendations, which will be shared with leading national and international institutions and disseminated through reputed academic and policy publications."

const introText = "The rapid advancement of digital technologies has transformed how societies, economies, and governments function. Yet, challenges around trust, security, privacy, and ethical use of intelligent systems remain pressing. With TrustNet 2026 – the International Conference on Trusted Networks and Intelligent Systems – we seek to explore how to build resilient, transparent, and human-centric digital infrastructures. The focus will be on advancing secure communication frameworks, data protection, ethical AI, and trust-enabled networks that align technological progress with societal well-being."

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
      <div className='bg-[url(/images/bg/white-bg.webp)] bg-cover bg-no-repeat px-4 sm:px-8 md:px-16 pb-16 flex flex-col justify-center items-center gap-4'>
        <motion.div className='flex' {...slidingAnimation}>
          {Array.from({ length: sdgoals.length * 30 }).map((_, i) => {
            const image = imagesGenerator.next().value;
            return <Image key={i} src={image.pic} alt='Goals' width={75} height={75} />;
          })}
        </motion.div>
        <div className='w-full h-full flex justify-center items-center'>
          <Image className='' src={'/images/graphics/about-banner1.png'} alt="about-banner" width={1000} height={1000} />
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
        <h2 className='text-xl sm:text-2xl md:text-3xl font-black'>About the Conference</h2>
        <p className='text-base md:text-lg font-normal text-justify'>{aboutText}</p>
      </div>
    </div>
  )
}

export default About