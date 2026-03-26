"use client"

import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { FaPlay } from "react-icons/fa"

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedProjectImages, setSelectedProjectImages] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: "Connected Health",
      subtitle: "UNSW ChallEng Program · Core Team of 4 · Backend-Focused",
      date:"Feb 2023 – Dec 2023",
      description:
        "Year-long telehealth platform developed through the UNSW ChallEng program, integrating ML-based human pose estimation for remote physiotherapy monitoring.",
      tech: ["Python", "Django", "Azure", "HTML", "CSS", "JavaScript"],
      details: [
        "Selected for the UNSW Vertically Integrated Project (VIP); contributed to a cross-disciplinary telehealth research project.",
        "Focused primarily on backend development within a 4-person core engineering team.",
        "Implemented MediaPipe for real-time ML-based pose visualisation, enabling remote physiotherapy.",
        "Designed data handling workflows using Azure Blob Storage for large-scale video & pose datasets.",
        "Optimised media encoding (JPEG, MP4), reducing storage and bandwidth usage by ~50%.",
        "Collaborated with a wider 10–12 member cohort and reported to senior engineers and researchers.",
        "Presented proof-of-concept to Head of Department, faculty leadership, and industry stakeholders at a university innovation showcase."
      ],
      github: "https://github.com/nick-maiden/connectedhealth",
      video: "https://www.youtube.com/watch?feature=shared&v=xt1urYFAc0A",
      videoLabel: "Quick Video",
      image: "/images/connected-health.png",
    },
    {
      title: "Cheesecake E-Invoicing Software",
      subtitle: "Coursework · Team of 5 · Full-Stack",
      date:"Feb 2023 – Apr 2023",
      description:
        "Full-stack e-invoicing platform developed in a 5-person team, implementing REST APIs, test-driven development, and CI/CD deployment.",
      tech: ["Node.js", "TypeScript", "Express", "React", "Firebase", "AWS"],
      details: [
        "Contributed across both frontend and backend components.",
        "Developed REST APIs with Firebase storage and external API integrations.",
        "Applied Test-Driven Development using Jest to ensure reliability.",
        "Documented APIs using Swagger OpenAPI.",
        "Implemented CI/CD pipeline for automated testing and deployment."
      ],
      video: "https://www.youtube.com/watch?v=rH7oPRoIitk",
      videoLabel: "Demo (by a teammate)",
      images: ["/images/invoice-5.png", "/images/e-invoice-2.png", "/images/invoice-3.png", 
        "/images/invoice-6.png"
      ],
    },
    {
      title: "Educational Digital Privacy Toolkit",
      subtitle: "Full-Stack Security & Privacy Web Application · Solo Project",
      date:"2025",
      description:
        "Interactive toolkit helping users understand, detect, and defend against modern online tracking techniques through hands-on tools and visual insights.",
      tech: [
        "FastAPI",
        "React",
        "Vite",
        "Playwright",
        "zxcvbn",
        "REST APIs"
      ],
      details: [
        "Built FastAPI backend exposing modular REST endpoints for fingerprinting, tracking analysis, OSINT search, and social exposure checks.",
        "Implemented browser fingerprint entropy detection and third-party cookie/script analysis using Playwright.",
        "Integrated zxcvbn for password strength evaluation and Have I Been Pwned breach checks.",
        "Designed privacy-first architecture ensuring no sensitive user data is stored.",
        "Developed React + Vite frontend for interactive educational visualisations."
      ],
      github: "https://github.com/Yusra-Mahomed/digital-privacy-toolkit",
      video: "https://youtu.be/j9xZoCSZHZ8",
      videoLabel: "Demo",
      image: "/images/security.png",
    },
    {
      title: "Disease Trend Analysis Platform",
      subtitle: "Team of 3 · Full-Stack",
      date:"Feb 2024 – Apr 2024",
      description:
        "Cloud-based serverless analytics platform for ingesting, analysing, and visualising public health data.",
      tech: ["Python", "AWS Lambda", "Docker", "React", "Amazon S3"],
      details: [
        "Developed backend services for data ingestion and predictive analysis.",
        "Contributed to frontend visualisation components.",
        "Deployed scalable services using AWS Lambda and Docker.",
        "Used Amazon S3 for cloud-based data storage.",
        "Established CI/CD pipeline for testing and deployment."
      ],
      image: "/images/disease-2.png",
    },
    {
      title: "Data Processing & Inference App",
      subtitle: "Solo Project",
      date:"April 2024",
      description:
        "Independent full-stack web application for intelligent dataset type inference and user-controlled data conversion.",
      tech: ["Python", "Django", "React", "Render", "Pandas"],
      details: [
        "Designed and implemented data type inference & conversion logic using Pandas.",
        "Built frontend override tools allowing users to manually adjust inferred types.",
        "Optimised performance for large datasets.",
        "Deployed production instance via Render."
      ],
      github: "https://github.com/Yusra-Mahomed/data-processing",
      demo: "https://data-processing.onrender.com/",
      demoLabel: "Live (may take ~30s)",
      video: "https://www.youtube.com/watch?v=P_3wli_7Az4",
      videoLabel: "Demo",
      image: "/images/data-processing.png",
    },
    {
      title: "AirBrB: Airbnb-Style Booking Platform (React SPA)",
      subtitle: "Coursework · Team of 2 · Frontend Developer",
      date:"2025",
      description:
        "React single-page application replicating core Airbnb functionality, including authentication, listings management, advanced search filters, booking workflows, and review systems.",
      tech: [
        "React",
        "JavaScript",
        "React Router",
        "REST APIs",
        "Cypress",
        "Jest"
      ],
      details: [
        "Led frontend development in a 2-person team.",
        "Implemented complete SPA architecture with dynamic routing and no page refreshes.",
        "Built authentication flows and protected routes.",
        "Developed listing CRUD interfaces and publishing logic.",
        "Implemented advanced search filters with sorting (price, bedrooms, ratings, dates).",
        "Built booking workflow with status tracking and review submission.",
        "Wrote component and end-to-end UI tests using Jest and Cypress.",
        "Deployed production build to Vercel."
      ],
      github: "https://github.com/Yusra-Mahomed/airbrb-deploy",
      image: "/images/airbrb.jpg",
    }
  ];

  // {selectedImage && (
  //   <div
  //     className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
  //     onClick={() => {
  //       if (project.images) {
  //         setSelectedProjectImages(project.images)
  //         setCurrentImageIndex(0)
  //       } else {
  //         setSelectedProjectImages([project.image])
  //         setCurrentImageIndex(0)
  //       }
  //     }}
  //   >
  //     <img
  //       src={selectedImage}
  //       alt="Expanded project"
  //       className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
  //     />
  //   </div>
  // )}

  return (
    <>
      {/* IMAGE MODAL */}
      {selectedProjectImages && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProjectImages(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedProjectImages[currentImageIndex]}
              className="max-h-[90vh] max-w-full rounded-xl shadow-2xl mx-auto"
            />

            {/* LEFT */}
            {currentImageIndex > 0 && (
              <button
                onClick={() => setCurrentImageIndex((i) => i - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
              >
                ←
              </button>
            )}

            {/* RIGHT */}
            {currentImageIndex < selectedProjectImages.length - 1 && (
              <button
                onClick={() => setCurrentImageIndex((i) => i + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
              >
                →
              </button>
            )}

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4">
              {selectedProjectImages.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currentImageIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      )}

      <section id="projects" className="py-32 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <div className="mb-20">
            <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Things I’ve built
            </h2>

            <p className="mt-4 text-slate-400 max-w-2xl">
              A selection of projects exploring full-stack development,
              system design, and building scalable solutions to real-world problems.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12">

            {projects.map((project, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className="group/card border border-white/10 rounded-2xl p-5 
                  hover:border-blue-400/30 transition duration-300"
                >

                  {/* IMAGE */}
                  {(project.image || project.images) && (
                    <div
                      className="relative overflow-hidden rounded-xl cursor-pointer group"
                      onClick={() => {
                        if (project.images) {
                          setSelectedProjectImages(project.images)
                          setCurrentImageIndex(0)
                        } else {
                          setSelectedProjectImages([project.image])
                          setCurrentImageIndex(0)
                        }
                      }}
                    >
                      <img
                        src={project.images ? project.images[0] : project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.05]"
                      />

                      {/* 🔥 Hover Overlay (ONLY for multiple images) */}
                        {project.images && (
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                            <span className="text-sm text-white border border-white/30 px-4 py-2 rounded-full backdrop-blur">
                              View gallery →
                            </span>

                          </div>
                        )}
                    </div>
                  )}

                  {/* TOP META */}
                  <div className="flex justify-between items-center mt-4">

                    <span className="text-xs text-slate-500">
                      {project.date}
                    </span>

                    <div className="flex gap-3 text-slate-400">

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}

                      {project.video && (
                        <div className="relative inline-block group">
                          <a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-red-400 transition"
                          >
                            <FaPlay size={16} />
                          </a>

                          <span
                            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 
                            text-[10px] px-2 py-1 rounded bg-black/80 backdrop-blur text-white 
                            opacity-0 translate-y-1 
                            group-hover:opacity-100 group-hover:translate-y-0 
                            transition whitespace-nowrap"
                          >
                            {project.videoLabel || "Demo"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold mt-3 group-hover/card:text-blue-400 transition">
                    {project.title}
                  </h3>

                  {/* SUBTITLE */}
                  <p className="text-sm text-slate-500 mt-1">
                    {project.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-400 border border-white/10 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* DETAILS */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="mt-5 text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    {isOpen ? "Hide details ↑" : "View details ↓"}
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <ul className="space-y-3 text-slate-400 text-sm">
                        {project.details.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-blue-400">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}