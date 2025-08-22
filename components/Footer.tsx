"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col gap-1 bg-black text-white px-4 py-4 sm:px-8 md:px-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        {/* Left Column - Convener Details */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-sm font-semibold text-white">
              Dr Amit Garg (Convener)
            </h4>
            <a
              href="tel:+91-9897260563"
              className="text-sm text-gray-300 hover:text-white"
            >
              +91-9897260563
            </a>
            <a
              href="mailto:amit.garg@jaipur.manipal.edu"
              className="text-sm text-gray-300 hover:text-white"
            >
              amit.garg@jaipur.manipal.edu
            </a>
          </div>
          <div className="flex flex-col gap-0.5">
            <h4 className="text-sm font-semibold text-white">
              Dr Shishir Singh Chauhan (Convener)
            </h4>
            <a
              href="tel:+91-7905307175"
              className="text-sm text-gray-300 hover:text-white"
            >
              +91-7905307175
            </a>
            <a
              href="mailto:shishir.chauhan@jaipur.manipal.edu"
              className="text-sm text-gray-300 hover:text-white"
            >
              shishir.chauhan@jaipur.manipal.edu
            </a>
          </div>
        </div>

        {/* Center Column - Logos */}
        <div className="flex items-center gap-6">
          <Image
            src={"/images/logo/muj-logo-icon.png"}
            alt="MUJ Logo"
            width={50}
            height={50}
          />
          <Link
            href="https://sdcmuj.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/logo/sdc-logo-white.png"}
              alt="SDC Logo"
              width={75}
              height={50}
            />
          </Link>
        </div>

        {/* Right Column - Footer Logo */}
        <div>
          <Image
            src={"/images/graphics/footer-logo.png"}
            alt="Footer Logo"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Separator and Credits */}
      <div className="mt-1 pt-1 border-t border-gray-400">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-300 font-light">
            &copy; 2025 All rights reserved.
          </p>
          <p className="text-sm text-gray-400">Developed by - SDC Web Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
