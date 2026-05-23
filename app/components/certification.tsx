"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaTimes } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/aws.jpg",
  },
  {
    title: "Generative AI Certification",
    issuer: "Amazon Web Services",
    image: "/genai.jpg",
  },
  {
    title: "Full Stack Development",
    issuer: "Udemy",
    image: "/udemy.jpg",
  },
];

const Certification: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openCertificate = (image: string) => {
    setSelectedImage(image);
  };

  const closeCertificate = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative bg-[#050816] py-28 px-6 lg:px-20 overflow-hidden text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
            Professional certifications showcasing expertise in cloud,
            AI, development, and modern technologies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[30px] border border-cyan-500/20 bg-white/5 backdrop-blur-md overflow-hidden hover:border-cyan-400 transition duration-300"
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-purple-500/10" />

              {/* Certificate Image */}
              <div className="relative h-[220px] border-b border-cyan-500/20 bg-[#0b1220] flex items-center justify-center">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center text-cyan-400">
                    <FaCertificate className="text-6xl mb-3" />
                    <span className="text-sm text-gray-400">
                      Add Certificate
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {cert.issuer}
                </p>

                <button
                  onClick={() => openCertificate(cert.image)}
                  className="mt-5 w-full py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition text-cyan-400 font-medium"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            {/* Close Button */}
            <button
              onClick={closeCertificate}
              className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400 transition"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage}
              alt="Certificate"
              className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.3)]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certification;