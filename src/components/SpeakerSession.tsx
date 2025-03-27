import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Youtube, Github } from "lucide-react";

const SpeakerSessions: React.FC = () => {
  const speaker = {
    name: "Riti Kumari",
    title: "Software Engineer",
    company: "Walmart",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGx8g6Vaq6wYw/profile-displayphoto-shrink_400_400/B56ZSTnORLGQAg-/0/1737643322231?e=1748476800&v=beta&t=_7pWhZ0AwLo6vV327yns4loodcWEqQKdItCkwLI-_cQ",
    bio: "Riti Kumari is a Software Engineer at Walmart and a popular content creator known for her insightful DBMS courses on YouTube. Featured on Striver's TakeUForward platform, she is passionate about making complex technical concepts accessible to learners.",
    socialMedia: {
      twitter: "https://twitter.com/riti2409",
      linkedin: "https://www.linkedin.com/in/riti2409/",
      youtube: "https://www.youtube.com/@RitiKumari",
      github: "https://github.com/riti2409"
    },
    sessionTime: "2:00 PM - 3:30 PM",
    sessionLocation: "Sharad Arena",
    sessionTopic: "Database Management Systems Insights"
  };

  const renderSocialIcon = (platform: string, url: string) => {
    const iconProps = {
      className: "w-6 h-6 text-gray-300 hover:text-white transition-colors",
      onClick: () => window.open(url, '_blank')
    };

    switch (platform) {
      case 'twitter': return <Twitter {...iconProps} />;
      case 'linkedin': return <Linkedin {...iconProps} />;
      case 'youtube': return <Youtube {...iconProps} />;
      case 'github': return <Github {...iconProps} />;
      default: return null;
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full min-h-screen bg-[#150050] p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        Speakers Session
      </motion.h1>

      <motion.div
        className="bg-black rounded-2xl w-full max-w-4xl p-4 sm:p-8 border border-gray-800 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20
        }}
      >
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-700 mb-4 sm:mb-0 sm:mr-8"
          />
          <div className="text-center sm:text-left w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{speaker.name}</h2>
            <p className="text-base sm:text-xl text-purple-300 mb-1">
              {speaker.title} at {speaker.company}
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 text-center sm:text-left">
          {speaker.bio}
        </p>

        <div className="bg-gray-800 rounded-xl p-4 mb-6 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Session Details</h3>
          <div className="text-gray-300 text-sm sm:text-base">
            <p className="mb-1">
              <span className="font-medium text-purple-400">Topic:</span> {speaker.sessionTopic}
            </p>
            <p className="mb-1">
              <span className="font-medium text-purple-400">Time:</span> {speaker.sessionTime}
            </p>
            <p>
              <span className="font-medium text-purple-400">Location:</span> {speaker.sessionLocation}
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6">
          {Object.entries(speaker.socialMedia).map(([platform, url]) => (
            <motion.div
              key={platform}
              className="cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {renderSocialIcon(platform, url)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpeakerSessions;
