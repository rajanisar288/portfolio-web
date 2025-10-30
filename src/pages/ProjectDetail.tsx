import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Download } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button   onClick={() => {
  const prev = document.referrer;

  // If previous page is from this site
  if (prev && prev.includes(window.location.origin)) {

    // If previous was /projects, skip it and go home
    if (prev.endsWith("/projects")) {
      navigate("/");
    } else {
      window.history.back();
    }

  } else {
    // If no internal ref (opened directly), go home
    navigate("/");
  }
}}

>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => {
            const prev = document.referrer;
          
            // If previous page is from this site
            if (prev && prev.includes(window.location.origin)) {
          
              // If previous was /projects, skip it and go home
              if (prev.endsWith("/projects")) {
                navigate("/");
              } else {
                window.history.back();
              }
          
            } else {
              // If no internal ref (opened directly), go home
              navigate("/");
            }
          }}
          className="mb-8 glass-card-hover rounded-xl"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Header */}
        <div className="glass-card p-8 mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{project.summary}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="bg-primary hover:bg-primary-light text-primary-foreground rounded-xl"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Button>
            )}
            {project.repoUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.repoUrl, "_blank")}
                className="glass-card-hover rounded-xl"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Button>
            )}
            {/* <Button variant="outline" className="glass-card-hover rounded-xl">
              <Download className="w-4 h-4 mr-2" />
              Case Study PDF
            </Button> */}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} className="tech-badge">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Screenshot Carousel */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {project.screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-8 space-y-4">
            <h3 className="text-xl font-bold text-primary">Challenges</h3>
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </div>

          <div className="glass-card p-8 space-y-4">
            <h3 className="text-xl font-bold text-accent">Solutions</h3>
            <p className="text-muted-foreground leading-relaxed">{project.solutions}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="glass-card p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Timeline</h3>
              <p className="text-muted-foreground">{project.timeline}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Status</h3>
              <Badge className="bg-primary/20 text-primary border-primary/40">Completed</Badge>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
