import { Projects, Connect } from "@/components";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      <Hero />
      <Services />
    </main>
  );
}