import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const AboutEnvision = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="max-w-4xl w-full">
      

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            ENVISION'25 is a groundbreaking Generative AI event designed to explore the frontiers of artificial intelligence, bringing together innovators, developers, and thought leaders in the GenAI ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Innovative Workshops",
              description: "Dive deep into cutting-edge GenAI technologies with hands-on learning experiences."
            },
            {
              title: "Expert Speakers",
              description: "Learn from industry leaders and AI researchers pushing the boundaries of generative technologies."
            },
            {
              title: "Networking",
              description: "Connect with like-minded professionals and potential collaborators in the AI space."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl border border-purple-600/30 hover:border-purple-600 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a href="#register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto gap-2 group"
            >
              Learn More
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutEnvision