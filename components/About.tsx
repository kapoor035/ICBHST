"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const sdgoals = [
  {
    id: 1,
    pic: "/images/sdgoals/1.png",
  },
  {
    id: 2,
    pic: "/images/sdgoals/2.png",
  },
  {
    id: 3,
    pic: "/images/sdgoals/3.png",
  },
  {
    id: 4,
    pic: "/images/sdgoals/4.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
  {
    id: 5,
    pic: "/images/sdgoals/5.png",
  },
  {
    id: 6,
    pic: "/images/sdgoals/6.png",
  },
  {
    id: 7,
    pic: "/images/sdgoals/7.png",
  },
  {
    id: 8,
    pic: "/images/sdgoals/8.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
  {
    id: 9,
    pic: "/images/sdgoals/9.png",
  },
  {
    id: 10,
    pic: "/images/sdgoals/10.jpg",
  },

  {
    id: 11,
    pic: "/images/sdgoals/11.png",
  },
  {
    id: 12,
    pic: "/images/sdgoals/12.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
  {
    id: 13,
    pic: "/images/sdgoals/13.png",
  },
  {
    id: 14,
    pic: "/images/sdgoals/14.png",
  },
  {
    id: 15,
    pic: "/images/sdgoals/15.png",
  },
  {
    id: 16,
    pic: "/images/sdgoals/16.jpg",
  },
  {
    id: 17,
    pic: "/images/sdgoals/17.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
];

const aboutText =
  "TrustNet will serve as a global platform for distinguished thought leaders from academia, industry, and policy to engage in meaningful dialogue on the future of trusted digital ecosystems. Through a series of keynote sessions, expert panels, and collaborative discussions, participants will critically examine the most pressing challenges and emerging opportunities in secure networks and intelligent systems. These deliberations will not only generate actionable insights but also foster cross-sector collaboration. The outcomes will be consolidated into a Consensus Document by the Conveners, capturing the collective vision and recommendations, which will be shared with leading national and international institutions and disseminated through reputed academic and policy publications.";

const introText =
  "The rapid advancement of digital technologies has transformed how societies, economies, and governments function. Yet, challenges around trust, security, privacy, and ethical use of intelligent systems remain pressing. With TrustNet 2026 – the International Conference on Trusted Networks and Intelligent Systems – we seek to explore how to build resilient, transparent, and human-centric digital infrastructures. The focus will be on advancing secure communication frameworks, data protection, ethical AI, and trust-enabled networks that align technological progress with societal well-being.";

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
        repeatType: "loop",
        duration: 50,
      },
    },
  };

  return (
    <div className="overflow-hidden" id="Introduction">
      <div className="bg-[url(/images/bg/white-bg.webp)] bg-cover bg-no-repeat px-4 sm:px-8 md:px-16 pb-16 flex flex-col justify-center items-center gap-4">
        {/* <motion.div className='flex' {...slidingAnimation}>
          {Array.from({ length: sdgoals.length * 30 }).map((_, i) => {
            const image = imagesGenerator.next().value;
            return <Image key={i} src={image.pic} alt='Goals' width={75} height={75} />;
          })}
        </motion.div> */}

        {/* Replaced motion div with Important Dates banner
        <div className='w-full h-full flex justify-center items-center'>
          <Image src={'/images/graphics/important-dates.png'} alt="important-dates" width={1000} height={1000} />
        </div> */}

        {/* Replaced motion div with Important Dates section */}
        <div className="w-full bg-orange-50 py-4 px-4 md:px-24">
          {/* Container with left alignment for title */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start items-center md:items-start gap-8">
            {/* Left side: Title */}
            <div className="flex-shrink-0 md:pl-0 md:mb-0 w-full md:w-auto text-center md:text-left">
              <div className="rounded-full bg-orange-500 px-8 py-3 text-white font-semibold text-lg shadow-md inline-block">
                Important Dates
              </div>
            </div>

            {/* Right side: Dates */}
            <div className="w-full">
              {/* Date Items Container */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                <div className="flex items-center gap-4">
                  <div className="text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-base font-semibold whitespace-nowrap">
                      Call for Paper
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      20 September, 2025
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-base font-semibold">
                      Submission
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      25 December, 2025
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-base font-semibold">
                      Acceptance
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      5 January, 2026
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-base font-semibold">
                      Registration
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      20 January, 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <Image
            className=""
            src={"/images/graphics/about-banner.png"}
            alt="about-banner"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-4">
          {/* <div className='flex gap-2'>
            <div className='px-1 bg-secondaryBg'></div>
            <h2 className='text-3xl font-black'>International Circular Economy Conclave 2024</h2>
          </div> */}
          <p className="text-base md:text-lg font-light text-justify">
            {introText}
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 py-12 md:p-16 text-center text-white bg-secondaryBg flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black">
          About the Conference
        </h2>
        <p className="text-base md:text-lg font-normal text-justify">
          {aboutText}
        </p>
      </div>
    </div>
  );
};

export default About;
