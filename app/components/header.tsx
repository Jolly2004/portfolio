"use client";
import React from "react";
import { motion } from "framer-motion";
const dots = [
  { top: "10%", left: "15%" },
  { top: "20%", left: "80%" },
  { top: "35%", left: "25%" },
  { top: "50%", left: "70%" },
  { top: "60%", left: "30%" },
  { top: "75%", left: "85%" },
  { top: "90%", left: "10%" },
  { top: "40%", left: "50%" },
  { top: "15%", left: "60%" },
  { top: "80%", left: "45%" },
];
const Header: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#050816] overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/20" />

      {/* Animated Dots */}
      <div className="absolute inset-0 opacity-30">
  {dots.map((dot, i) => (
    <span
      key={i}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
      style={{
        top: dot.top,
        left: dot.left,
      }}
    />
  ))}
</div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-16">
          
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Profile Image */}
              <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border border-cyan-500/30 overflow-hidden bg-[#111827] shadow-[0_0_40px_rgba(0,255,255,0.15)]">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-5 py-2 bg-white/5 backdrop-blur-md mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Welcome to my digital portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <br />
              <span className="text-white">& AI Enthusiast</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
              Building modern web applications with cutting-edge
              technology, AI integration, and cloud solutions.
              <span className="text-cyan-400 font-medium">
                {" "}Passionate about solving real-world problems.
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-10">
              
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg">
                Download Resume
              </button>

              <button className="px-8 py-4 rounded-2xl border border-cyan-500/40 bg-white/5 backdrop-blur-md font-semibold text-lg hover:bg-cyan-500/10 transition">
                View Projects
              </button>

              <button className="px-8 py-4 rounded-2xl border border-purple-500/40 bg-white/5 backdrop-blur-md font-semibold text-lg hover:bg-purple-500/10 transition">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;