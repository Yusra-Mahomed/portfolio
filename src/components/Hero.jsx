export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-400">Yusra Mahomed</span>
      </h1>

      <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed">
        I'm a curious problem solver passionate about building practical solutions with real-world impact.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#experience"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
        >
          View Experience
        </a>

        <a
          href="#projects"
          className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-black transition"
        >
          View Projects
        </a>
      </div>

      {/* <a
        href="/Yusra_Mahomed_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-sm text-slate-400 hover:text-blue-400 transition"
      >
        Download Resume →
      </a> */}
    </section>
  )
}