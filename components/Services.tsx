'use client';

import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiLaravel, SiDjango,
  SiPostgresql, SiMongodb, SiDocker, SiTypescript, SiJavascript, SiGit,
  SiTailwindcss, SiFirebase
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Architectures",
    icon: "🎨",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend Architectures",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "🗄️",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  }
];

export default function Services() {
  return (
    <section className="w-full flex flex-col justify-center mt-10 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Passionate about modern web technologies
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 
                       border border-gray-200 dark:border-gray-700
                       hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: skill.color }} />
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}