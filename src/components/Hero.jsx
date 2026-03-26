"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      {/* 🔵 Animated gradient blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      {/* ✨ MAIN CONTAINER */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">

        {/* 🧠 LEFT SIDE */}
        <div className="flex flex-col justify-center max-w-xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 mb-4 tracking-widest uppercase text-sm"
          >
            Software Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold leading-tight"
          >
            Building things that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              actually matter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 mt-6 text-lg"
          >
            I'm Yusra — a curious problem solver focused on creating impactful, real-world solutions.
          </motion.p>

          {/* 🔥 BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-10"
          >
            <a
              href="#experience"
              className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
            >
              View experience
            </a>

            <a
              href="#contact"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* 🧊 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden lg:flex relative w-[400px] h-[400px] items-center justify-center -ml-12"
        >
          {/* Glow */}
          <div className="absolute w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />

          {/* Glass Card */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 w-[420px] shadow-2xl">

            {/* Terminal dots */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            {/* Fake code */}
            <pre className="text-sm text-slate-300 leading-relaxed font-mono">
{`export default function Developer() {
  return "useful, real-world solutions";
}`}
</pre>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-xs px-3 py-1 rounded-full shadow-lg">
              live
            </div>
          </div>
        </motion.div>
      </div>

      {/* 👇 Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 text-sm animate-bounce">
        scroll ↓
      </div>
    </section>
  )
}