import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Age Calculator App",
    description: "Android app to calculate user age from birth date. Built with Kotlin & Android SDK.",
    image: "/assets/project-age.png",
    link: "https://github.com/SGMahaswi/FindMyAge"
  },
  {
    id: 2,
    title: "Resume Screening (AI + Data Mining)",
    description: "ML model for intelligent resume screening to improve shortlisting efficiency (87% accuracy).",
    image: "/assets/project-resume.png",
    link: "https://github.com/SGMahaswi/Resume-Screening-using-data-mining-and-ML-Algorithms"
  },
  {
    id: 3,
    title: "Palm Tree Detection (Deep Learning)",
    description: "Deep learning model to detect palm trees from aerial images — achieved high F1-score.",
    image: "/assets/project-palm.png",
    link: "https://github.com/SGMahaswi/Palm-tree-detection-using-Deep-learning"
  },
  {
    id: 4,
    title: "AI Optimized Disease Diagnosis",
    description: "Generative AI approach for improved disease diagnosis and predictive accuracy.",
    image: "/assets/project-ai.png",
    link: "https://github.com/SGMahaswi/Advanced-Generative-AI-for-optimized-disease-diagnosis"
  }
];

export default function Projects() {
  return (
    <div className="px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-12 mt-8 space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex items-center gap-8 flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 12, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[420px] w-full rounded-2xl overflow-hidden section-surface p-4">
              <img className="w-full h-48 object-cover rounded" src={project.image} alt={project.title} />
            </div>

            <div className="lg:w-1/2 w-full">
              <h3 className="text-accent font-extrabold text-3xl">{String(project.id).padStart(2, "0")}</h3>
              <h2 className="font-semibold text-white text-2xl lg:text-3xl mt-2">{project.title}</h2>
              <p className="text-[--muted] mt-3">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-white">
                View Code <TbExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
