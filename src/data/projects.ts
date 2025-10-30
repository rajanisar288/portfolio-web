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
    id: "promptreports-ai",
    title: "PromptReports.AI",
    summary: "Traditional research takes months and costs a fortune. We deliver expert insights on-demand, no contracts required.",
    description:
      "PromptReports.AI is a next-generation research and insights platform built for speed and scalability. Designed with a focus on real-time data delivery, it enables users to generate and purchase expert-level reports instantly. The project integrates secure Stripe payments, advanced query handling, and a modern UI for seamless experience across all devices.",
    technologies: [
      "Next.js",
      "Prisma",
      "Tailwind CSS",
      "Redux",
      "Vercel",
      "Stripe",
      "PostgreSQL",
      "OpenRouter",
    ],
    screenshots: ["/prompt/1.png","/prompt/2.png","/prompt/3.png","/prompt/4.png","/prompt/5.png","/prompt/6.png", ],
    liveUrl: "https://www.promptreports.ai/",
    repoUrl: "",
    challenges:
      "The application faced latency issues in Next.js APIs and state synchronization problems within the Context API during concurrent requests.",
    solutions:
      "Optimized Next.js API routes with Prisma query tuning, implemented Redux for efficient state management, and utilized server-side rendering for faster data delivery. Deployed on Vercel for enhanced performance and scalability.",
    role: "Full Stack Developer",
    timeline: "3+ months",
  }
,  
{
  id: "bkw-id",
  title: "BKW",
  summary:
    "We are an international energy and infrastructure company offering integrated solutions in energy, buildings, and infrastructure.",
  description:
    "A private enterprise-grade project management system used internally by BKW employees in Switzerland. This platform enables teams to manage projects, budgets, planning, and resource allocation. Due to privacy restrictions, only landing-page screenshots are displayed.",
  technologies: [
    "Angular 8",
    "TypeScript",
    "DevExtreme",
    "Chart.js",
    "Bootstrap",
    "Node.js",
    "Sails.js",
    "WebSockets"
  ],
  screenshots: ["/bkw/1.png","/bkw/2.png","/bkw/3.png","/bkw/4.png"],
  liveUrl: "https://www.bkw.com/en",
  repoUrl: "",
  challenges:
    "The application was originally built using Angular 8 and DevExtreme UI components. The company decided to move to a modern theme and UI standards, including redesigning key modules like Gantt charts while maintaining the existing logic and performance.",
  solutions:
    "Enhanced and modernized the UI theme across the entire platform, migrated components without breaking business workflows, upgraded DevExtreme styling, improved Gantt chart UI and functionality, and introduced new features while ensuring backward compatibility.",
  role: "Frontend Developer (Specialist)",
  timeline: "More than 1 year",
}
,
  {
    id: "wizzdi-id",
    title: "Wizzdi",
    summary: "The Unlocked No-Code Backend",
    description: "Rapidly build custom solutions, deploy Anywhere, and scale effortlessly. Our AI-Enhanced Platform Offers Unmatched Flexibility, Empowering Everyone From Startups To Enterprises To Innovate Without Limits.",
    technologies: ["Angular Material", "SASS", "Websocket", "Angular", "Codegen"],
    screenshots: ["/wizzdi/1.png","/wizzdi/2.png","/wizzdi/3.png","/wizzdi/4.png"],
    liveUrl:"https://wizzdi.com/",
   
    challenges:
    "The application required real-time UI updates with minimal API requests, but frequent calls were increasing latency and server load.",
  solutions:
    "Implemented code-generation-based live data syncing using WebSockets, significantly reducing API calls while ensuring instant UI updates and seamless real-time collaboration.",
  role: "Frontend Angular Developer",
  timeline: "2+ months",
  },
  {
    id: "inesephoto-id",
    title: "Inese Photo",
    summary: "Portfolio website deployment for an elopement and adventure wedding photographer in Norway.",
    description: "A stunning photography portfolio built by the client. I handled cloud deployment and ensured high performance, security, and stable hosting.",
    technologies: ["AWS EC2", "Nginx", "Linux", "SSL", "DNS"],
    screenshots: ["/wedding/1.png", "/wedding/1.png"],
    liveUrl: "https://www.inesephoto.com/norway-elopement-photography/",
    
    challenges: "Deploy a static photography website on a scalable and secure cloud environment, ensuring fast CDN delivery and zero downtime.",
    solutions: "Configured AWS EC2 hosting, Nginx reverse proxy, domain setup, SSL certificates, caching rules, and ensured optimized performance.",
    
    role: "Deployment & DevOps Engineer",
    timeline: "2 Days",
  }
  
];
