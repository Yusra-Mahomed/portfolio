export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            More than just code
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-5 text-slate-300 leading-relaxed">

            <p>
              I’m a final-year Software Engineering student at UNSW who enjoys
              turning complex ideas into practical, real-world systems.
            </p>

            <p>
              I’ve worked across industrial systems, full-stack applications,
              and cloud-based platforms, and I’m interested in building solutions
              that are both technically sound and genuinely useful.
            </p>

            <p>
              I’m drawn to problems that require both technical depth and thoughtful
              design, whether that’s backend systems, data pipelines, or intuitive interfaces.
            </p>

            {/* PERSONAL */}
            <p className="text-slate-500">
              Outside of engineering, I enjoy travelling, exploring new places,
              photography, and reading, especially sci-fi and dystopian fiction.
            </p>

          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            {/* HOW I THINK */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-400/30 transition">
              <h3 className="text-sm font-semibold mb-1">💡 How I think</h3>
              <p className="text-slate-400 text-sm">
                I’m naturally curious and like to understand how things work at a deeper level, not just use them.
              </p>
            </div>

            {/* WHAT I ENJOY */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-400/30 transition">
              <h3 className="text-sm font-semibold mb-1">⚙️ What I enjoy</h3>
              <p className="text-slate-400 text-sm">
                Backend systems, cloud infrastructure, and designing clean, intuitive user experiences.
              </p>
            </div>

            {/* REPLACEMENT FOR CURRENT FOCUS */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition">
              <h3 className="text-sm font-semibold mb-1">🧠 What drives me</h3>
              <p className="text-slate-400 text-sm">
                Building systems that solve real problems and have a meaningful impact beyond just the code.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}