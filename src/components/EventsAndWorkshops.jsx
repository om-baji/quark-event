import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Hackathon } from "./Events/Hackathon";
import { Workshop } from "./Events/Workshops";

export default function EventAndWorkshops() {
  const [selectedMode, setSelectedMode] = useState("1");

  const tabVariants = {
    inactive: { 
      backgroundColor: "#000000",
      color: "#ffffff",
      transition: { duration: 0.3 }
    },
    active: { 
      backgroundColor: "#610094",
      color: "#ffffff",
      fontWeight: "bold",
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren", 
        staggerChildren: 0.2 
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center w-full"
    >
      <motion.div 
        className="relative mb-8 z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
      >
        <motion.div 
          className="bg-black rounded-lg shadow-xl flex p-1.5 overflow-hidden relative"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(97, 0, 148, 0.3)" }}
        >
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-900 via-[#610094] to-purple-900 w-full"
            layoutId="tabIndicator"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
          
          <motion.button
            variants={tabVariants}
            animate={selectedMode === "1" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-6 rounded-md relative mr-2 overflow-hidden"
            onClick={() => setSelectedMode("1")}
          >
            {selectedMode === "1" && (
              <motion.div 
                className="absolute inset-0 bg-purple-800/20"
                layoutId="activeTab"
                initial={{ borderRadius: 6 }}
                animate={{ borderRadius: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">Workshops</span>
          </motion.button>
          
          <motion.button
            variants={tabVariants}
            animate={selectedMode === "2" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-6 rounded-md relative overflow-hidden"
            onClick={() => setSelectedMode("2")}
          >
            {selectedMode === "2" && (
              <motion.div 
                className="absolute inset-0 bg-purple-800/20"
                layoutId="activeTab"
                initial={{ borderRadius: 6 }}
                animate={{ borderRadius: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">Hackathons</span>
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-1 left-0 w-full h-4 bg-gradient-to-b from-black/50 to-transparent blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4 }}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedMode}
          className="w-full p-6"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {selectedMode === "1" ? <Workshop /> : <Hackathon />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}