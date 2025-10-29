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
      name: "React",
      level: "expert" as SkillLevel,
      description: "Building complex UIs with hooks, context, and modern patterns",
    },
    {
      name: "TypeScript",
      level: "expert" as SkillLevel,
      description: "Type-safe development with advanced types and generics",
    },
    {
      name: "Tailwind CSS",
      level: "expert" as SkillLevel,
      description: "Rapid UI development with utility-first CSS",
    },
    {
      name: "Next.js",
      level: "comfortable" as SkillLevel,
      description: "SSR, SSG, and full-stack React applications",
    },
    {
      name: "Framer Motion",
      level: "comfortable" as SkillLevel,
      description: "Creating smooth, production-ready animations",
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: "expert" as SkillLevel,
      description: "Building scalable server-side applications",
    },
    {
      name: "Express",
      level: "expert" as SkillLevel,
      description: "RESTful API development and middleware architecture",
    },
    {
      name: "PostgreSQL",
      level: "comfortable" as SkillLevel,
      description: "Database design, queries, and optimization",
    },
    {
      name: "MongoDB",
      level: "comfortable" as SkillLevel,
      description: "NoSQL database modeling and aggregation",
    },
    {
      name: "GraphQL",
      level: "learning" as SkillLevel,
      description: "Modern API development with type-safe queries",
    },
  ],
  tools: [
    {
      name: "Git",
      level: "expert" as SkillLevel,
      description: "Version control, branching strategies, and collaboration",
    },
    {
      name: "Docker",
      level: "comfortable" as SkillLevel,
      description: "Containerization and deployment workflows",
    },
    {
      name: "AWS",
      level: "comfortable" as SkillLevel,
      description: "Cloud infrastructure and serverless architectures",
    },
    {
      name: "CI/CD",
      level: "comfortable" as SkillLevel,
      description: "Automated testing and deployment pipelines",
    },
    {
      name: "Figma",
      level: "comfortable" as SkillLevel,
      description: "UI/UX design and prototyping",
    },
  ],
  other: [
    {
      name: "Python",
      level: "comfortable" as SkillLevel,
      description: "Scripting, automation, and data processing",
    },
    {
      name: "Three.js",
      level: "learning" as SkillLevel,
      description: "3D graphics and interactive experiences",
    },
    {
      name: "WebSockets",
      level: "comfortable" as SkillLevel,
      description: "Real-time bidirectional communication",
    },
    {
      name: "Jest",
      level: "comfortable" as SkillLevel,
      description: "Unit testing and test-driven development",
    },
  ],
};
