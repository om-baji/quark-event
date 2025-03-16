import { motion } from "framer-motion";
import { TrophyIcon } from "lucide-react";
import { hackathon } from "../../utils/config";

export function Hackathon() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="bg-black text-white p-6 m-6 flex flex-col items-center rounded-xl border border-gray-800 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-8 max-w-3xl w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 10, 
            delay: 0.3 
          }}
          whileHover={{ 
            rotate: [0, -5, 5, -5, 0],
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
          className="flex justify-center mb-6"
        >
          <TrophyIcon className="p-2 text-white w-12 h-12 bg-[#610094] rounded-full shadow-lg shadow-purple-900/30" />
        </motion.div>

        <motion.p 
          className="mt-2 text-center text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {hackathon.description}
        </motion.p>

        <motion.div 
          className="text-[#610094] mt-8 text-2xl font-bold flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.03, x: 5 }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "2rem" }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="h-1 bg-[#610094] mr-2 inline-block rounded-full"
          ></motion.span>
          Timeline
        </motion.div>

        <motion.div 
          className="mt-6 border-l-2 border-[#150050] pl-6 space-y-8"
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
        >
          {hackathon.timeline.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <motion.div 
                className="absolute left-[-28px] top-2 w-5 h-5 bg-[#610094] rounded-full flex items-center justify-center"
                whileHover={{ 
                  scale: 1.5,
                  boxShadow: "0 0 15px 2px rgba(97, 0, 148, 0.6)",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    delay: index * 0.2
                  }}
                />
              </motion.div>

              <motion.div 
                className="text-gray-300 font-bold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {item.title}
              </motion.div>

              <motion.p 
                className="text-gray-400 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item.time}
              </motion.p>

              <motion.p 
                className="text-gray-300 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="w-full h-1 bg-gradient-to-r from-transparent via-[#610094] to-transparent mt-6 opacity-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.div>
  );
}