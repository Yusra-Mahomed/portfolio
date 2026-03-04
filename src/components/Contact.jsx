export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 text-center">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">
        Contact
      </h2>

      <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
        I'm currently open to graduate and early-career
        opportunities. If you'd like to connect, feel free to reach out.
      </p>

      <div className="flex justify-center gap-6 text-sm text-slate-300">
        <a
          href="mailto:y.mahomedd@gmail.com"
          className="hover:text-blue-400 transition"
        >
          y.mahomedd@gmail.com
        </a>

        <span className="text-slate-600">•</span>

        <a
          href="https://www.linkedin.com/in/yusra-mahomed-09949b230/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          linkedin.com/in/yusra-mahomed-09949b230
        </a>
      </div>
    </section>
  )
}