import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { CgDatabase } from "react-icons/cg";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Java", icon: <FaJava size={44} /> },
    { id: 2, name: "Kotlin", icon: <FaJava size={44} /> },
    { id: 3, name: "Python", icon: <FaPython size={44} /> },
    { id: 4, name: "SQL", icon: <CgDatabase size={44} /> },
    { id: 5, name: "AWS Cloud", icon: <BiLogoPostgresql size={44} /> },
    { id: 6, name: "Android Studio", icon: <FaJava size={44} /> },
    { id: 7, name: "R (Stats)", icon: <FaPython size={44} /> },
    { id: 8, name: "Data Structures & DSA", icon: <CgDatabase size={44} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Next Generation Club - VIT-AP",
      role: "Lead, PR Team",
      period: "Jan 2025",
      description:
        "Led public relations initiatives and contributed to community outreach and '100 Days of Code'. Developed content and assisted club portal delivery.",
      logo: "/assets/logo.svg",
    },
  ]);

  return (
    <div className="mt-6 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2 className="text-2xl lg:text-4xl text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 text-lg font-medium mt-7 lg:mt-12 place-items-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              className="bg-white/5 border border-white/5 rounded p-4 h-36 w-36 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-sm text-[--muted]">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#0f1115] w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2 className="text-2xl lg:text-4xl text-center text-white" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Experience
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} className="p-5 border border-white/6 rounded-md hover:bg-white/2 transition-all" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: index * 0.12 }} viewport={{ once: true }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={exp.logo} className="w-8 invert" alt="logo" />
                  <div>
                    <h3 className="text-white font-semibold">{exp.role}</h3>
                    <div className="text-[--muted] text-sm">{exp.company}</div>
                  </div>
                </div>
                <div className="text-[--muted] text-sm font-medium">{exp.period}</div>
              </div>
              <p className="text-[--muted] mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
