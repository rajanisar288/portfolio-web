export type SkillLevel = "expert" | "comfortable" | "learning";

export interface Tech {
  name: string;
  level: SkillLevel;
  description: string;
  logo?: string;
}

export const techStack = {
  frontend: [
    {
      name: "Angular",
      level: "expert" as SkillLevel,
      description: "Developing scalable, high-performance single-page applications (v8–v18)",
    },
    {
      name: "TypeScript",
      level: "expert" as SkillLevel,
      description: "Strongly-typed development with clean architecture and reusability",
    },
    {
      name: "JavaScript (ES6+)",
      level: "expert" as SkillLevel,
      description: "Core logic implementation and browser-based optimization",
    },
    {
      name: "HTML5 & CSS3 / SASS",
      level: "expert" as SkillLevel,
      description: "Responsive, pixel-perfect, and accessible user interface design",
    },
    {
      name: "Angular Material / Taiga UI / DevExtreme",
      level: "comfortable" as SkillLevel,
      description: "Building modern UI components with consistent design systems",
    },
    {
      name: "Bootstrap / Ngx Bootstrap / Tailwind CSS",
      level: "comfortable" as SkillLevel,
      description: "Creating responsive layouts with utility-first or component-driven styles",
    },
    {
      name: "RxJS & NgRx",
      level: "comfortable" as SkillLevel,
      description: "State management and reactive programming for complex data flows",
    },
  ],

  backend: [
    {
      name: "Node.js",
      level: "expert" as SkillLevel,
      description: "Building fast, event-driven, and scalable backend systems",
    },
    {
      name: "Express.js",
      level: "expert" as SkillLevel,
      description: "Creating robust RESTful APIs and middleware-driven applications",
    },
    {
      name: "Sails.js",
      level: "comfortable" as SkillLevel,
      description: "Building structured MVC backends and microservices",
    },
    {
      name: "MongoDB",
      level: "comfortable" as SkillLevel,
      description: "Schema-less data modeling, aggregation, and performance optimization",
    },
    {
      name: "Redis",
      level: "comfortable" as SkillLevel,
      description: "Caching, session management, and pub/sub messaging",
    },
    {
      name: "Prisma ORM",
      level: "comfortable" as SkillLevel,
      description: "Type-safe database access and query optimization",
    },
    {
      name: "RESTful APIs & WebSockets",
      level: "comfortable" as SkillLevel,
      description: "Developing interactive and real-time communication systems",
    },
  ],

  tools: [
    {
      name: "Git & GitLab",
      level: "expert" as SkillLevel,
      description: "Version control, branching, and continuous integration workflows",
    },
    {
      name: "Visual Studio Code",
      level: "expert" as SkillLevel,
      description: "Efficient coding environment with productivity extensions and debugging",
    },
    {
      name: "Firebase",
      level: "comfortable" as SkillLevel,
      description: "Authentication, hosting, and real-time database management",
    },
    {
      name: "Mapbox",
      level: "expert" as SkillLevel,
      description: "Interactive maps and geolocation-based integrations",
    },
  ],

  other: [
    {
      name: "Next.js / React.js / Ionic",
      level: "comfortable" as SkillLevel,
      description: "Building hybrid and full-stack applications with reusable components",
    },
    {
      name: "Material UI / Redux",
      level: "comfortable" as SkillLevel,
      description: "Modern UI components and predictable state management",
    },
    {
      name: "UI/UX Design",
      level: "comfortable" as SkillLevel,
      description: "Understanding visual design, layout balance, and user experience flow",
    },
    {
      name: "Architecture Design & Problem Solving",
      level: "expert" as SkillLevel,
      description: "Designing maintainable, scalable, and efficient software systems",
    },
    {
      name: "Team Collaboration & Creative Implementation",
      level: "comfortable" as SkillLevel,
      description: "Working closely with teams to deliver innovative product solutions",
    },
  ],
};
