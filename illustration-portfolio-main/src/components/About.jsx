import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row items-center py-12" id="about">
      <motion.div
        className="lg:w-1/2 w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2 w-full text-gray-300"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 font-semibold text-white">
          About <span className="text-accent font-extrabold">Me</span>
        </h2>

        <p className="text-[--muted] text-sm lg:text-base mt-5 lg:mt-8">
          I’m <span className="text-white font-semibold">Sreepathi G Mahaswi</span>, a final-year B.Tech Computer Science student
          passionate about software engineering, cloud computing, and data-driven development. I enjoy transforming complex ideas into
          user-friendly, scalable solutions.
        </p>

        <p className="text-[--muted] text-sm lg:text-base mt-3 lg:mt-5">
          Proficient in <span className="text-white font-medium">Java, Python, and Kotlin</span>, I work with tools like
          <span className="text-white font-medium"> AWS Cloud, Android Studio, Google Colab</span> and have a strong foundation in
          <span className="text-white font-medium"> data structures, algorithms, and machine learning.</span>
        </p>

        <p className="text-[--muted] text-sm lg:text-base mt-3 lg:mt-5">
          I am driven by curiosity — building practical ML solutions and robust applications that make processes smarter and faster.
        </p>
      </motion.div>
    </div>
  );
}
