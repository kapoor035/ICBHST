import React from "react";
import Image from "next/image";

const Publication = () => {
  return (
    <div className="bg-cover bg-no-repeat px-2 sm:px-4 py-16 md:p-16 lg:px-24 text-black">
      <div className="flex flex-col justify-center items-center gap-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black relative pb-3">
          Publication
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
        </h2>
        <p className="max-w-3xl text-center text-gray-700 text-lg">
          The proceedings of TrustNet 2026 will be published in Lecture Notes in
          Networks and Systems (LNNS). LNNS is abstracted and indexed in SCOPUS,
          INSPEC, WTI Frankfurt eG, zbMATH.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image
            src="/images/logo/scopus-logo.png"
            alt="Scopus Logo"
            width={200}
            height={100}
            className="object-contain"
          />
          <Image
            src="/images/logo/springer.png"
            alt="Springer Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Publication;
