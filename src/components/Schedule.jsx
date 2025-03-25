import React from "react";
import { motion } from "framer-motion";
import { scheduleData } from "../utils/config";

const Schedule = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full relative">
        <motion.h2
          whileHover={{ rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring", stiffness: 80 }}
          style={{
            textShadow: `
              0 1px 0 #ccc,
              0 2px 0 #c9c9c9,
              0 3px 0 #bbb,
              0 4px 0 #b9b9b9
            `,
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 sm:mb-16 text-white px-2"
        >
          SCHEDULE
        </motion.h2>

        <div className="flex flex-col gap-16 relative">
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-800 opacity-40 rounded-full z-0" />

          {scheduleData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`flex flex-col sm:flex-row w-full items-center justify-between relative px-2 sm:px-0 ${
                  isEven ? "" : "sm:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full sm:w-2/5 flex ${
                    isEven
                      ? "sm:justify-end sm:pr-4"
                      : "sm:justify-start sm:pl-4"
                  } justify-center mb-6 sm:mb-0`}
                >
                  <div className="bg-purple-600 text-white font-black px-6 py-4 sm:px-8 sm:py-6 rounded relative flex items-center text-lg sm:text-2xl shadow-md border border-purple-400/50">
                    <span>{item.date}</span>

                    <div
                      className={`hidden sm:block absolute top-1/2 ${
                        isEven ? "left-full" : "right-full"
                      } -translate-y-1/2 w-0 h-0 
                      ${
                        isEven
                          ? "border-l-8 border-l-purple-600"
                          : "border-r-8 border-r-purple-600"
                      }
                      border-y-8 border-y-transparent`}
                    />
                  </div>
                </div>

                <div className="relative z-10 flex justify-center items-center mb-6 sm:mb-0">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full shadow-md border border-purple-400" />
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "10px 1px 40px rgba(170, 0, 255, 0.24)",
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className={`w-full sm:w-2/5 flex ${
                    isEven
                      ? "sm:justify-start sm:pl-4"
                      : "sm:justify-end sm:pr-4"
                  } justify-center`}
                >
                  <div className="relative bg-purple-800/20 backdrop-blur-sm border border-purple-500/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md transition-all duration-300 w-full sm:w-auto max-w-md">
                    <h3 className="text-purple-300 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                      {item.event}
                    </h3>
                    <p className="text-white text-sm sm:text-base leading-relaxed">
                      {item.description.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
