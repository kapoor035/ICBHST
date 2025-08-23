import Image from "next/image";
import React from "react";

const CommitteeCard = ({ name, des, role, picture }: any) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-4">
        <Image
          className="w-48 h-56 object-cover border-[4px] border-secondaryBg"
          src={picture}
          alt={name}
          width={256}
          height={256}
        />
        <h4 className="bg-secondaryBg text-white px-2 py-1 font-bold -mt-5">
          {name}
        </h4>
        <p className="font-bold">{role}</p>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default CommitteeCard;
