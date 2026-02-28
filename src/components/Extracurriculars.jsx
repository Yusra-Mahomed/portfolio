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
  ];

  return (
    <section id="extracurriculars" className="py-20 px-6 bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
        Extracurriculars
      </h2>

      <div className="max-w-6xl mx-auto overflow-x-auto">
        <div className="flex gap-12 min-w-max relative pb-6">

          {/* Timeline Line */}
          <div className="absolute top-4 left-0 right-0 h-[2px] bg-slate-700"></div>

          {items.map((item, index) => (
            <div key={index} className="relative w-80">

              {/* Dot */}
              <div className="w-4 h-4 bg-blue-400 rounded-full relative z-10 mb-6"></div>

              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-xs text-blue-400 mt-1">
                {item.subtitle}
              </p>

              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}