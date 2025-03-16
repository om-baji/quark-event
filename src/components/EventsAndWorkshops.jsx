import { motion } from "framer-motion"
import { Clock, Code, MapPin, PenTool, TrophyIcon, Users } from "lucide-react"
import { useState } from "react"
const workshops = [
  {
    title: "Introduction to Generative Models",
    description: "Learn the fundamentals of generative AI models and their applications.",
    icon: <PenTool className="h-5 w-5" />,
    instructor: "Dr. Sarah Chen",
    time: "Day 1 - 10:00 AM",
    location: "Main Hall",
  },
  {
    title: "Prompt Engineering Masterclass",
    description: "Master the art of crafting effective prompts for various AI models.",
    icon: <Code className="h-5 w-5" />,
    instructor: "Prof. James Wilson",
    time: "Day 1 - 2:00 PM",
    location: "Workshop Room A",
  },
  {
    title: "Building GenAI Applications",
    description: "Hands-on session on developing applications powered by generative AI.",
    icon: <Code className="h-5 w-5" />,
    instructor: "Alex Rodriguez",
    time: "Day 2 - 10:00 AM",
    location: "Tech Lab",
  },
  {
    title: "Ethics in AI Generation",
    description: "Explore the ethical considerations and responsible use of generative AI.",
    icon: <Users className="h-5 w-5" />,
    instructor: "Dr. Maya Patel",
    time: "Day 2 - 3:00 PM",
    location: "Discussion Hall",
  },
]
const hackathon = {
  title: "ENVISION Hackathon 2025",
  description:
    "A 24-hour hackathon challenging teams to build innovative solutions using generative AI technologies. Compete for prizes and recognition in the GenAI community.",
  timeline: [
    {
      title: "Registration & Team Formation",
      time: "Day 2 - 6:00 PM",
      description: "Register your team or join one at the event.",
    },
    {
      title: "Kickoff & Challenge Announcement",
      time: "Day 2 - 8:00 PM",
      description: "The hackathon begins with the announcement of challenges.",
    },
    {
      title: "Hacking Period",
      time: "Day 2 8:00 PM - Day 3 8:00 PM",
      description: "24 hours of intense development and innovation.",
    },
    {
      title: "Project Submissions",
      time: "Day 3 - 8:00 PM",
      description: "Submit your projects for evaluation.",
    },
    {
      title: "Presentations & Judging",
      time: "Day 3 - 9:00 PM",
      description: "Present your solution to judges and attendees.",
    },
    {
      title: "Awards Ceremony",
      time: "Day 3 - 11:00 PM",
      description: "Winners announced and prizes awarded.",
    },
  ],
  prizes: [
    "First Place: $10,000 + Mentorship Opportunities",
    "Second Place: $5,000 + Cloud Credits",
    "Third Place: $2,500 + Hardware Packages",
    "People's Choice: $1,500",
  ],
}


export default function EventAndWorkshops() {
  const [selectedMode, setSelectedMode] = useState("1");
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="flex flex-col items-center">
      <div>
        <motion.div className="bg-black rounded-sm shadow-lg flex p-1 z-50"
          initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.4 }}>
          <button
            className={`py-1 px-3 rounded-sm ${selectedMode === "1" ? "bg-[#610094] font-bold" : "bg-black"}`}
            onClick={() => setSelectedMode("1")}>
            Workshops
          </button>
          <button
            className={`py-1 px-3 rounded-sm ${selectedMode === "2" ? "bg-[#610094] font-bold" : "bg-black"}`}
            onClick={() => setSelectedMode("2")}>
            Hackathons
          </button>
        </motion.div>
      </div>

      {selectedMode === "1" ? <Workshop /> : <Hackathon />}
    </motion.div>
  );
}

function Workshop() {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {workshops.map((workshop, index) => (
        <motion.div key={index} className="w-full bg-black p-6 rounded-md text-white "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >

          <div className="flex items-center justify-between mb-4">
            <div className="w-min p-2 rounded-full bg-[#610094] text-black">
              {workshop.icon}
            </div>
            <div className="flex items-center text-xs text-gray-400 mt-1">
              <Clock size={14} className="mr-1" />
              {workshop.time}
            </div>
          </div>
          <p className="text-sm mb-4 opacity-60">Instructor: {workshop.instructor}</p>
          <h2 className="text-lg font-bold mb-2 opacity-80">{workshop.title}</h2>
          <p className="opacity-50 mb-3">{workshop.description}</p>
          <div className="flex items-center text-xs text-gray-400">
            <MapPin size={14} className="mr-1" />
            {workshop.location}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function Hackathon() {
  return (
    <motion.div className="bg-black text-white p-4 m-6 flex flex-col items-center rounded-xl"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="p-8 max-w-3xl">
        <TrophyIcon className="p-2 opacity-60 text-white w-10 h-10 bg-[#610094] rounded-full" />
        <p className="mt-2">{hackathon.description}</p>
        <div className="text-[#610094] mt-6 text-xl font-bold">Timeline</div>
        <div className="mt-4 border-l-2 border-[#150050] pl-4 space-y-6">
          {hackathon.timeline.map((item, index) => (
            <motion.div key={index} className="relative" whileHover={{ scale: 1.05 }}>
              <div className="absolute left-[-25px] top-2 w-4 h-4 bg-[#610094] rounded-full"></div>
              <div className="text-gray-400 font-bold">{item.title}</div>
              <p className="text-gray-500 text-sm">{item.time}</p>
              <p className="text-gray-300 text-sm mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

