"use client"

import { useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Home } from "./pages/Home"
import Navbar from "../src/components/Navbar"
import Loader from "./components/Loader"
import { sections } from "./utils/config"
import EventAndWorkshops from "./components/EventsAndWorkshops"
import Schedule from "./components/Schedule"

function App() {
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", "#610094")
    document.documentElement.style.setProperty("--color-secondary", "#3F0071")
    document.documentElement.style.setProperty("--color-tertiary", "#150050")
    document.documentElement.style.setProperty("--color-background", "#000000")
  }, [])

  const finishLoading = () => {
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <Loader finishLoading={finishLoading} />
      ) : (
        <div ref={ref} className="bg-[#000000] text-white min-h-screen">
          <Navbar />

          <main>
            <section id="hero" className="relative h-screen">
              <div className="hero-section">
                <Home />
              </div>
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <ChevronDown className="w-10 h-10 text-white/70" />
              </motion.div>
            </section>

            <section id="about" className="py-20">
              THis is About section
            </section>

            <section id="events" className="py-20 bg-[#150050]">
              <div className="flex justify-center items-center">
                <EventAndWorkshops />
              </div>
            </section>

            <section id="schedule" className="py-20">
              <div className="flex justify-center items-center">
                <Schedule />
              </div>
            </section>

            <section id="sponsors" className="py-20 bg-[#150050]">
              <div className="flex justify-center items-center">THis is SPonsers section</div>
            </section>
          </main>

          <footer className="bg-[#000000] text-white/70 py-6 text-center border-t border-[#3F0071]">
            <div className="container mx-auto">
              <p>© {new Date().getFullYear()} Envision GenAI Event. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

export default App

