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
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    type: "Full-time",
    location: "Remote",
    color: "blue",
    achievements: [
      "Led development of multi-tenant SaaS platform serving 10,000+ users, reducing infrastructure costs by 35%",
      "Architected and implemented scalable backend APIs using Laravel and PostgreSQL, handling 1M+ daily requests",
      "Built responsive frontend interfaces with Next.js, improving user engagement by 40%",
      "Mentored junior developers and established code review processes that improved code quality metrics"
    ]
  },
  {
    title: "Software Engineer",
    company: "InnovateLabs",
    period: "2020 - 2022",
    type: "Full-time",
    location: "On-site",
    color: "green",
    achievements: [
      "Developed and maintained e-commerce platform using Laravel backend and React frontend",
      "Optimized database queries and implemented caching strategies, reducing page load times by 60%",
      "Collaborated with cross-functional teams to deliver features on time and within budget",
      "Implemented automated testing and CI/CD pipelines, increasing deployment frequency by 3x"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    type: "Full-time",
    location: "Hybrid",
    color: "purple",
    achievements: [
      "Built RESTful APIs and database schemas for fintech application using Laravel and MySQL",
      "Contributed to frontend development using Vue.js and modern JavaScript frameworks",
      "Participated in agile development processes and sprint planning",
      "Learned and applied best practices for code quality, security, and performance optimization"
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
    title: "Software Engineer with 5 years of experience building scalable backend systems and SaaS platforms."
  },
  about: "I specialize in developing high-performance applications using Next.js for frontend interfaces, Laravel for robust backend APIs, and PostgreSQL for reliable data management. My expertise in multi-tenancy architectures has enabled efficient scaling for enterprise clients, reducing operational overhead by up to 40% through optimized database designs and caching strategies. I focus on delivering systems that prioritize security, maintainability, and user experience, consistently meeting tight deadlines while ensuring code quality through automated testing and continuous integration.",
  skills: "Proficient in full-stack development with Next.js, Laravel, and PostgreSQL, emphasizing performance optimization, multi-tenancy solutions, and scalable backend architectures.",
  tagline: "Engineering solutions that drive efficiency and reliability in complex software ecosystems."
};