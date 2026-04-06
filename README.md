# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🏗️ Architecture

### Component Organization

- **`/components/`** - Reusable components that can be used across different projects
  - `Projects` - Horizontal scrolling project showcase
  - `Connect` - Social media links component

- **`app/page.tsx`** - Main portfolio page with data-driven sections
  - Hero, About, Skills, Experience, Tagline sections sourced from `/data/portfolio.ts`

- **`/data/`** - Centralized content and data management
  - `portfolio.ts` - Experience history, personal content, and portfolio data
  - `projects.ts` - Project showcase data with TypeScript interfaces

### Features

- ⚡ Next.js 16 with App Router
- 🎨 Tailwind CSS v4 with dark mode
- 📱 Fully responsive design
- ♿ Accessibility-first approach
- 🔧 TypeScript for type safety
- 🎯 Component-based architecture

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with theme provider
│   └── page.tsx        # Main portfolio page (data-driven sections)
├── components/         # Reusable components
│   ├── Projects.tsx    # Project showcase component
│   ├── Connect.tsx     # Social media links component
│   ├── ThemeProvider.tsx # Theme context provider
│   ├── ThemeToggle.tsx # Theme toggle button
│   └── ErrorBoundary.tsx # Error boundary component
├── data/               # Portfolio data and content
│   ├── portfolio.ts    # Experience, about, skills, and other content
│   └── projects.ts     # Project data and interfaces
```
│   ├── Connect.tsx     # Social links component
│   ├── ErrorBoundary.tsx # Error handling
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   └── index.ts        # Barrel exports
├── data/               # Static data
│   └── projects.ts     # Project data
└── public/             # Static assets
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
