// =============================================
// PORTFOLIO DATA — Edit this file to customize
// =============================================

export const personalInfo = {
  name: "Amit Kapri",
  taglines: [
    "Full Stack Developer",
    "React Enthusiast",
    "Node.js Developer",
    "Problem Solver",
    // "Open Source Contributor",
  ],
  bio: `I'm a passionate Full Stack Developer with a knack for building clean, 
  efficient, and user-friendly web applications. I love turning complex problems 
  into simple, beautiful, and intuitive designs.`,
  location: "India",
  email: "akapri082@gmail.com",
  phone: "+91 84499 05193",
  resumeLink: "/resume.pdf",
  socials: {
    github: "https://github.com/amitKapri08",
    linkedin: "https://www.linkedin.com/in/amit-kapri/",
    // twitter: "https://twitter.com/yourusername",
    // instagram: "https://instagram.com/yourusername",
  },
};

export const skills = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Next.js", level: 70 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 83 },
    { name: "Python", level: 75 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 65 },
  ],
  Database: [
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 72 },
    { name: "Redis", level: 70 },
  ],
  Tools: [
    { name: "Git / GitHub", level: 92 },
    { name: "Docker", level: 68 },
    // { name: "AWS", level: 60 },
    { name: "Figma", level: 70 },
    { name: "Linux", level: 75 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "LPO Locum",
    description:
      "Developed a full-stack job booking platform connecting LPOs and contractors, featuring real-time communication, secure Stripe payments, availability management, and location-based job discovery.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    // github: "https://github.com/yourusername/project1",
    live: "https://www.givemeabreak.com.au/",
    featured: true,
    // image: null, // Add image URL if available
  },
  {
    id: 2,
    title: "Pricemarket",
    description:
      "Developed a full-stack classifieds marketplace for vehicles and real estate, featuring advanced search, real-time chat, secure image uploads, geolocation, and multilingual support.",
    tags: ["React", "Socket.io", "Express", "JWT", "MongoDB"],
    // github: "https://github.com/yourusername/project2",
    live: "https://staging.pricemarket.com",
    featured: true,
    image: null,
  },
  // {
  //   id: 3,
  //   title: "Task Management Dashboard",
  //   description:
  //     "A Kanban-style project management tool with drag-and-drop, team collaboration, and analytics. Inspired by Trello but built from scratch.",
  //   tags: ["React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
  //   github: "https://github.com/yourusername/project3",
  //   live: "https://project3.example.com",
  //   featured: false,
  //   image: null,
  // },
  // {
  //   id: 4,
  //   title: "Weather Forecast App",
  //   description:
  //     "A beautiful weather application with 7-day forecasts, location detection, and animated weather icons powered by OpenWeatherMap API.",
  //   tags: ["React", "OpenWeatherMap API", "CSS Animations"],
  //   github: "https://github.com/yourusername/project4",
  //   live: "https://project4.example.com",
  //   featured: false,
  //   image: null,
  // },
  // {
  //   id: 5,
  //   title: "Blog CMS Platform",
  //   description:
  //     "A headless CMS with a rich text editor, SEO optimization, comment system, and custom analytics dashboard.",
  //   tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "Vercel"],
  //   github: "https://github.com/yourusername/project5",
  //   live: "https://project5.example.com",
  //   featured: false,
  //   image: null,
  // },
];

export const experience = [
  // {
  //   id: 1,
  //   role: "Senior Full Stack Developer",
  //   company: "Tech Company Inc.",
  //   period: "2023 — Present",
  //   location: "Remote",
  //   description: [
  //     "Led development of microservices architecture serving 100k+ daily users",
  //     "Reduced API response time by 40% through query optimization and caching",
  //     "Mentored 3 junior developers and conducted weekly code reviews",
  //     "Built CI/CD pipelines using GitHub Actions, reducing deployment time by 60%",
  //   ],
  //   tech: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  // },
  {
    id: 2,
    role: "MERN Developer",
    company: "VQCodes ",
    period: "2025 — 2026",
    location: "Mohali, India",
    description: [
      "Developed and maintained 3+ client-facing web applications from scratch",
      "Integrated third-party APIs including Stripe and Google Maps",
      "Collaborated with designers to implement pixel-perfect UI components",
      // "Improved app performance score from 65 to 95 on Google Lighthouse",
    ],
    tech: [
      "React",
      "Express.js",
      "MongoDB",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer Trainee",
    company: "ToXSL",
    period: "2024",
    location: "Mohali, India",
    description: [
      "Built responsive landing pages and marketing sites",
      "Converted Figma designs into interactive React components",
      // "Participated in Agile sprints and daily stand-ups",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
];

export const education = [
  {
    degree: "M.C.A",
    institution: "Graphic Era Hill University, Dehradun",
    period: "2044 — 2024",
    location: "India",
    gpa: "7.61 / 10",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Understanding React Server Components",
    summary:
      "A deep dive into React Server Components, how they work, and when you should use them in your projects.",
    date: "Nov 2024",
    readTime: "8 min read",
    tags: ["React", "Next.js", "Performance"],
    link: "#",
  },
  {
    id: 2,
    title: "Building Scalable REST APIs with Node.js",
    summary:
      "Best practices for structuring, securing, and scaling REST APIs using Node.js and Express.",
    date: "Oct 2024",
    readTime: "12 min read",
    tags: ["Node.js", "API Design", "Backend"],
    link: "#",
  },
  {
    id: 3,
    title: "Docker for Developers: A Practical Guide",
    summary:
      "Everything you need to know to containerize your applications and streamline your development workflow.",
    date: "Sep 2024",
    readTime: "10 min read",
    tags: ["Docker", "DevOps", "Containers"],
    link: "#",
  },
];
