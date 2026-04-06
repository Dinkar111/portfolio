// components/Projects.tsx
import { projects } from "@/data/projects";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectsProps {
  projects?: Project[];
  title?: string;
  description?: string;
}

export default function Projects({
  projects: projectData = projects,
  title = "Projects",
  description = "Explore my recent work and contributions."
}: ProjectsProps) {
  return (
    <section className="mb-16">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectData.map((project) => (
          <div 
            key={project.title} 
            className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 
                     bg-white dark:bg-gray-800/50 
                     hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600
                     hover:-translate-y-1 transition-all duration-300"
          >
            {/* Project Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 
                           text-gray-700 dark:text-gray-300 rounded-md text-xs
                           border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Project Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 
                       hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium
                       group-hover:gap-2 transition-all"
            >
              View Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}