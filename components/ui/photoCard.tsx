import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface PhotoCardProps {
  profileimage: string;
  fullName: string;
  des: string;
  linkedin?: string;
  website?: string;
}

const PhotoCard = ({
  profileimage,
  fullName,
  des,
  linkedin,
  website,
}: PhotoCardProps) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] border-2 border-[#c84b13] rounded-lg">
        <Image
          src={profileimage}
          alt={fullName}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-3 text-center w-full px-2 flex flex-col flex-grow">
        <h3 className="font-semibold text-sm sm:text-base truncate">
          {fullName}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm min-h-[2.5em] leading-tight">
          {des}
        </p>
        <div className="flex items-center justify-center gap-4 mt-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c84b13] hover:text-[#a03a0d] transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c84b13] hover:text-[#a03a0d] transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
