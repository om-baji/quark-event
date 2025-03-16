import React from 'react';
import { motion } from 'framer-motion';

const scheduleData = [
  { date: '1st April', event: 'Speaker Session' },
  { date: '2nd April', event: 'Workshop and Fun Activities' },
  { date: '3rd April', event: 'Workshops' },
  { date: '4th April', event: 'Fun Activities' },
  { date: '5th April', event: 'Hackathon' },
];

const Schedule = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full relative">

        {/* Title with 3D motion and shine */}
        <motion.h2
          whileHover={{ rotateX: 10, rotateY: -10 }}
          transition={{ type: 'spring', stiffness: 100 }}
          style={{
            textShadow: `
              0 1px 0 #ccc,
              0 2px 0 #c9c9c9,
              0 3px 0 #bbb,
              0 4px 0 #b9b9b9,
              0 5px 0 #aaa,
              0 6px 1px rgba(0, 0, 0, 0.1),
              0 0 5px rgba(170, 0, 255, 0.8),
              0 1px 3px rgba(170, 0, 255, 0.5),
              0 3px 5px rgba(100, 0, 255, 0.3)
            `,
          }}
          className="text-8xl font-extrabold text-center mb-16 text-white animate-shine-3d"
        >
          SCHEDULE
        </motion.h2>

        {/* Timeline Content */}
        <div className="flex flex-col gap-20 relative">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex w-full items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Date box */}
              <div className={`w-1/4 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                <div className="bg-purple-500 text-white font-bold px-6 py-4 rounded relative flex items-center shadow-[0_0_20px_rgba(170,0,255,0.8)] text-xl">
                  <span>{item.date}</span>
                  {/* Triangle pointer */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 
                    ${index % 2 === 0
                      ? 'left-full border-l-8 border-l-purple-500'
                      : 'right-full border-r-8 border-r-purple-500'} 
                    border-y-8 border-y-transparent`}
                  ></div>
                </div>
              </div>

              {/* Event description box with purple glassmorphism */}
              <div className={`w-3/4 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                <div className="relative bg-purple-500/10 backdrop-blur-md border border-purple-500/20 p-8 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(170,0,255,0.5)] transition-all duration-300">
                  {/* Neon reflection / glow overlay */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/30 to-purple-800/20 opacity-20 rounded-full blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />

                  <h3 className="text-purple-400 text-4xl font-bold mb-4">{item.event}</h3>
                  <p className="text-white text-lg leading-relaxed">
                    {index % 2 === 0
                      ? 'Deep dive into expert insights and hands-on experience.'
                      : 'Build your skills with practical knowledge and innovative solutions.'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
