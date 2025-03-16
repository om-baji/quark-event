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
      <div className="max-w-5xl w-full relative">

        {/* Title */}
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
          className="text-8xl font-extrabold text-center mb-24 text-white animate-shine-3d"
        >
          SCHEDULE
        </motion.h2>

        {/* Timeline Container */}
        <div className="flex flex-col gap-24 relative">

          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-800 opacity-50 animate-pulse rounded-full z-0" />

          {scheduleData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex w-full items-center justify-between relative ${isEven ? '' : 'flex-row-reverse'}`}
              >
                {/* Date Box */}
                <div className={`w-2/5 flex ${isEven ? 'justify-end pr-4' : 'justify-start pl-4'}`}>
                  <div className="bg-purple-500 text-white font-bold px-10 py-6 rounded relative flex items-center text-2xl shadow-[0_0_25px_rgba(170,0,255,0.8)]">
                    <span>{item.date}</span>
                    <div className={`absolute top-1/2 ${isEven ? 'left-full' : 'right-full'} -translate-y-1/2 w-0 h-0 
                      ${isEven ? 'border-l-8 border-l-purple-500' : 'border-r-8 border-r-purple-500'}
                      border-y-8 border-y-transparent`} />
                  </div>
                </div>

                {/* Dot in center */}
                <div className="relative z-10 flex justify-center items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(170,0,255,0.8)] animate-pulse" />
                </div>

                {/* Event Box */}
                <div className={`w-2/5 flex ${isEven ? 'justify-start pl-4' : 'justify-end pr-4'}`}>
                  <div className="relative bg-purple-500/10 backdrop-blur-md border border-purple-500/20 p-10 rounded-2xl shadow-lg hover:shadow-[0_0_50px_rgba(170,0,255,0.5)] transition-all duration-300">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/30 to-purple-800/20 opacity-20 rounded-full blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
                    
                    <h3 className="text-purple-400 text-3xl font-bold mb-6">{item.event}</h3>
                    <p className="text-white text-lg leading-relaxed">
                      {isEven
                        ? 'Deep dive into expert insights and hands-on experience.'
                        : 'Build your skills with practical knowledge and innovative solutions.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
