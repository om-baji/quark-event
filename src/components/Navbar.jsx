import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { sections } from "../utils/config"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    let timeout;
    const throttledScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll()
          timeout = null
        }, 100)
      }
    }

    window.addEventListener("scroll", throttledScroll)
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "schedule", label: "Schedule" },
    { id: "sponsors", label: "Sponsors" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/10 backdrop-blur-lg shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center space-x-2 focus:outline-none"
          aria-label="Go to home section"
        >
          
          <span className="font-bold text-xl text-white">Team Quark</span>
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                activeSection === item.id ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400"></div>
              )}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-indigo-500/80 backdrop-blur-sm text-white px-5 py-2 rounded-full hover:bg-indigo-400/80 transition-colors"
          >
            Contact Us
          </button>
        </nav>

        <button
          className="md:hidden text-white p-2 rounded-full focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[57px] bg-black/70 backdrop-blur-lg z-40"
        >
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-3 text-lg font-medium border-b border-gray-800/50 ${
                  activeSection === item.id ? "text-indigo-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 w-full bg-indigo-500/80 backdrop-blur-sm text-white px-4 py-3 rounded-full hover:bg-indigo-400/80 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  )
}