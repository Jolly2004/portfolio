"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
  SiTensorflow,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Python", icon: <FaPython /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "AI/ML", icon: <SiTensorflow /> },
  { name: "Database", icon: <FaDatabase /> },
];

const About: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#050816] text-white px-6 lg:px-20 py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-10">
            I'm a passionate{" "}
            <span className="text-cyan-400">
              Full Stack Developer
            </span>{" "}
            and AI enthusiast with a strong foundation in building
            scalable web applications and integrating intelligent
            solutions. I enjoy creating innovative applications that
            solve real-world problems.
          </p>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            My journey combines continuous learning with technical
            expertise. I'm especially excited about{" "}
            <span className="text-cyan-400">
              Cloud, AI/ML, MERN stack development
            </span>{" "}
            and building impactful products.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            
            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400 transition">
              <h3 className="text-5xl font-bold text-cyan-400">
                3+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects Completed
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400 transition">
              <h3 className="text-5xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400 transition">
              <h3 className="text-5xl font-bold text-cyan-400">
                4
              </h3>
              <p className="text-gray-400 mt-2">
                Certifications
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400 transition">
              <h3 className="text-5xl font-bold text-cyan-400">
                Fresher
              </h3>
              <p className="text-gray-400 mt-2">
                Ready to Work
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE TECH STACK */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[40px] border border-cyan-500/30 bg-white/5 backdrop-blur-lg p-10 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
            
            <div className="text-center">
              <div className="text-6xl mb-5">💻</div>

              <h3 className="text-4xl font-bold text-cyan-400">
                Tech Stack
              </h3>

              <p className="text-gray-400 mt-3 text-lg">
                MERN • Cloud • AI/ML • Backend
              </p>
            </div>

            {/* Tech Logos */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-10">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl border border-cyan-500/20 bg-[#0f172a]/50 hover:border-cyan-400 transition cursor-pointer"
                >
                  <div className="text-4xl text-cyan-400">
                    {tech.icon}
                  </div>

                  <p className="text-sm text-gray-300 mt-2 text-center">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;