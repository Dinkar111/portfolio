export interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  location: string;
  achievements: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "VajraTech",
    period: "December 2024 - Present",
    type: "Full-time",
    location: "Lazimpat, Kathmandu, Nepal",
    color: "blue",
    achievements: [
      "Developed and maintained full stack web application features using React (frontend) and Laravel (backend), contributing to end-to-end product delivery for Apollo Aenergi",
      "Built RESTful APIs with Laravel to support dynamic data rendering in React, ensuring seamless client-server communication",
      "Implemented reusable React components to improve UI consistency and reduce development time across the application",
      "Collaborated with the team to debug and resolve application issues, improving overall system stability and user experience",
      "Participated in code reviews and followed best practices to maintain clean, scalable, and maintainable codebases"
    ]
  },
  {
    title: "Software Developer",
    company: "Galli Express",
    period: "January 2023 - December 2024",
    type: "Full-time",
    location: "Patan Dhoka, Lalitpur",
    color: "green",
    achievements: [
      "Developed a secure authentication system for B2B client management using Node Express.js, TypeScript, and MongoDB",
      "Built middleware ensuring secure access to APIs using API key authentication",
      "Implemented a Node.js cron job to automate daily tasks, including calculating total service usage for clients",
      "Developed a data visualization dashboard using Next.js with an interactive map built using MapLibre and GalliMaps"
    ]
  },
  {
    title: "Laravel Developer",
    company: "Airlift Technologies",
    period: "December 2021 - January 2023",
    type: "Full-time",
    location: "Bafal, Kathmandu",
    color: "purple",
    achievements: [
      "Developed backend functionalities for the GoTaxi ride-sharing application using Laravel and PostgreSQL",
      "Designed and implemented a relational database schema for the GoTaxi application, ensuring efficient data storage and retrieval",
      "Developed RESTful APIs for core functionalities including user authentication, ride request processing, driver matching, and CRUD operations",
      "Implemented Pusher sockets for real-time communication and Firebase push notifications for driver alerts"
    ]
  },
  {
    title: "Backend Developer (Trainee)",
    company: "Coding Mountain",
    period: "September 2021 - December 2021",
    type: "Trainee",
    location: "Mahalaxmistan, Lalitpur",
    color: "indigo",
    achievements: [
      "Contributed to the development of a Chromium-based browser by performing string manipulation tasks within the Python codebase",
      "Modified codebase using Python's regular expressions and string manipulation techniques to replace Chromium branding",
      "Actively participated in team discussions and collaborative development"
    ]
  },
  {
    title: "Backend Developer (Intern)",
    company: "Young Innovations",
    period: "June 2021 - September 2021",
    type: "Internship",
    location: "Mahalaxmistan, Lalitpur",
    color: "cyan",
    achievements: [
      "Focused on acquiring strong fundamentals in Python programming, including object-oriented programming principles",
      "Learned Git version control fundamentals for code management and collaboration",
      "Developed a command-line application using the Django web framework with model-view-template architecture",
      "Built a school management system utilizing Python, Django, and PostgreSQL with student records and grade management"
    ]
  },
  {
    title: "Backend Developer (Part-Time)",
    company: "Bhugol Technology",
    period: "July 2020 - November 2020",
    type: "Part-time",
    location: "Tamsipakha, Kathmandu",
    color: "rose",
    achievements: [
      "Built a backend using Express.js and MongoDB for the virtual tour application, focusing on CRUD operations",
      "Managed user and tour data storage and retrieval",
      "Actively participated in team discussions and brainstormed ideas for project improvements"
    ]
  }
];

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
  };
  about: string;
  skills: string;
  tagline: string;
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Dinkar Maharjan",
    title: "Full Stack Developer with expertise in React, Laravel, Node.js, and modern web technologies."
  },
  about: "I'm a Full Stack Developer with 4+ years of professional experience in building web applications and scalable systems. My expertise spans React for dynamic frontends, Laravel and Node.js for robust backend services, and PostgreSQL for reliable data management. I've successfully delivered projects ranging from ride-sharing platforms to real estate management systems and data visualization dashboards. I'm passionate about writing clean, maintainable code and collaborating with teams to build solutions that solve real-world problems.",
  skills: "React.js, Next.js, Node.js, Express.js, Laravel, Django, PostgreSQL, MongoDB, Docker, TypeScript, JavaScript, Git, RESTful APIs, Real-time Communication (Pusher, Firebase)",
  tagline: "Building scalable, user-focused web applications that drive results."
};