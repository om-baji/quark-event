import { motion, AnimatePresence, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useState, useEffect } from "react";
import { Hackathon } from "./Events/Hackathon";
import { Workshop } from "./Events/Workshops";

export default function EventAndWorkshops() {
  const [selectedMode, setSelectedMode] = useState("1");
  
  const COLORS_TOP = ["#000000", "#150050", "#3F0071", "#610094"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    });
  }, []);

  const boxShadow = useMotionTemplate`0px 10px 25px -5px ${color}`;
  const gradientColor = useMotionTemplate`linear-gradient(90deg, rgba(97, 0, 148, 0.5), ${color}, rgba(97, 0, 148, 0.5))`;
  const activeBackgroundColor = useMotionTemplate`${color}`;

  const tabVariants = {
    inactive: { 
      backgroundColor: "#000000",
      color: "#ffffff",
      transition: { duration: 0.3 }
    },
    active: { 
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
          className="bg-gray-950 rounded-lg shadow-xl flex p-1.5 overflow-hidden relative"
          style={{
            boxShadow,
          }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 w-full"
            style={{ background: gradientColor }}
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
            className="py-2 px-6 rounded-md relative mr-2 overflow-hidden text-gray-200"
            onClick={() => setSelectedMode("1")}
          >
            {selectedMode === "1" && (
              <motion.div 
                className="absolute inset-0"
                style={{ backgroundColor: activeBackgroundColor }}
                layoutId="activeTab"
                initial={{ borderRadius: 6 }}
                animate={{ borderRadius: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 font-medium">Workshops</span>
          </motion.button>
          
          <motion.button
            variants={tabVariants}
            animate={selectedMode === "2" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-6 rounded-md relative overflow-hidden text-gray-200"
            onClick={() => setSelectedMode("2")}
          >
            {selectedMode === "2" && (
              <motion.div 
                className="absolute inset-0"
                style={{ backgroundColor: activeBackgroundColor }}
                layoutId="activeTab"
                initial={{ borderRadius: 6 }}
                animate={{ borderRadius: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 font-medium">Hackathons</span>
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-1 left-0 w-full h-4 bg-gradient-to-b from-gray-950/50 to-transparent blur-sm"
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