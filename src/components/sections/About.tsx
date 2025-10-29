import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Target, Award, Download } from "lucide-react";
import { Button } from "../ui/button";

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications and mentoring junior developers",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
    description: "Built scalable web applications using React, Node.js, and cloud technologies",
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Developed responsive websites and interactive web experiences",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    period: "2014 - 2018",
  },
];

const hobbies = [
  "Open Source Contribution",
  "Tech Blogging",
  "UI/UX Design",
  "Photography",
];

const achievements = [
  "Built 50+ production websites",
  "Contributed to 20+ open source projects",
  "Mentored 15+ junior developers",
  "Published 30+ technical articles",
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
              Continuously learning and exploring new technologies. Aiming to contribute more 
              to open source, share knowledge through technical writing, and build products 
              that make a positive impact on people's lives.
            </p>
          </div>
        </div>

        {/* Download CV */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full CV
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
