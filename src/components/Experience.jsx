"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Experience() {
  const [activeRole, setActiveRole] = useState("honeywell")

  const experiences = {
    honeywell: {
      title: "Software Engineer Intern",
      company: "Honeywell",
      location: "Sydney, NSW",
      date: "July 2024 — Dec 2024 (Full Time)",
      details: [
        <>
          Built a <strong>C++ authoring and validation tool</strong> for Electronic Work Instructions, expanding the system to <strong>continuous process industry customers</strong> for the first time.
        </>,
        <>
          Developed a <strong>data transformation and validation pipeline</strong> with UX-reviewed error handling, fully <strong>automating a previously manual approval workflow</strong>.
        </>,
        <>
          Led <strong>end-to-end integration testing</strong> across 8 functional areas in virtualised <strong>Experion PKS</strong> environments, validating <strong>system integrity and real-time operator workflows</strong>.
        </>,
        <>
          Developed <strong>Python and C++ tooling</strong> to generate configurable <strong>time-series industrial data</strong> for long-running simulations, used in a <strong>high-visibility global user group demo</strong>.
        </>,
        <>
          Integrated <strong>Python analytics</strong> into a <strong>RabbitMQ pipeline</strong> for real-time sensor fault detection and automatic parameter tuning, contributing to a <strong>research prototype for a Fortune 500 energy client</strong>.
        </>,
        <>
          Worked in a <strong>cross-functional Agile team</strong> across frontend, backend and UX, presenting technical deliverables in sprint reviews.
        </>
      ]
    },

    elead: {
      title: "Marketing Coordinator",
      company: "E-Lead",
      location: "Sydney, NSW",
      date: "March 2023 — Dec 2023",
      details: [
        <>
          Coordinated <strong>marketing</strong> for various E-lead programs, ensuring consistent brand representation.
        </>,
        <>
          <strong>Collaborated</strong> closely with the CEO to align strategies with organizational objectives.
        </>,
        <>
          Analysed social media metrics to refine campaigns and <strong>optimise</strong> future initiatives.
        </>,
        <>
          Maintained detailed target audience <strong>records</strong> for effective outreach and engagement strategies.
        </>
      ]
    }
  }

  const current = experiences[activeRole]

  return (
    <section id="experience" className="py-32 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I’ve worked
          </h2>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-12">

          {/* LEFT — Timeline */}
          <div className="relative">

            {/* vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-slate-800" />

            <div className="space-y-8">
              {Object.entries(experiences).map(([key, role]) => {
                const isActive = activeRole === key

                return (
                  <button
                    key={key}
                    onClick={() => setActiveRole(key)}
                    className="relative pl-8 text-left group"
                  >
                    {/* dot */}
                    <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border ${
                      isActive
                        ? "bg-blue-400 border-blue-400"
                        : "border-slate-600 group-hover:border-blue-400"
                    }`} />

                    <p className={`text-sm ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}>
                      {role.company}
                    </p>

                    <p className={`text-xs ${
                      isActive ? "text-blue-400" : "text-slate-500"
                    }`}>
                      {role.date}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Content */}
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold">
                {current.title}
              </h3>

              <p className="text-blue-400 mt-2">
                {current.company} · {current.location}
              </p>

              <p className="text-slate-500 text-sm mt-1">
                {current.date}
              </p>
            </div>

            <ul className="space-y-4 text-slate-300 leading-relaxed">
              {current.details.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}