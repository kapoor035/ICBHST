"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Schedule = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <div
      className="px-4 py-12 sm:px-8 md:px-16 md:pb-16 flex flex-col gap-4 justify-center items-center bg-black text-white"
      id="Schedule"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center items-center mb-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase">
          Programme Schedule
        </h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
      >
        {[
          { title: "Call for Papers", date: "20 September 2025" },
          { title: "Submission Deadline", date: "25 December 2025" },
          { title: "Acceptance Notification", date: "5 January 2026" },
          { title: "Registration Deadline", date: "20 January 2026" },
        ].map((scheduleItem, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-xl backdrop-blur-md bg-gradient-to-br from-[#db4e1a]/20 to-[#db4e1a]/10 hover:from-[#db4e1a]/30 hover:to-[#db4e1a]/20 transition-all duration-300 border border-[#db4e1a]/30 hover:border-[#db4e1a]/50 group shadow-lg hover:shadow-[#db4e1a]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#db4e1a]">
              {scheduleItem.title}
            </h3>
            <p className="text-gray-300 group-hover:text-white/90">
              {scheduleItem.date}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Schedule;
