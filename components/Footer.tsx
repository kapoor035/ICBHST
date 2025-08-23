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
              Dr. Amit Garg (Convener)
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
              Dr. Mahesh Jangid (Convener)
            </h4>
            <a
              href="tel:+91-7905307175"
              className="text-sm text-gray-300 hover:text-white"
            >
              +91-9799969068
            </a>
            <a
              href="mailto:mahesh.jangid@jaipur.manipal.edu"
              className="text-sm text-gray-300 hover:text-white"
            >
              mahesh.jangid@jaipur.manipal.edu
            </a>
          </div>
        </div>

        {/* Center Column - Logos */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src={"/images/logo/muj-white-logo.png"}
            alt="MUJ Logo"
            width={290}
            height={200}
          />
          <div className="text-center">
            {/* <h3 className="text-white font-bold mb-1">
              Manipal University Jaipur
            </h3> */}
            <p className="text-sm text-gray-300">
              Dehmi Kalan, Off Jaipur-Ajmer Expressway,
              <br />
              Jaipur, Rajasthan, India-303007
            </p>
          </div>
        </div>

        {/* Right Column - Footer Logo */}
        <div>
          <Image
            src={"/images/graphics/footer-logo.png"}
            alt="Footer Logo"
            width={360}
            height={210}
          />
        </div>
      </div>

      {/* Separator and Credits */}
      <div className="mt-1 pt-1 border-t border-gray-400">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-300 font-light">
            &copy; 2025 All rights reserved.
          </p>
          <Link
            href="https://sdcmuj.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm text-gray-400 flex items-center gap-1">
              Developed by -{" "}
              <Image
                src="/images/logo/sdc-logo-white.png"
                alt="SDC Logo"
                width={30}
                height={20}
              />{" "}
              Web Team
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
