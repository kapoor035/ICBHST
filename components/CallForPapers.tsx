"use client";

import React from "react";
import { motion } from "framer-motion";

const CallForPapers = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-secondaryBg text-white py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Call for Papers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Call for Papers - Submit your original research and be part of the
            global dialogue on Trusted Networks, Intelligent Systems, and Secure
            Innovation.
          </p>
        </div>
      </motion.div>

      <div className="bg-white text-gray-800 py-20 px-4">
        <div className="container mx-auto">
          {/* Guidelines Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto border border-gray-400 rounded-xl p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Submission Guidelines
            </h2>
            <p className="text-lg mb-12">
              Researchers, academicians, and professionals are invited to submit
              their research abstracts and full papers for oral and poster
              presentations. Selected presentations will be appreciated with
              Cash Awards under &ldquo;Best Paper Category&rdquo; and
              &ldquo;Outstanding Research Category&rdquo;.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4">
                  Submission Requirements
                </h3>
                <ul className="text-left list-none space-y-2">
                  <li>• Original, unpublished research</li>
                  <li>• High-quality academic content</li>
                  <li>• Follow conference format guidelines</li>
                  <li>• Peer-review process</li>
                </ul>
              </div>

              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4">
                  Presentation Formats
                </h3>
                <ul className="text-left list-none space-y-2">
                  <li>• Oral presentations</li>
                  <li>• Poster presentations</li>
                  <li>• Panel discussions</li>
                  <li>• Interactive sessions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Submission Timeline
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative p-6 text-center"
                >
                  <div className="text-3xl font-bold text-gray-300 mb-4">
                    {index}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {index === 1
                      ? "Abstract Submission Deadline"
                      : index === 2
                      ? "Notification of Acceptance"
                      : "Full Paper Submission Deadline"}
                  </h3>
                  <p className="text-gray-600">
                    {index === 1
                      ? "September 25, 2025"
                      : index === 2
                      ? "January 5, 2026"
                      : "January 20, 2026"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Topics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto mt-20"
          >
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Research Topics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "NETWORKS & SECURITY",
                "INTELLIGENT SYSTEMS & AI",
                "INNOVATION & SUSTAINABILITY",
              ].map((title, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-[#db4e1a]/30 hover:bg-[#db4e1a]/[0.05]"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    {title}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {title === "NETWORKS & SECURITY" && (
                      <>
                        <li>• Secure Communication Protocols</li>
                        <li>
                          • Blockchain and Distributed Ledger Technologies
                        </li>
                        <li>• Cybersecurity in IoT and Edge Networks</li>
                        <li>
                          • Privacy-Preserving Systems and Data Protection
                        </li>
                        <li>
                          • Network Resilience and Fault-Tolerant Architectures
                        </li>
                        <li>• Trust Management in Decentralized Systems</li>
                        <li>• Quantum-Safe Cryptography</li>
                        <li>• Ethical Hacking and Threat Analysis</li>
                      </>
                    )}
                    {title === "INTELLIGENT SYSTEMS & AI" && (
                      <>
                        <li>• Explainable and Ethical AI</li>
                        <li>• AI for Cybersecurity and Threat Detection</li>
                        <li>• Machine Learning for Network Optimization</li>
                        <li>• Smart Cities and Intelligent Infrastructure</li>
                        <li>• Autonomous Systems and Robotics</li>
                        <li>• AI Governance and Accountability</li>
                        <li>• Human-Centered AI Design</li>
                        <li>• AI-Driven Decision Support Systems</li>
                      </>
                    )}
                    {title === "INNOVATION & SUSTAINABILITY" && (
                      <>
                        <li>• Green and Energy-Efficient Networking</li>
                        <li>• Sustainable AI and Edge Computing</li>
                        <li>• Digital Inclusion and Access in Technology</li>
                        <li>
                          • Policy, Governance, and Standards for Trusted
                          Systems
                        </li>
                        <li>• Societal Impacts of Intelligent Systems</li>
                        <li>
                          • Interdisciplinary Approaches in Technology
                          Innovation
                        </li>
                        <li>• Secure and Transparent Digital Economies</li>
                        <li>
                          • Technology for Social Good and Community Empowerment
                        </li>
                      </>
                    )}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publication and Indexing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-20 text-center"
          >
            <h2 className="text-3xl font-semibold mb-8">
              Publication and Indexing
            </h2>
            <p className="text-lg mb-12">
              All presented papers will be published in the Abstract Book by the
              Department of Fashion Design, Manipal University Jaipur. Selected
              high-quality papers will be eligible for publication in Scopus
              journals following a rigorous peer review process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#db4e1a] text-white hover:bg-[#db4e1a]/90 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Abstract Book
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                Scopus Journals
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CallForPapers;
