import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Target, Award, Download } from "lucide-react";
import { Button } from "../ui/button";

const experience = [
  {
    title: "Full Stack Developer",
    company: "Cipherslab LLC",
    period: "Dec 2024 - Oct 2025",
    description:
      "Worked on advanced AI-driven products including code-generation systems, voice-to-action AI agents, and automation workflows. Integrated Mapbox with multi-layer mapping, built e-commerce systems with Stripe, and contributed to high-performance interactive tools similar to Photoshop using Angular, React, and Next.js.",
  },
  {
    title: "Frontend Developer (Angular)",
    company: "Crekey Solutions",
    period: "Oct 2022 - Nov 2022",
    description:
      "Developed and maintained a project management platform using Angular, Angular Material, and DevExtreme. Built responsive UI components, optimized user workflows, and implemented real-time updates with RxJS while maintaining scalable frontend architecture.",
  },
  {
    title: "Frontend Developer",
    company: "Poulta Inc",
    period: "Jun 2021 - Sep 2022",
    description:
      "Contributed to a real-time, data-driven poultry farm management system. Built responsive interfaces with Angular & TypeScript to visualize live insights and help predict and prevent losses using advanced data monitoring pipelines.",
  },
];


const education = [
  {
    degree: "Diploma in Information Technology (DIT) & Certificate in Web Development",
    institution: "Dignous Innovation Center (DIC)",
    period: "Jan 2020 - Oct 2022",
  },
  {
    degree: "Intermediate in Pre-Engineering – Grade A",
    institution: "Mehran Degree College, Moro Town Campus",
    period: "Aug 2020 - Dec 2021",
  },
];


const hobbies = [
  "Open Source Contribution",
  "Tech Blogging",
  "UI/UX Design",
  "Photography",
  "Spring Boot (Java)",
  "Machine Learning",
  "AWS (S3, Lambda)",
  "LangChain & Python for AI",
];


const achievements = [
  "Delivered 15+ real-world client projects from concept to deployment",
  "Transformed innovative ideas into fully functional digital products",
  "Mentored and guided 10+ students to enter the tech industry and land jobs in top companies",
  "Successfully handled freelance and professional projects, ensuring quality and timely delivery",
];


export function About() {
  return (
    <section id="about" className="min-h-screen p-6 lg:p-12 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get to know more about my journey and passions
          </p>
        </div>

        {/* Experience */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-primary/30 pl-6 py-2"
              >
                <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                <p className="text-accent font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                <p className="text-accent font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hobbies & Goals */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Hobbies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="tech-badge"
                >
                  {hobby}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Goals</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
            My mission is to build a world-class tech company in Pakistan and create 
  opportunities for talented individuals — especially those who have skills 
  but lack a formal degree. Having faced this challenge myself, I aspire to 
  provide a platform where skill and innovation matter more than certificates.
  <br /><br />
  Currently working on AI-driven automation projects, including an intelligent 
  agent capable of performing trained actions such as booking tickets based on 
  user commands (NTP Detection AI Model). My goal is to empower people, create 
  jobs, and build technology that shapes the future.
            </p>
          </div>
        </div>

        {/* Download CV */}
        <div className="text-center">
        <a
   href="https://drive.google.com/file/d/1ZuJvB9Co1KoEAeWbvWWMGI8zB-dKp-Vw/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </Button>
</a>
        </div>
      </motion.div>
    </section>
  );
}
