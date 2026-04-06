// app/about/page.tsx
import { experiences, portfolioData } from "@/data/portfolio";


const colorClasses = {
  blue: {
    border: "border-blue-500",
    text: "text-blue-600 dark:text-blue-400"
  },
  green: {
    border: "border-green-500",
    text: "text-green-600 dark:text-green-400"
  },
  purple: {
    border: "border-purple-500",
    text: "text-purple-600 dark:text-purple-400"
  },
  indigo: {
    border: "border-indigo-500",
    text: "text-indigo-600 dark:text-indigo-400"
  },
  cyan: {
    border: "border-cyan-500",
    text: "text-cyan-600 dark:text-cyan-400"
  },
  rose: {
    border: "border-rose-500",
    text: "text-rose-600 dark:text-rose-400"
  }
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
        
        <section className="mb-10">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {portfolioData.about}
          </p>
        </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => {
                const colors = colorClasses[exp.color as keyof typeof colorClasses];
                return (
                    <div key={index} className={`border-l-4 ${colors.border} pl-6`}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className={`${colors.text} font-medium`}>{exp.company} • {exp.period}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.type} • {exp.location}</p>
                    {/* <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                        ))}
                    </ul> */}
                    </div>
                );
                })}
            </div>
        </section>
    
      </div>
    </main>
  );
}