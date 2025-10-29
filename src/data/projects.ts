export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  screenshots: string[];
  liveUrl?: string;
  repoUrl?: string;
  challenges: string;
  solutions: string;
  role: string;
  timeline: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    summary: "Full-stack e-commerce solution with real-time inventory and payment processing",
    description: "A comprehensive e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, secure checkout with Stripe integration, order tracking, and admin dashboard for inventory management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    screenshots: ["/placeholder.svg"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/devnisar/ecommerce",
    challenges: "Managing real-time inventory across multiple warehouses while ensuring data consistency and handling high traffic during sales events.",
    solutions: "Implemented Redis caching, database sharding, and event-driven architecture with message queues for reliable inventory updates.",
    role: "Full Stack Developer",
    timeline: "3 months",
  },
  {
    id: "social-dashboard",
    title: "Social Media Dashboard",
    summary: "Analytics dashboard for social media managers with real-time data visualization",
    description: "A powerful analytics tool that aggregates data from multiple social media platforms. Provides insights on engagement, growth metrics, and content performance with beautiful visualizations.",
    technologies: ["React", "TypeScript", "Chart.js", "Express", "MongoDB"],
    screenshots: ["/placeholder.svg"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/devnisar/social-dashboard",
    challenges: "Integrating multiple social media APIs with different rate limits and data formats while maintaining real-time updates.",
    solutions: "Built a custom aggregation service with intelligent caching and webhook listeners for real-time updates without exceeding API limits.",
    role: "Frontend Lead",
    timeline: "2 months",
  },
  {
    id: "task-manager",
    title: "Collaborative Task Manager",
    summary: "Team collaboration tool with real-time updates and project tracking",
    description: "A modern task management application designed for remote teams. Features include project boards, task assignments, real-time collaboration, file sharing, and progress tracking.",
    technologies: ["Next.js", "WebSockets", "PostgreSQL", "Prisma", "Tailwind CSS"],
    screenshots: ["/placeholder.svg"],
    repoUrl: "https://github.com/devnisar/task-manager",
    challenges: "Implementing real-time collaboration features with conflict resolution when multiple users edit the same task simultaneously.",
    solutions: "Used operational transformation algorithms and WebSocket channels for real-time synchronization with automatic conflict resolution.",
    role: "Full Stack Developer",
    timeline: "4 months",
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder SaaS",
    summary: "Drag-and-drop portfolio builder for developers and designers",
    description: "A SaaS platform that allows users to create beautiful portfolio websites without coding. Features include customizable templates, drag-and-drop editor, custom domains, and analytics.",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Stripe"],
    screenshots: ["/placeholder.svg"],
    liveUrl: "https://example.com",
    challenges: "Building a flexible template system that allows for customization while maintaining performance and generating SEO-friendly static pages.",
    solutions: "Implemented a component-based template engine with server-side rendering and static site generation for optimal performance and SEO.",
    role: "Solo Developer",
    timeline: "5 months",
  },
];
