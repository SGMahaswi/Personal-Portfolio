import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#060608] px-5 lg:px-28 py-6 flex flex-col lg:flex-row items-center justify-between mt-16 border-t border-white/4'>
      <div className='flex items-center gap-3'>
        <img className='h-8 invert' src="/assets/logo.svg" alt="logo" />
        <div className='text-white font-semibold'>Sreepathi G <span className='font-extrabold'>Mahaswi</span></div>
      </div>

      <div className='text-white lg:font-semibold text-sm text-right mt-4 lg:mt-0'>
        <p>@ 2025 Sreepathi G Mahaswi</p>
        <p>Built with ❤️ • React + Tailwind + Framer Motion</p>
      </div>
    </footer>
  )
}
