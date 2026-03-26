import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/projects"
import Extracurriculars from "./components/Extracurriculars"
import Contact from "./components/Contact"

// 🔹 Reusable container for consistent padding + centering
function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* 🔥 Full-width hero (intentional) */}
      <Hero />

      {/* 📦 All other sections nicely centered */}
      <main className="space-y-32 py-20">
        <Container>
          <About />
        </Container>

        <Container>
          <Education />
        </Container>

        <Container>
          <Experience />
        </Container>

        <Container>
          <Projects />
        </Container>

        <Container>
          <Skills />
        </Container>

        <Container>
          <Extracurriculars />
        </Container>

        <Container>
          <Contact />
        </Container>
      </main>
    </div>
  )
}