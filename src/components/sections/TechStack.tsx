import { motion } from "framer-motion";
import { useState } from "react";
import { techStack, type SkillLevel } from "../../data/techStack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";

const skillLevelStyles: Record<SkillLevel, string> = {
  expert: "skill-expert",
  comfortable: "skill-comfortable",
  learning: "skill-learning",
};

const skillLevelLabels: Record<SkillLevel, string> = {
  expert: "Expert",
  comfortable: "Comfortable",
  learning: "Learning",
};

export function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="tech-stack" className="min-h-screen p-6 lg:p-12 bg-gradient-to-br from-accent/5 via-background to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              I love these
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with daily
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass-card p-2">
            <TabsTrigger value="frontend" className="rounded-xl">Frontend</TabsTrigger>
            <TabsTrigger value="backend" className="rounded-xl">Backend</TabsTrigger>
            <TabsTrigger value="tools" className="rounded-xl">Tools</TabsTrigger>
            <TabsTrigger value="other" className="rounded-xl">Other</TabsTrigger>
          </TabsList>

          {Object.entries(techStack).map(([category, techs]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card-hover p-6 space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-foreground">{tech.name}</h3>
                      <Badge className={`${skillLevelStyles[tech.level]} tech-badge`}>
                        {skillLevelLabels[tech.level]}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}
