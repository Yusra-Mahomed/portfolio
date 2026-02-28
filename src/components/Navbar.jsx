import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md text-white shadow-lg fixed w-full z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Name */}
          <a 
            href="#home"
            className="text-xl font-semibold text-blue-400 tracking-wide"
          >
            Yusra Mahomed
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button 
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-800 px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}