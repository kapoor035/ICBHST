"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaServer,
  FaUserShield,
  FaBrain,
  FaMobileAlt,
  FaClipboardCheck,
  FaUserLock,
  FaEllipsisH,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

interface TrackData {
  title: string;
  topics: string[];
}

const tracksData: TrackData[] = [
  {
    title: "AREA 1: Innovations in Infectious Disease Management",
    topics: [
      "Rapid diagnostics and point-of-care testing",
      "Vaccine development and production",
      "Antimicrobial drug discovery",
      "Genetic engineering for disease resistance",
    ],
  },
  {
    title: "AREA 2: Biotechnology in Cancer Therapeutics & Diagnostics",
    topics: [
      "Gene and cell therapies (CAR-T, gene editing)",
      "Liquid biopsies and molecular diagnostics",
      "Immunotherapy and targeted therapies",
      "Cancer nanomedicine",
    ],
  },
  {
    title: "AREA 3: Biotechnology for Neurological & Cardiovascular Health",
    topics: [
      "Gene and cell therapies for neurodegenerative disorders",
      "Biomarkers for early disease detection",
      "Regenerative approaches for heart tissue",
      "Novel drug delivery systems for the central nervous system",
    ],
  },
  {
    title: "AREA 4: Computational Biology & Omics for Precision Medicine",
    topics: [
      "Genomics and Transcriptomics in Disease",
      "Bioinformatics and Data Integration",
      "Computational Modeling and Systems Biology",
      "Artificial Intelligence and Machine Learning in Biology",
    ],
  },
  {
    title: "AREA 5: Regenerative Medicine & Tissue Engineering",
    topics: [
      "Stem cell research and therapy",
      "3D bioprinting and biofabrication",
      "Biomaterials and scaffolds",
      "Clinical trials in regenerative medicine",
    ],
  },
  {
    title: "AREA 6: Environmental Biotechnology, Human Health, and IPR",
    topics: [
      "Ecotoxicology and human health risks",
      "Emerging pollutants and their health effects",
      "Environmental genomics, microbiome research, and therapeutic potentials",
      "Bioremediation and biotechnological approaches for waste management",
      "Climate change mitigation and health",
      "Green and sustainable manufacturing for health and environment",
      "Intellectual property rights in biotechnology: patents, policies, and strategic innovations",
    ],
  }
];

const getIconForTrack = (index: number) => {
  const icons = [
    FaShieldAlt, // Area 1
    FaServer, // Area 2
    FaUserShield, // Area 3
    FaBrain, // Area 4
    FaMobileAlt, // Area 5
    FaClipboardCheck, // Area 6
    FaUserLock, // Area 7
    FaEllipsisH, // Other Topics
  ];
  const Icon = icons[index] || FaEllipsisH;
  return <Icon className="w-6 h-6 text-[#c84b13]" />; // changed color here
};

const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
};

const Modal = ({ isOpen, onClose, track, icon }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4 mb-6 pr-8">
          {icon}
          <h3 className="text-2xl font-bold text-gray-800">
            {track.title.replace(/AREA \d+: /, "")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {track.topics.map((topic: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-orange-50 p-4 rounded-lg border border-orange-100"
            >
              <p className="text-gray-700">{topic}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tracks = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [ref, isInView] = useInView();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openModal = (index: number) => {
    setSelectedTrack(index);
  };

  const closeModal = () => {
    setSelectedTrack(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col justify-center items-center gap-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black relative pb-3 w-full px-4 md:px-0">
          Conference Tracks
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full px-4"
        >
          {tracksData.map((track, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              onClick={() => openModal(index)}
              className={`
                p-5 rounded-xl transition-all duration-300
                bg-gradient-to-br from-orange-50 to-white
                border border-orange-100
                hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]
                hover:border-orange-200 hover:-translate-y-1
                cursor-pointer relative
                text-left
              `}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  {getIconForTrack(index)}
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">
                    {track.title.replace(/AREA \d+: /, "")}
                  </h3>
                </div>
                <FaChevronDown className="text-[#c84b13] w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedTrack !== null && (
            <Modal
              isOpen={selectedTrack !== null}
              onClose={closeModal}
              track={tracksData[selectedTrack]}
              icon={getIconForTrack(selectedTrack)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tracks;
