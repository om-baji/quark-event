import { Code, PenTool, Users } from "lucide-react"
export const workshops = [
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