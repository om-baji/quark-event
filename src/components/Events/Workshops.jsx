import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { useEffect } from "react";
import { workshops } from "../../utils/constants";

export function Workshop() {
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

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {workshops.map((workshop, index) => (
        <motion.div 
          key={index} 
          className="w-full bg-gray-950 p-6 rounded-lg text-gray-200 shadow-lg relative overflow-hidden"
          style={{
            border,
            boxShadow,
          }}
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          <div className="flex items-center justify-between mb-5 relative z-10">
            <motion.div 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#610094] text-gray-200"
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
            >
              {workshop.icon}
            </motion.div>
            <motion.div 
              className="flex items-center text-xs text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <Clock size={14} className="mr-1" />
              <span>{workshop.time}</span>
            </motion.div>
          </div>
          
          <p className="text-sm mb-2 opacity-60 relative z-10">Instructor: {workshop.instructor}</p>
          <motion.h2 
            className="text-xl font-bold mb-3 opacity-80 relative z-10"
            whileHover={{ letterSpacing: "0.02em", color: "#fff" }}
            transition={{ duration: 0.2 }}
          >
            {workshop.title}
          </motion.h2>
          <p className="text-sm opacity-50 mb-4 line-clamp-3 relative z-10">{workshop.description}</p>
          
          <motion.div 
            className="flex items-center text-xs text-gray-400 mt-auto relative z-10"
            whileHover={{ color: "#3F0071", scale: 1.02 }}
          >
            <MapPin size={14} className="mr-1" />
            <span>{workshop.location}</span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}