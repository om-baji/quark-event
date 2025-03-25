import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

const sponsorsData = [
  {
    type: 'GOLD',
    logos: [
      { src: '#', alt: 'DarkRelay', link: 'https://www.darkrelay.com/' },
    ],
  },
  {
    type: 'COMMUNITY',
    logos: [
      { src: '#', alt: 'Payatu', link: 'https://payatu.com' },
      { src: '#', alt: 'YCF', link: 'https://ycfteam.in/' },
    ],
  },
  {
    type: 'REFRESHMENT',
    logos: [
      { src: '#', alt: 'Budhani', link: '#' },
    ],
  },
];

const Sponsors = () => {
  const COLORS_TOP = ["#000000", "#150050", "#3F0071", "#610094"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-[#150050] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Use animate instead of whileInView
    >
      <div className="max-w-5xl w-full relative">
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
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 sm:mb-16 text-white px-2"
          variants={itemVariants}
        >
          SPONSORS
        </motion.h2>

        <div className="flex flex-col gap-12">
          {sponsorsData.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-6"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {sponsor.type}
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsor.logos.map((logo, idx) => (
                  <motion.a
                    key={idx}
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-6 bg-purple-800/20 backdrop-blur-sm border border-purple-500/50 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32 relative overflow-hidden"
                    variants={itemVariants}
                    style={{
                      border,
                      boxShadow,
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <span className="text-white text-sm sm:text-base text-center relative z-10">Sponsor Image Here</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-white/70 mt-12"
          variants={itemVariants}
        >
          Thank You to our sponsors for the invaluable support and commitment to the community.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Sponsors;