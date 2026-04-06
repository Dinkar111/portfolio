export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Galli Maps",
    description: "Developed a comprehensive mapping platform for location-based services, utilizing Next.js for a responsive frontend with interactive maps, Laravel for robust backend APIs handling geospatial data, and PostgreSQL for efficient storage and querying of location data. Implemented performance optimizations to handle high-volume requests, ensuring fast load times and scalability.",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Leaflet", "Redis"],
    link: "#"
  },
  {
    title: "Aenergi",
    description: "Built a SaaS platform for energy management and analytics, featuring multi-tenancy to support multiple organizations. Leveraged Laravel for secure backend systems, PostgreSQL for data integrity, and optimized caching strategies to reduce operational costs by 35%. Focused on backend performance and scalability to process real-time energy data efficiently.",
    tech: ["Laravel", "PostgreSQL", "Redis", "Docker", "AWS"],
    link: "#"
  },
  {
    title: "Kantipur Properties",
    description: "Created a multi-tenant real estate platform for property listings and management, using Laravel for backend logic and PostgreSQL for relational data. Implemented advanced search and filtering capabilities, ensuring high performance for large datasets. Emphasized security and user experience in a multi-tenant architecture serving thousands of concurrent users.",
    tech: ["Laravel", "PostgreSQL", "Next.js", "Tailwind CSS", "JWT"],
    link: "#"
  },
  {
    title: "Global Adventure",
    description: "Engineered a backend system for a global adventure travel booking platform, integrating Laravel APIs with PostgreSQL for transaction handling and user data. Optimized for performance in handling peak loads, with multi-tenancy support for different travel agencies. Ensured reliability and security in processing bookings and payments.",
    tech: ["Laravel", "PostgreSQL", "Stripe API", "Docker", "Kubernetes"],
    link: "#"
  }
];