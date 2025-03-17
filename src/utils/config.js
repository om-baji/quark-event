export const sections = ["about", "events", "schedule", "sponsors"];

export const hackathon = {
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
};

export const tabVariants = {
  inactive: {
    backgroundColor: "#000000",
    color: "#ffffff",
    transition: { duration: 0.3 },
  },
  active: {
    backgroundColor: "#610094",
    color: "#ffffff",
    fontWeight: "bold",
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export const containerVariants = {
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

export const contentVariants = {
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
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

export const scheduleData = [
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
