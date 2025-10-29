import { Hero } from "../components/sections/Hero";
import { TechStack } from "../components/sections/TechStack";
import { Projects } from "../components/sections/Projects";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
