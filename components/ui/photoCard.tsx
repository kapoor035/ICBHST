import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

interface PhotoCardProps {
  profileimage: string;
  fullName: string;
  des: string;
}

const PhotoCard = ({ profileimage, fullName, des }: PhotoCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg border-2 border-secondaryBg">
        <Image
          src={profileimage}
          alt={fullName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-lg">{fullName}</h3>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 bg-black rounded-sm flex items-center justify-center hover:bg-secondaryBg transition-colors duration-200"
        >
          <Linkedin size={12} className="text-white" />
        </a>
      </div>
      <p className="text-gray-700 text-sm">{des}</p>
    </div>
  );
};

export default PhotoCard;
