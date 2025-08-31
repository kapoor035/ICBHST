"use client";
import React from "react";
import Image from "next/image";
import { Belanosima } from "next/font/google";
import { useRouter } from "next/navigation";

const belanosima = Belanosima({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden h-[90vh]">
      {/* <Image
        src="/images/bg/hero-section.jpg"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      /> */}

      <video
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover z-0 -mt-16"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" height={500} />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <div className="px-4 text-center absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="-mt-48 md:-mt-32 sm:px-16">
          <Image
            className="w-[700px]"
            src={"/images/graphics/hero-banner.png"}
            alt="CirCon-24"
            width={1024}
            height={512}
          />
        </div>
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => router.push("/registration")}
            className="px-6 py-3 bg-secondaryBg text-white font-bold rounded-full hover:bg-opacity-90 transition-all"
          >
            Register Now
          </button>
          <button
            onClick={() => window.open("https://cmt3.research.microsoft.com/TrustNet2026", "_blank", "noopener,noreferrer")}
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-opacity-90 transition-all"
          >
            Submit Paper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
