export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">

        {/* Heading */}
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s build something meaningful
        </h2>

        {/* Description */}
        <p className="text-slate-400 mb-10 leading-relaxed">
          I’m currently open to graduate and early-career opportunities.
          If you’d like to connect, collaborate, or just have a conversation, I’d love to hear from you.
        </p>

        {/* Primary CTA (email) */}
        <div className="mb-8">
          <a
            href="mailto:y.mahomedd@gmail.com"
            className="inline-block px-6 py-3 rounded-full 
            bg-blue-500 hover:bg-blue-600 transition 
            shadow-lg shadow-blue-500/20"
          >
            Email Me
          </a>
        </div>

        {/* Secondary links */}
        <div className="flex justify-center gap-6 text-sm text-slate-400">

          <a
            href="mailto:y.mahomedd@gmail.com"
            className="hover:text-white transition"
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
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}