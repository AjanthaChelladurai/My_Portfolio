import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto mt-8 bg-[#0a1a2f] p-10 rounded-xl text-white transform transition-transform duration-500 hover:scale-105 "
    >
      <h2 className="text-2xl font-bold mb-6">Education</h2>

      {/* University */}
      <div className="mb-6 border-l-4 border-blue-500 pl-5">
        <h3 className="text-lg font-semibold">
          SASTRA Deemed to be University
        </h3>
        <p className="text-gray-300 text-sm">
          Thanjavur, India
        </p>

        <div className="mt-3 text-gray-300">
          <p>
            <span className="text-blue-400 font-medium">
              M.Sc. Computer Science
            </span>{" "}
            (2023 – 2025)
          </p>
          <p>CGPA: <span className="text-white">8.8 / 10</span></p>

          <p className="mt-2">
            <span className="text-blue-400 font-medium">
              B.Sc. Computer Science
            </span>{" "}
            (2020 – 2023)
          </p>
          <p>CGPA: <span className="text-white">7.5 / 10</span></p>
        </div>
      </div>

      {/* School */}
      <div className="border-l-4 border-cyan-500 pl-5">
        <h3 className="text-lg font-semibold">
          St. Joseph’s Higher Secondary School
        </h3>
        <p className="text-gray-300 text-sm">
          Kumbakonam
        </p>

        <div className="mt-3 text-gray-300">
          <p>HSC: <span className="text-white">82.33%</span></p>
          <p>SSC: <span className="text-white">94%</span></p>
        </div>
      </div>
    </motion.div>
  );
}
