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
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        {description}
      </p>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max">
          {projectData.map((project) => (
            <div key={project.title} className="w-72 flex-shrink-0 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg dark:hover:shadow-xl transition-all bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-gray-800 dark:text-gray-200 px-1 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}