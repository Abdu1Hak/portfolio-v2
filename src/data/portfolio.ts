export interface Interest {
  title: string;
  subtitle: string;
  description: string;
  icon: string; // lucide icon identifier
  color: string; // accent color class
}

export interface Goal {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Award {
  title: string;
  subtitle: string;
  icon: string;
}
export interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string;
  links?: {
    code?: string;
    demo?: string;
    share?: string;
  };
  wide?: boolean;
  imageZoom?: number;
}

export interface Metric {
  value: string;
  label: string;
}
export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  icon: string;
  iconZoom?: number;
}
export interface PortfolioData {
  profile: {
    name: string;
    bio: string;
    subBio: string;
    badgeText: string;
    avatar?: string;
    version: string;
  };
  interests: Interest[];
  goals: Goal[];
  awards: Award[];
  projects: Project[];
  metrics: Metric[];
  experience: WorkExperience[];
  socials: {
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}
export const portfolioData: PortfolioData = {
  profile: {
    name: "Abdul Farooqi",
    bio: "Interested in building impactful Software, and exploring research in AI/ML and Robotics.",
    subBio: "",
    badgeText: "Incoming Mathematics @ University of Waterloo", 
    version: "v2.0.0-stable",
  },
  interests: [
    {
      title: "AI & ML",
      subtitle: "AI & ML",
      description: "Interested in training and adapting AI models to learn, reason and interact with the world.",
      icon: "brain",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Software Development",
      subtitle: "Software Development",
      description: "Building projects and tools that solve problems and make impact with emerging technologies",
      icon: "banknote",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Robotics",
      subtitle: "Robotics",
      description: "Exploring embedded robotics software through autonomous navigation and computer vision projects",
      icon: "cpu",
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
  ],
  goals: [
    {
      title: "Building My Toolkit",
      subtitle: "Scaling Systems",
      description: "Aiming to develop a strong foundation of skills in software development, AI/ML and robotics.",
      icon: "database",
    },
    {
      title: "Social Good",
      subtitle: "Social Good",
      description: "Leveraging tech to solve accessibility and education inequities.",
      icon: "heart",
    },
  ],
  awards: [
    {
      title: "Kohler Co. College Scholarship ",
      subtitle: "Awarded $22,000+ in scholarship for academic excellence and leadership activities.",
      icon: "",
    },
    {
      title: "President's Scholarship of Distinction",
      subtitle: "Awarded $2,000 by the University of Waterloo for academic excellence.",
      icon: "graduation-cap",
    },
    {
      title: "National Robotics Competitior",
      subtitle: "Competed at the World Robot Olympiad Future Engineers Autonomous Car Competition.",
      icon: "code-2",
    },
  ],
  projects: [
    {
      title: "Wiring AI  ⚡",
      tags: ["Python", "ReactFlow", "NEXT"],
      description: "An AI-powered web app that helps users select and share electronic components, and generates safe wiring diagrams with step-by-step instructions.",
      image: "/projects/wiring.png",
      imageZoom: 1.2,
      links: {
        code: "https://github.com/Abdu1Hak/Wiring-AI",
      },
    },
    {
      title: "Autonomous Driving Car 🏎️ ",
      tags: ["OpenCV", "RPi5", "Python"],
      description: "Used a RPi 5, camera, gyro and other sensors to autonomously navigate a track of obstacles using OpenCV and control algorithms for the WRO National Competition.",
      image: "/projects/wro.png",
      imageZoom: 1.3,
      links: {
        code: "https://github.com/Abdu1Hak/WRO-2025",
        external: "https://www.youtube.com/watch?v=6I9Gbuce6gA",
      },
    },
    {
      title: "VEX Robots -  School Competition Winner 🏆 ",
      tags: ["VEX V5", "Engineering", "Design"],
      description: "VEX Minefield Challenge Robot - 1st Place at my secondary school.",
      image: "/projects/vex.png",
      imageZoom: 1.9,
      links: {
      },
    },
    {
      title: "Youtube Search Automation Tool",
      tags: ["Numpy", "Python", "Yotube Data API v3"],
      description: "A Python automation tool to identify and categorize niche-specific YouTube influencers using advanced content and engagement filters.",
      image: "/projects/yt.png",
      imageZoom: 1,
      links: {
        code: "https://github.com/Abdu1Hak/Youtube-Search-Auto",
      },
    },
    {
      title: "ScamGuard AI ",
      tags: ["Hugging Face", "OpenAI", "JS"],
      description: "This AI-based application provides an accurate way to determine the likelihood that a message is a scam. It does this by analyzing messages in three distinct ways to give you a well-rounded response.",
      image: "/projects/sg.png",
      imageZoom: 1.2,
      links: {
        code: "https://github.com/Abdu1Hak/ScamGuard-AI",
      },
    },
    {
      title: "Ghost Hunter - 2D Video Game 🎮",
      tags: ["Pygame"],
      description: "A thrilling 2D shooter game where you shoot and survive against ghosts!",
      image: "/projects/g.png",
      imageZoom: 1,
      links: {
        code: "https://github.com/abdulfarooqi/shadertoy-mcp",
        external: "https://www.youtube.com/watch?v=KwB9VN-NzYQ",

      },
    },
    {
      title: "Custom GPT...",
      tags: ["ML", "AI", "Python"],
      description: "Active Project in progression",
      image: "/projects/rocket.jpg",
      imageZoom: 1,
      links: {
        code: "",
      },
    },
  ],
  metrics: [
    {
      value: "3+",
      label: "Years of Coding Experience",
    },
  ],
  experience: [
    {
      role: "Software Developer Intern",
      company: "ServiceDeck",
      duration: "July 2025 - Aug 2025",
      description: [
        "Prototyped architecture for a production-ready AI WhatsApp agent that automates request and quote generation using Python, Twilio, and Azure AI.",
        "Built an Excel data importer to normalize 4,000+ records in minutes, reducing the onboarding time for client data integration effort by 80%.",
      ],
      icon: "/projects/servicedeck.png",
    },
    {
      role: "Firmware Engineer Member",
      company: "Electrium Mobility",
      duration: "Jan 2025 - Apr 2025",
      description: [
        "Developed ESP32 firmware using ESP-IDF (C/C++), implementing GPIO interrupt-driven wake-up and deep sleep power management to reduce idle power consumption after 3 minutes of inactivity.",
        "Engineered an SSD1306 OLED startup interface, troubleshooting display timing and hardware integration issues.",
      ],
      icon: "/projects/electrium.png",
    },
    {
      role: "Robotics Competitor",
      company: "Zebra Robotics",
      duration: "Jan 2025 - Sep 2025",
      description: [
        "Competed in the WRO Future Engineers Autonomous Car Challenge at the national level.",
        "Designed and tested autonomous navigation strategies under competition constraints.",
      ],
      icon: "/projects/zebra.png",
    },
    {
      role: "Robotics Instructor",
      company: "Al-Manarat Summer Camp",
      duration: "July 2024 - Aug 2024",
      description: [
        "Taught robotics and coding to 60+ students using VEX V5 and IQ kits.",
        "Created hands-on lessons to make engineering concepts accessible and engaging.",
      ],
      icon: "/projects/almanarat.png",
    },
  ],
  socials: {
    email: "abdulfarooqi2008@gmail.com",
    github: "https://github.com/Abdu1Hak",
    linkedin: "https://www.linkedin.com/in/abdul-farooqi-056632326/",
    twitter: "https://x.com/abdul_faro44279",
  },
};
