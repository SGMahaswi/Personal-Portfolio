import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 px-5 lg:px-28 py-4 ${hasShadow ? "backdrop-blur-md shadow-lg" : ""}`}
    >
      <div className="flex justify-between items-center">
        <motion.div
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex items-center gap-3"
        >
          <img src="/assets/logo.svg" alt="logo" className="h-8 invert" />
          <div className="text-white font-semibold">Sreepathi G <span className="font-extrabold ml-1">Mahaswi</span></div>
        </motion.div>

        <ul className="hidden lg:flex items-center gap-x-8 text-sm font-medium text-[--muted]">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="group">
              <button onClick={() => scrollToSection(section)} className="hover:text-white">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <div className="h-[2px] bg-transparent group-hover:bg-accent transition-all mt-1"></div>
            </li>
          ))}
          <li>
            <a href="/assets/resume-maha.pdf" download className="relative inline-block px-4 py-2 font-semibold group cursor-enlarge">
              <span className="absolute inset-0 -translate-x-[6px] -translate-y-[6px] bg-accent rounded"></span>
              <span className="relative bg-[#0b0c10] px-3 py-1 border border-white/5 rounded inline-flex items-center gap-2">Resume <TbDownload /></span>
            </a>
          </li>
        </ul>

        <button className="lg:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-[#0b0c10] z-50"
          >
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}><HiX size={28} /></button>
            <ul className="flex flex-col items-start mt-28 ml-8 gap-y-6 text-xl font-semibold">
              {["about", "skills", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button onClick={() => scrollToSection(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</button>
                </li>
              ))}
              <li>
                <a href="/assets/resume-maha.pdf" download className="mt-4 inline-block px-4 py-2 border rounded">Download Resume</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
