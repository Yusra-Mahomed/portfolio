import { useState } from "react";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "Connected Health",
      subtitle: "UNSW ChallEng Program · Feb 2023 – Dec 2023 · Core Team of 4 · Backend-Focused",
      description:
        "Year-long telehealth platform developed through the UNSW ChallEng program, integrating ML-based human pose estimation for remote physiotherapy monitoring.",
      tech: ["Python", "Django", "Azure", "HTML", "CSS", "JavaScript"],
      details: [
        "Focused primarily on backend development within a 4-person core engineering team.",
        "Implemented MediaPipe for real-time ML-based pose visualisation.",
        "Designed data handling workflows using Azure Blob Storage for large-scale video & pose datasets.",
        "Collaborated with a wider 10–12 member cohort and reported to senior engineers and researchers.",
        "Presented proof-of-concept to Head of Department and faculty stakeholders."
      ],
      github: "https://github.com/nick-maiden/connectedhealth",
      demo: "https://www.youtube.com/watch?feature=shared&v=xt1urYFAc0A",
    },
    {
      title: "Data Processing & Inference App",
      subtitle: "April 2024 · Solo Project",
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
      video: "https://www.youtube.com/watch?v=P_3wli_7Az4",
    },
    {
      title: "Cheesecake E-Invoicing Software",
      subtitle: "Coursework · Feb 2023 – Apr 2023 · Team of 5 · Full-Stack",
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
      demo: "https://www.youtube.com/watch?v=rH7oPRoIitk",
    },
    {
      title: "Disease Trend Analysis Platform",
      subtitle: "Feb 2024 – Apr 2024 · Team of 3 · Full-Stack",
      description:
        "Cloud-based platform for disease data ingestion, visualization, and predictive analytics.",
      tech: ["Python", "AWS Lambda", "Docker", "React", "Amazon S3"],
      details: [
        "Developed backend services for data ingestion and predictive analysis.",
        "Contributed to frontend visualisation components.",
        "Deployed scalable services using AWS Lambda and Docker.",
        "Used Amazon S3 for cloud-based data storage.",
        "Established CI/CD pipeline for testing and deployment."
      ],
    },
    {
      title: "Educational Digital Privacy Toolkit",
      subtitle: "Full-Stack Security & Privacy Web Application · Solo Project",
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
      github: "https://github.com/Yusra-Mahomed/digital-privacy-toolkit"
    },
    {
      title: "AirBrB — Airbnb-Style Booking Platform (React SPA)",
      subtitle: "Coursework · Team of 2 · Frontend Developer",
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
      github: "https://github.com/Yusra-Mahomed/airbrb-deploy"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-950">
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                {project.subtitle}
              </p>

              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Links — ALWAYS Visible */}
              <div className="flex flex-wrap gap-6 mt-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Video Demo
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Video
                  </a>
                )}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="mt-6 text-blue-400 text-sm hover:underline"
              >
                {isOpen ? "Hide Details ↑" : "View Details ↓"}
              </button>

              {/* Dropdown Content */}
              {isOpen && (
                <div className="mt-4 border-t border-slate-800 pt-4">
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {project.details.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-400">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}