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
              Cash Awards under "Best Paper Category" and "Outstanding Research
              Category".
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
        </div>
      </div>
    </>
  );
};

export default CallForPapers;
