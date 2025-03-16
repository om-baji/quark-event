import React from 'react';
import { motion } from 'framer-motion';

const scheduleData = [
  {
    date: '1st April',
    event: 'Speaker Session',
    description: 'Deep dive into expert insights and hands-on experience from renowned speakers.',
  },
  {
    date: '2nd April',
    event: 'Workshop and Fun Activities',
    description: 'Engage in exciting workshops and fun-filled activities designed to boost creativity.',
  },
  {
    date: '3rd April',
    event: 'Workshops',
    description: 'Enhance your skills with practical workshops led by industry professionals.',
  },
  {
    date: '4th April',
    event: 'Fun Activities',
    description: 'Relax and unwind with entertaining activities and interactive sessions.',
  },
  {
    date: '5th April',
    event: 'Hackathon',
    description: 'Participate in an intense hackathon and bring your innovative ideas to life.',
  },
];

const Schedule = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center py-16 px-4">
      <div className="max-w-5xl w-full relative">

        {/* Title */}
        <motion.h2
          whileHover={{ rotateX: 5, rotateY: -5 }}
          transition={{ type: 'spring', stiffness: 80 }}
          style={{
            textShadow: `
              0 1px 0 #ccc,
              0 2px 0 #c9c9c9,
              0 3px 0 #bbb,
              0 4px 0 #b9b9b9
            `,
          }}
          className="text-6xl font-extrabold text-center mb-16 text-white"
        >
          SCHEDULE
        </motion.h2>

        {/* Timeline Container */}
        <div className="flex flex-col gap-16 relative">

          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-800 opacity-40 rounded-full z-0" />

          {scheduleData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`flex w-full items-center justify-between relative ${isEven ? '' : 'flex-row-reverse'}`}
              >
                {/* Date Box */}
                <div className={`w-2/5 flex ${isEven ? 'justify-end pr-4' : 'justify-start pl-4'}`}>
                  <div className="bg-purple-600 text-white font-black px-8 py-6 rounded relative flex items-center text-2xl shadow-md border border-purple-400/50">
                    <span>{item.date}</span>

                    {/* Arrow */}
                    <div className={`absolute top-1/2 ${isEven ? 'left-full' : 'right-full'} -translate-y-1/2 w-0 h-0 
                      ${isEven ? 'border-l-8 border-l-purple-600' : 'border-r-8 border-r-purple-600'}
                      border-y-8 border-y-transparent`} />
                  </div>
                </div>

                {/* Dot in center */}
                <div className="relative z-10 flex justify-center items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full shadow-md border border-purple-400" />
                </div>

                {/* Event Box */}
                <motion.div
                  whileHover={{
                    scale: 1.06,
                    boxShadow: '10px 1px 40px rgba(170, 0, 255, 0.24)',
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                  className={`w-2/5 flex ${isEven ? 'justify-start pl-4' : 'justify-end pr-4'}`}
                >
                  <div className="relative bg-purple-800/20 backdrop-blur-sm border border-purple-500/50 p-6 rounded-3xl shadow-md transition-all duration-300">
                    <h3 className="text-purple-300 text-2xl font-semibold mb-4">{item.event}</h3>
                    <p className="text-white text-base leading-relaxed">
                      {item.description}
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
