import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row gap-8'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[45%] w-full'
        >
          <form className='w-full space-y-3 lg:space-y-5' onSubmit={(e)=>{e.preventDefault(); alert("Form sending is not configured. Use email: sreepathimahaswi@gmail.com");}}>
            <input className='bg-white/3 border border-white/6 px-5 py-3 rounded placeholder:text-[--muted] text-sm w-full' type="text" placeholder='Your name' required />
            <input className='bg-white/3 border border-white/6 px-5 py-3 rounded placeholder:text-[--muted] text-sm w-full' type="email" placeholder='Email' required />
            <input className='bg-white/3 border border-white/6 px-5 py-3 rounded placeholder:text-[--muted] text-sm w-full' type="text" placeholder='Your website (If exists)' />
            <textarea className='resize-none bg-white/3 border border-white/6 px-5 py-3 h-36 rounded text-sm w-full' placeholder='How can I help?*'></textarea>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                type='submit'
                className='bg-accent justify-center w-full lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium cursor-enlarge'
              >
                Get In Touch
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                <a href="mailto:sreepathimahaswi@gmail.com" className="bg-white/5 p-2 lg:p-3 rounded border border-white/6"><BiLogoGmail /></a>
                <a href="https://www.linkedin.com/in/sreepathi-g-mahaswi-913651275/" target="_blank" rel="noreferrer" className="bg-white/5 p-2 lg:p-3 rounded border border-white/6"><IoLogoLinkedin /></a>
                <a href="https://github.com/SGMahaswi" target="_blank" rel="noreferrer" className="bg-white/5 p-2 lg:p-3 rounded border border-white/6"><BsGithub /></a>
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2 w-full'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px rgba(0,0,0,0.6)' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[--muted] text-sm lg:text-base mt-3 lg:mt-6'>I enjoy crafting high-engaging, user-friendly, and memorable interactive experiences. Open to internships & roles in software engineering and ML.</p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <a className='flex items-center gap-2 group' href="mailto:sreepathimahaswi@gmail.com">
              <span className='rounded-full p-1 border border-white/6'><IoMdMail className="w-5 h-5" /></span>
              sreepathimahaswi@gmail.com
            </a>

            <a className='flex items-center gap-2 group' href="tel:+919948396354">
              <span className='rounded-full p-1 border border-white/6'><FaPhone className="w-4 h-4" /></span>
              +91 9948396354
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
