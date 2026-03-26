export default function Education() {
  return (
    <section id="education" className="py-32 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I built my foundation
          </h2>
        </div>

        {/* Main block */}
        <div className="space-y-10">

          {/* Degree */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">
                  Bachelor of Software Engineering (Honours)
                </h3>
                <p className="text-slate-400 mt-2">
                  University of New South Wales · Sydney
                </p>
              </div>

              <span className="text-slate-400 text-sm mt-2 md:mt-0">
                2022 — 2026
              </span>
            </div>

            {/* Stats inline (cleaner) */}
            <div className="flex flex-wrap gap-6 mt-4 text-sm text-slate-300">
              <span>
                WAM: <span className="text-blue-400 font-medium">85</span>
              </span>
              <span>Dean’s List (2022)</span>
              <span>
                Thesis: <span className="text-blue-400 font-medium">HD (94)</span>
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800"></div>

          {/* Thesis */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              Honours Thesis
            </h4>

            <p className="text-slate-300 max-w-3xl leading-relaxed">
              I built an AI-powered system for generating structured question banks
              from course content. The goal was to make study resources more adaptive
              and topic-focused, rather than static and one-size-fits-all.
            </p>

            <ul className="mt-6 space-y-3 text-slate-400 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-400">▹</span>
                Designed a retrieval-augmented generation (RAG) pipeline for
                topic classification and question generation
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">▹</span>
                Improved output quality through embedding-based clustering
                and prompt iteration
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}