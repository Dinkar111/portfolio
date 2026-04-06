import { Projects, Connect } from "@/components";
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
  }
};

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {portfolioData.hero.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {portfolioData.hero.title}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">About</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          {portfolioData.about}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {portfolioData.skills}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color as keyof typeof colorClasses];
            return (
              <div key={index} className={`border-l-4 ${colors.border} pl-6`}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className={`${colors.text} font-medium`}>{exp.company} • {exp.period}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.type} • {exp.location}</p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>• {achievement}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="text-center mb-16">
        <p className="text-2xl font-medium italic text-gray-800 dark:text-gray-200">
          {portfolioData.tagline}
        </p>
      </section>

      <Projects />
      <Connect />
    </main>
  );
}