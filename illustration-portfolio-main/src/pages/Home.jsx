import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div id="home" className="mt-24">
      <div className="flex justify-between items-center px-5 lg:px-28 flex-col lg:flex-row gap-6">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-3xl lg:text-5xl font-semibold leading-tight">
            <div className="mb-2">Hello,</div>
            <div className="mb-2">
              <TypeAnimation
                sequence={['I am Sreepathi G Mahaswi', 1500]}
                speed={40}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
            <div className="text-white font-extrabold text-3xl lg:text-4xl">Software Engineer • Cloud • ML</div>
          </div>

          <p className="text-[--muted] mt-6 max-w-xl">
            Final-year B.Tech Computer Science student with strong skills in analytics, software development, and cloud technologies.
            Proficient in Java and experienced with data structures, algorithms, and machine learning. I build reliable, efficient, and
            scalable applications that solve real problems.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <a href="mailto:sreepathimahaswi@gmail.com" className="bg-white text-black px-4 py-2 rounded font-medium">Say Hello</a>
            <div className="flex items-center gap-3">
              {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map((Icon, idx) => (
                <a key={idx} className="p-2 rounded bg-white/5 hover:bg-accent transition-colors" href={idx===1 ? "https://www.linkedin.com/in/sreepathi-g-mahaswi-913651275/" : idx===3 ? "https://github.com/SGMahaswi" : "#"} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img src="/assets/hero-vector.svg" alt="Hero" className="w-full rounded-lg shadow-lg section-surface" />
        </motion.div>
      </div>
    </div>
  );
}
