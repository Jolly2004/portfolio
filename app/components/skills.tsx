"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaCloud,
  FaBrain,
  FaTools,
  FaDatabase,
} from "react-icons/fa";

import { BsLightningCharge } from "react-icons/bs";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    icon: <BsLightningCharge />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "JWT",
      "API Integration",
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      "MongoDB",
      "MySQL",
      "Database Design",
      "Optimization",
      "Firebase",
      "SQL Queries",
    ],
  },
  {
    title: "Cloud & AI",
    icon: <FaCloud />,
    skills: [
      "AWS",
      "OpenAI API",
      "AI Integration",
      "Cloud Deployment",
      "Lambda",
      "DynamoDB",
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "AI/ML",
    icon: <FaBrain />,
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "AI Models",
      "Data Analysis",
      "Python",
      "Machine Learning",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="relative bg-[#050816] py-28 px-6 lg:px-20 overflow-hidden text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills across
            frontend, backend, cloud, and AI domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group relative border border-cyan-500/20 rounded-[28px] bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400 transition duration-300 overflow-hidden"
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-purple-500/10" />

              {/* Header */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="text-cyan-400 text-4xl">
                  {category.icon}
                </div>

                <h3 className="text-3xl font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <ul className="relative z-10 space-y-4">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300 text-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;