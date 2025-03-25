import React, { useEffect } from "react";
import envisionImage from "../assets/envision.jpg"; // Ensure this path is correct
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";

const COLORS_TOP = ["#000000", "#150050", "#3F0071", "#610094"];

const About = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundColor = useMotionTemplate`${color}`;

  return (
    <motion.section
      style={{ backgroundColor }}
      className="text-white py-16 px-6 rounded-xl shadow-lg w-full md:w-3/4 mx-auto relative"
    >
      <div className="text-center relative">
        <motion.h2
          className="text-3xl font-bold text-[#3F0071] glitter-text"
          initial={{ opacity: 1 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Envision 24-25
        </motion.h2>
        {/* Sparkle effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="sparkle-animation"></div>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center gap-6 relative">
        {/* Left Side - Image with Effects */}
        <div className="md:w-1/2 relative">
          <motion.img
            src={envisionImage}
            alt="Envision Event"
            className="rounded-lg shadow-md w-full object-cover transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-white">
          <h3 className="text-xl font-semibold text-[#3F0071]">Open Source</h3>
          <p className="mt-2 text-gray-300">
            <span className="text-[#610094] font-semibold">Envision</span> was a transformative journey where imagination met innovation. 🚀
            Attendees experienced cutting-edge <span className="text-[#610094]">AI insights</span>, hands-on learning, and
            inspiring talks from industry leaders.
          </p>

          {/* Additional AI Workshop Info */}
          <div className="mt-6 p-4 border-l-4 border-[#610094] bg-[#150050]/20 rounded-lg shadow-md">
            <p className="text-lg font-bold text-[#00FFFF]">Hey there, 👋</p>
            <p className="mt-2 italic text-gray-300">
              Artificial intelligence is not a science fiction anymore; It's a <span className="text-[#00FFFF] font-semibold">rock concert.✨</span>
            </p>
            <p className="mt-2 text-gray-300">
              Are you ready to rock and roll with Artificial Intelligence? Join us at our upcoming 
              <span className="text-[#00FFFF] font-semibold"> AI Workshop and Speaker Session</span> to learn 
              about the latest trends and applications in this exciting field.
            </p>
            <p className="mt-2 text-[#00FFFF] font-bold">Don't miss this great opportunity 🏆!</p>

            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
              <li>🔥 <span className="font-semibold text-[#00FFFF]">Insightful speaker session</span> on trends in AI.</li>
              <li>📐 Understanding the <span className="font-semibold text-[#00FFFF]">Mathematics behind AI.</span></li>
              <li>🤖 Amazing projects using <span className="text-[#00FFFF] font-semibold">Neural Networks, Transfer Learning, NLP.</span></li>
              <li>🤝 Connecting like-minded people & participating as a team.</li>
              {/* <li>🚀 Hands-on <span className="font-semibold text-[#00FFFF]">Model Deployment</span> using Flask & Flutter.</li> */}
              <li>🎉 Certificate of participation & exciting goodies!</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;