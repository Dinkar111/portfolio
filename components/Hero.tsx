'use client';

import { portfolioData } from "@/data/portfolio";
import { socialLinks } from "@/data/socialLinks";

export default function Hero() {
  return (
    <section className="w-full flex justify-center mt-10 px-4">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 
                      rounded-3xl p-6 md:p-10 shadow-sm">

        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* LEFT CONTENT */}
          <div className="flex-1">
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">{portfolioData.hero.name}</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-200">
              {portfolioData.hero.title}
            </h2>

            {/* <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              {portfolioData.hero.description}
            </p> */}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                📍 {portfolioData.hero.location}
              </span>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="border border-gray-300 dark:border-gray-600 
                               px-6 py-2 rounded-full text-sm font-medium
                               text-gray-700 dark:text-gray-300 
                               hover:bg-gray-100 dark:hover:bg-gray-800 
                               transition-colors">
                Download CV
              </button>
            </div>

            {/* Social Icons - Reusing from socialLinks */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm text-gray-600 dark:text-gray-400">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             transition-all duration-300 hover:scale-110"
                    aria-label={link.ariaLabel}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 
                            rounded-full blur-3xl opacity-20"></div>
              <img
                src="/images/hero.png"
                alt={portfolioData.hero.name}
                className="w-64 md:w-80 object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}