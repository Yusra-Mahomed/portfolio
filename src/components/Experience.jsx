import { useState } from "react"

export default function Experience() {
  const [activeRole, setActiveRole] = useState("honeywell")

  const experiences = {
    honeywell: {
      title: "Software Engineer Intern",
      company: "Honeywell",
      location: "Sydney, NSW",
      date: "July 2024 -- Dec. 2024 (Full Time)",
      details: [
        <>
          Designed and delivered <strong>EWIUTIL (C++)</strong>, a TSV-based authoring and validation tool for Electronic Work Instructions, enabling deployment within industrial control systems for non-batch clients.
        </>,
        <>
          Engineered a <strong>TSV-to-JSON transformation pipeline</strong> with <strong>schema validation</strong>, approval-state workflows, and backend integrations enabling <strong>production deployment</strong>.
        </>,
        <>
          Led <strong>end-to-end integration testing</strong> within virtualised <strong>Experion PKS</strong> environments, validating <strong>real-time interfaces</strong>, system display logic, and error handling.
        </>,
        <>
          Developed <strong>Python and C++</strong> tooling to mathematically generate and inject <strong>synthetic industrial trend data</strong> into historical databases, supporting frontend testing and a high-visibility U.S. User Group demo.
        </>,
        <>
          Integrated <strong>Python-based analytics</strong> into a <strong>RabbitMQ-driven distributed pipeline</strong>, delivering a <strong>fault-tolerant</strong> sensing Proof of Concept.
        </>,
        <>
          Worked in a cross-functional Agile team spanning frontend, backend, and UX, presenting technical deliverables in sprint reviews.
        </>
      ]
    },

    elead: {
      title: "Marketing Coordinator",
      company: "E-Lead",
      location: "Sydney, NSW",
      date: "March 2023 -- Dec. 2023",
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
    <section id="experience" className="py-20 px-6 bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-16 text-blue-400">
        Experience
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* LEFT SIDE MENU */}
        <div className="md:w-1/3 space-y-4">
          {Object.entries(experiences).map(([key, role]) => (
            <button
              key={key}
              onClick={() => setActiveRole(key)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                activeRole === key
                  ? "bg-blue-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {role.title}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:w-2/3 bg-slate-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">{current.title}</h3>

          <p className="text-blue-400 mt-2">
            {current.company} — {current.location}
          </p>

          <p className="text-slate-400 text-sm mt-1">
            {current.date}
          </p>

          <ul className="mt-6 space-y-3 text-slate-300 text-sm leading-relaxed">
            {current.details.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}