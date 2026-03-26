"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ["About", "Experience", "Projects", "Contact"]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-8 py-3 rounded-full flex items-center gap-8 shadow-lg">

        {/* Logo */}
        <a href="#home" className="text-blue-400 font-semibold tracking-wide">
          YM
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  )
}