"use client";

import React from "react";
import Image from "next/image";
import { menu } from "@/components/constants";
import Link from "next/link";
import { CounterAPI } from "counterapi";
import { useEffect, useState } from "react";

const Footer = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const counter = new CounterAPI();

  useEffect(() => {
    counter.up("circon24.com", "circon24").then((res) => {
      setTotalVisitors(res.Count as number);
    });
  }, []);

  const getMenuLink = (item: any) => {
    // If item has dropdown, use first dropdown item's link
    if (item.dropdownItems && item.dropdownItems.length > 0) {
      return item.dropdownItems[0].link;
    }
    return item.link;
  };

  return (
    <footer className="flex flex-col justify-center md:items-center gap-4 bg-black text-white px-4 py-8 sm:px-8 md:px-16">
      {/* <div className='flex justify-start items-center gap-4 mb-4'>
        <p className='text-sm font-semibold'>Total Visitors: <span className='p-1 border-white'>{totalVisitors}</span></p>
      </div> */}
      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-16 mb-4">
        {menu.map((item) => (
          <Link
            key={item.id}
            href={getMenuLink(item)}
            target={item.newTab ? "_blank" : "_self"}
            className="font-medium hover:underline transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Image
          src={"/images/logo/muj-logo-icon.png"}
          alt="TrustNet'26"
          width={50}
          height={50}
        />
        <Link href="https://sdcmuj.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src={"/images/logo/sdc-logo-white.png"}
            alt="TrustNet'26"
            width={75}
            height={50}
          />
        </Link>
      </div>
      <div className="">
        <p className="text-sm text-gray-300 font-light">
          &copy; 2025 All Rights Reserved by Software Development Centre, CSE,
          MUJ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
