"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050816] overflow-hidden text-white border-t border-cyan-500/10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-16">
        
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Open to opportunities, collaborations, and exciting tech conversations.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300 mb-10">
            
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <span>sarthakbhagwat314@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+91 9834146845</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Nagpur,Maharashtra</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-10">
            
            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition"
            >
              <FaGithub className="text-2xl" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href="https://linkedin.com/in/sarthak-bhagwat-9b0a00385"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition"
            >
              <FaLinkedinIn className="text-2xl" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href="mailto:sarthakbhagwat314@gmail.com"
              className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition"
            >
              <FaEnvelope className="text-2xl" />
            </motion.a>
          </div>

          {/* Footer Text */}
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;