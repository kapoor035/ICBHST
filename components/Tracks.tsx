"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaServer,
  FaUserShield,
  FaBrain,
  FaMobileAlt,
  FaClipboardCheck,
  FaUserLock,
  FaEllipsisH,
} from "react-icons/fa";

interface TrackData {
  title: string;
  topics: string[];
}

const tracksData: TrackData[] = [
  {
    title: "AREA 1: APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
    topics: [
      "Information Hiding",
      "Intrusion Detection & Prevention",
      "Network Security",
      "Privacy Enhancing Cryptography",
      "Security Protocols",
      "Sensor and Mobile Ad Hoc Network Security",
      "Wireless Network Security",
    ],
  },
  {
    title: "AREA 2: DISTRIBUTED SYSTEMS AND ARCHITECTURES",
    topics: [
      "Blockchain security",
      "Critical Infrastructure Protection",
      "Peer-to-Peer Security",
      "Security in Distributed Systems",
      "Security Information Systems Architecture",
    ],
  },
  {
    title: "AREA 3: DATA SECURITY AND PRIVACY",
    topics: [
      "Access Control",
      "Anonymity",
      "Biometrics Security and Privacy",
      "Database Security and Privacy",
      "Data Integrity",
      "Ethical and Legal Implications of Security and Privacy",
      "Identity Management",
      "Personal Data Protection for Information Systems",
      "Privacy Enhancing Technologies",
      "Security and Privacy Policies",
    ],
  },
  {
    title: "AREA 4: SECURITY AND AI/MACHINE LEARNING",
    topics: [
      "Adversarial Machine Learning",
      "AI-based Solutions for Security",
      "Attacks on Machine Learning",
      "Secure Federated Learning",
      "Security Vulnerabilities of Large Language Models",
    ],
  },
  {
    title: "AREA 5: SECURITY AND PRIVACY IN EMERGING SCENARIOS",
    topics: [
      "Security and Privacy for Big Data",
      "Security and Privacy in Crowdsourcing",
      "Security and Privacy in IT Outsourcing",
      "Security and Privacy in Location-Based Services",
      "Security and Privacy in Mobile Systems",
      "Security and Privacy in Pervasive/Ubiquitous Computing",
      "Security and Privacy in Smart Grids",
      "Security and Privacy in Social Networks",
      "Security and Privacy in the Cloud",
    ],
  },
  {
    title: "AREA 6: RISKS, POLICIES AND SOFTWARE SECURITY",
    topics: [
      "Formal Methods and Security",
      "Information Systems Auditing",
      "Intellectual Property Protection",
      "Insider Threats and Countermeasures",
      "Organizational Security Policies",
      "Risk Assessment",
      "Secure Software Development Methodologies",
      "Security Verification and Validation",
      "Software Metrics",
    ],
  },
  {
    title: "AREA 7: TRUST MANAGEMENT AND USABILITY",
    topics: [
      "Human factors",
      "Reliability and Dependability",
      "Security Requirements",
      "Security Metrics and Measurement",
      "Security usability",
      "Trust Management and Reputation Systems",
    ],
  },
  //   {
  //     title: "OTHER TOPICS",
  //     topics: [
  //       "Network Defence Tools and Development Platforms",
  //       "Malware Analysis",
  //       "Security and Privacy in Social Networks",
  //       "Security in Space Science",
  //       "Key Management and Distribution",
  //       "Security in Embedded Systems and IoT",
  //       "Cloud and System Security",
  //       "Security-aware Software Engineering",
  //       "Security using Machine Learning",
  //       "Deep Learning",
  //       "Federated Learning",
  //       "Artificial Intelligence",
  //       "Security in Cyber-Physical Systems",
  //       "Security in Blockchain",
  //       "Web and Application Security",
  //       "Security in Biometric Systems",
  //       "Privacy and Trust Management",
  //       "Security Education and Innovative Curriculum",
  //       "Symmetric and Asymmetric Key Cryptography",
  //       "Computational Intelligence Techniques in Security",
  //       "Vehicular and Intelligent System Security",
  //       "Security in Embedded Systems",
  //       "Security Ontology, Models, Protocols & Policies",
  //       "Standards, Guidelines, and Certification",
  //       "Information Assurance, Security, and Public Policy",
  //       "Interoperability, Service Levels, and Quality Issues",
  //     ],
  //   },
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
  return <Icon className="w-6 h-6 text-orange-500" />; // removed mb-3
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

const Tracks = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [ref, isInView] = useInView();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleTracks =
    isMobile || showAll ? tracksData : tracksData.slice(0, 6);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-8 relative pb-3 uppercase">
          Conference Tracks
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {visibleTracks.map((track, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`
                p-6 rounded-xl transition-all duration-300
                bg-gradient-to-br from-orange-50 to-white
                border border-orange-100
                hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]
                hover:border-orange-200 hover:-translate-y-1
                cursor-pointer relative
                overflow-hidden
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-3 mb-4">
                {" "}
                {/* Changed to horizontal layout */}
                {getIconForTrack(index)}
                <h3 className="text-xl font-semibold text-gray-800">
                  {track.title.replace(/AREA \d+: /, "")}
                </h3>
              </div>

              <ul className="space-y-2 relative z-10">
                {track.topics.map((topic, topicIndex) => (
                  <motion.li
                    key={topicIndex}
                    initial={false}
                    animate={{
                      x: hoveredCard === index ? 8 : 0,
                      transition: { delay: topicIndex * 0.03 },
                    }}
                    className="text-gray-600 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    {topic}
                  </motion.li>
                ))}
              </ul>

              <div
                className={`
                  absolute inset-0 bg-gradient-to-br from-orange-100/20 to-transparent
                  transition-opacity duration-300
                  ${hoveredCard === index ? "opacity-100" : "opacity-0"}
                `}
              />
            </motion.div>
          ))}
        </div>

        {!isMobile && tracksData.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-secondaryBg text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tracks;
