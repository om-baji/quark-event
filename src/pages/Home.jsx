"use client"

import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import ShinyText from "../components/ShinyText.jsx"

const COLORS_TOP = ["#000000", "#150050", "#3F0071", "#610094"]

// Animation variants for floating effect
const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2, // Increased duration for smoother animation
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

// Animation variants for pulsing glow
const pulseAnimation = {
  animate: {
    textShadow: [
      "0 0 5px rgba(255,255,255,0.1)",
      "0 0 15px rgba(255,255,255,0.3)",
      "0 0 5px rgba(255,255,255,0.1)",
    ],
    transition: {
      duration: 1, // Increased duration for smoother animation
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

// Letter animation for wave effect
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.7, // Increased duration for smoother animation
    },
  }),
};

export const Home = () => {
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    })
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  // Split text into letters for individual animation
  const envisionText = "ENVISION"
  const genAiText = "GEN AI Event"

  return (
    <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            <ShinyText text="Team Quark Presents" disabled={false} speed={5} className="custom-class" />
          </span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* ENVISION with floating and letter animation */}
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="max-w-xl text-center text-3xl font-medium leading-tight sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
            >
              <motion.div variants={pulseAnimation} animate="animate" className="flex justify-center overflow-hidden">
                {envisionText.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className="inline-block"
                  >
                    <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                      {letter}
                    </span>
                  </motion.span>
                ))}
              </motion.div>

              {/* GEN AI Event with different timing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.4, duration: 0.8 },
                }}
                className="mt-2"
              >
                <ShinyText
                  text={genAiText}
                  disabled={false}
                  speed={7}
                  className="block bg-gradient-to-br from-white to-gray-400"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.p
            className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Join us for ENVISION, a cutting-edge Generative AI event featuring workshops, hands-on demos, and expert
            speakers exploring the latest in AI innovations.
          </motion.p>

          {/*TODO : Redirect to event section in the final build*/}
          <a href="#events">
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              Learn More
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </a>
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </div>
  )
}

