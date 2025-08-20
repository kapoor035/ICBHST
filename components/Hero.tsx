import React from "react";
import Image from "next/image";
import { Belanosima } from "next/font/google";

const belanosima = Belanosima({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-[90vh]">
      <Image
        src="/images/bg/hero-section.jpg"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="px-4 text-center absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="-mt-48 md:-mt-16 sm:px-16">
          <Image
            className="w-[700px]"
            src={"/images/graphics/hero-banner.png"}
            alt="CirCon-24"
            width={1024}
            height={512}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
