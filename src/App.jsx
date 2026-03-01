import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/projects"
import Extracurriculars from "./components/Extracurriculars"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Extracurriculars />
      <Contact />
    </div>
  )
}

export default App