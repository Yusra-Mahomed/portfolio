export default function Extracurriculars() {
  const items = [
    {
      title: "Millennium Women Accelerator",
      subtitle: "Year-Long Leadership Program",
      description:
        "Selected for a competitive leadership accelerator focused on corporate immersions, professional development, and industry networking."
    },
    {
      title: "I-Lead Japan",
      subtitle: "10-Day International Program",
      description:
        "Participated in company visits and masterclasses with organisations including Woven by Toyota, Deloitte, and Tokyo Innovation Hub."
    },
    {
      title: "Penny Appeal Volunteer",
      subtitle: "Community Engagement",
      description:
        "Executed fundraising campaigns and collaborated with coordinators to meet performance targets."
    },
    {
      title: "Leadership Foundations Program",
      subtitle: "Professional Development",
      description:
        "Built leadership skills in collaboration, resilience, and inclusive teamwork."
    },
    {
      title: "Deloitte Technology Job Simulation",
      subtitle: "Industry Simulation Program",
      description:
        "Developed a client-facing dashboard proposal using Tableau and Excel to derive business insights."
    }
  ]

  return (
    <section id="extracurriculars" className="py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-blue-400 uppercase tracking-widest text-xs mb-2">
            Extracurriculars
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Beyond engineering
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-slate-800"></div>

          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="relative pl-8">

                {/* dot */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-400"></div>

                {/* content */}
                <div>
                  <h3 className="text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-xs text-blue-400 mt-1">
                    {item.subtitle}
                  </p>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}