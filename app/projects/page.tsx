import { Projects } from "@/components";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        My Projects
      </h1>
      <Projects />
    </main>
  );
}