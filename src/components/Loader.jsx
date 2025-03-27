"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing AI models")
  const canvasRef = useRef(null)

  // AI-themed loading messages
  const loadingMessages = [
    "Initializing AI models",
    "Generating neural pathways",
    "Processing data vectors",
    "Optimizing algorithms",
    "Synthesizing content",
    "Calibrating parameters",
    "Analyzing patterns",
  ]

  useEffect(() => {
    const messageTimer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingMessages.length)
      setLoadingText(loadingMessages[randomIndex])
    }, 700)

    return () => clearInterval(messageTimer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 4, 100))
      } else {
        setTimeout(() => {
          finishLoading()
        }, 500)
      }
    }, 20)

    return () => clearTimeout(timer)
  }, [progress, finishLoading])

  // Neural network nodes and connections
  const NeuralNetworkBackground = () => {
    const nodeCount = 15
    const nodes = Array.from({ length: nodeCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      pulseDelay: Math.random() * 3,
    }))

    return (
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${node.y}%`,
              left: `${node.x}%`,
              width: node.size,
              height: node.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              boxShadow: [
                "0 0 0 rgba(255, 255, 255, 0)",
                "0 0 10px rgba(173, 79, 224, 0.8)",
                "0 0 0 rgba(255, 255, 255, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: node.pulseDelay,
            }}
          />
        ))}

        {/* Neural connections */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) => {
            // Connect to 2-3 random nodes
            const connections = []
            const connectionCount = Math.floor(Math.random() * 2) + 1

            for (let j = 0; j < connectionCount; j++) {
              const targetIndex = (i + j + 1) % nodes.length
              connections.push(
                <motion.line
                  key={`${i}-${targetIndex}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nodes[targetIndex].x}%`}
                  y2={`${nodes[targetIndex].y}%`}
                  stroke="url(#purpleGradient)"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: node.pulseDelay,
                  }}
                />,
              )
            }

            return connections
          })}
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#610094" />
              <stop offset="50%" stopColor="#ad4fe0" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  // Binary code animation
  const BinaryCodeEffect = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-[#ad4fe0] whitespace-nowrap"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {Array.from({ length: 20 })
              .map(() => Math.round(Math.random()))
              .join("")}
          </motion.div>
        ))}
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${progress}%`,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000]"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0">
        <Canvas ref={canvasRef}>
          <Stars radius={50} count={2500} factor={4} fade speed={1} />
        </Canvas>
      </div>

      <NeuralNetworkBackground />
      <BinaryCodeEffect />

      <div className="relative z-10 flex flex-col items-center">
        {/* AI Brain visualization */}
        <motion.div
          className="w-32 h-32 mb-8 relative"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY },
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          <div className="absolute inset-0 rounded-full bg-[#150050]/30 blur-xl"></div>

          {/* Central brain/neural network visualization */}
          <div className="w-full h-full relative">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#150050] opacity-20"></div>

            {/* Spinning outer neural pathways */}
            <div className="absolute inset-0 rounded-full border-4 border-t-[#610094] border-r-[#ffff] border-b-[#150050] border-l-transparent animate-spin"></div>

            {/* Inner neural pathways */}
            <div
              className="absolute inset-4 rounded-full border-2 border-t-[#3F0071] border-r-[#150050] border-b-transparent border-l-[#610094] animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>

            {/* Central core */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#610094] to-[#150050] flex items-center justify-center">
              <motion.div
                className="w-2/3 h-2/3 rounded-full bg-white/10"
                animate={{
                  boxShadow: ["0 0 5px #ad4fe0", "0 0 20px #ad4fe0", "0 0 5px #ad4fe0"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>

            {/* Data flow particles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{
                  x: [0, Math.cos((i * 60 * Math.PI) / 180) * 60],
                  y: [0, Math.sin((i * 60 * Math.PI) / 180) * 60],
                  opacity: [1, 0],
                  scale: [0, 1.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.25,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#610094] to-[#ffff] bg-clip-text text-transparent"
          variants={textVariants}
        >
          ENVISION
        </motion.h1>

        <motion.p
          className="text-[#ad4fe0] mb-2 text-center"
          variants={textVariants}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {loadingText}...
        </motion.p>

        <div className="w-64 h-1.5 bg-[#150050]/30 rounded-full overflow-hidden mt-4 mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-[#610094] to-[#ffff] rounded-full relative"
            variants={progressVariants}
          >
            {/* Data particles in progress bar */}
            <motion.div
              className="absolute top-0 right-0 w-1 h-full bg-white"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>

        <motion.div className="flex items-center justify-center space-x-1 mt-1" variants={textVariants}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#ad4fe0]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
          />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#ad4fe0]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
          />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#ad4fe0]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
          />
        </motion.div>

        <motion.p className="mt-2 text-sm text-[#ad4fe0]" variants={textVariants}>
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader

