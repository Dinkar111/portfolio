export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Galli Maps",
    description: "Interactive map platform for Nepal",
    tech: ["Node.js", "MongoDB", "MapLibre"],
    link: "https://gallimaps.com/"
  },
  {
    title: "Apollo Green Solutions",
    description: "Energy management SaaS platform",
    tech: ["ReactJs", "Laravel", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Kantipur Properties",
    description: "Multi-tenant real estate platform",
    tech: ["Next.js", "Laravel", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Global Adventure and Travel",
    description: "Travel booking & payment system",
    tech: ["Laravel", "Gotrip Theme"],
    link: "#"
  }
];