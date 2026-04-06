# Components

This directory contains all components for the portfolio - both reusable components that can be used across different projects and portfolio-specific components.

## Component Types

### Reusable Components
- **`Projects`** - Horizontal scrolling project showcase with customizable data
- **`Connect`** - Social media links component with configurable links
- **`ErrorBoundary`** - React error boundary for graceful error handling

### Portfolio-Specific Components
- **`Hero`** - Personal branding and introduction
- **`About`** - Professional biography
- **`Skills`** - Technical expertise
- **`Tagline`** - Personal motto
- **`ThemeProvider`** - Theme context provider
- **`ThemeToggle`** - Theme toggle button

## Usage

```tsx
import { Hero, About, Projects, Connect } from "@/components";

// Portfolio-specific (no props needed)
<Hero />
<About />

// Reusable (with optional props)
<Projects projects={myProjects} />
<Connect socialLinks={myLinks} />
```

## Architecture

For a portfolio project, we keep all components in one folder for simplicity. The reusable components are designed to accept props for customization, while portfolio-specific components work out of the box.
<Tagline />  // Shows inspirational quote
```

## Architecture Decision

These sections contain very specific content that is unlikely to be reused in other projects. They are kept separate from truly reusable components in `/components/` to maintain clear separation of concerns.

## When to Use

- **Hero**: For personal branding sections
- **About**: For professional biographies
- **Skills**: For technical expertise displays
- **Tagline**: For personal mottos or quotes

Each section is self-contained and requires no props or configuration.