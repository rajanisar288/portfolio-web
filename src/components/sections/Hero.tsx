import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Scene3D } from "../Scene3D";
import { Button } from "../ui/button";
import { HeroSkeleton } from "./HeroSkeleton";
import { Suspense, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <section id="home" className="min-h-screen flex items-center justify-center p-6 lg:p-12 bg-gradient-to-br from-background via-background to-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl glass-hero p-8 lg:p-12"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-accent font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dev Nisar
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-foreground mt-2">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
             A passionate Full Stack Developer who loves turning ideas into powerful, user-focused digital experiences. With over 3 years of hands-on experience, I specialize in building scalable web applications using Angular, Node.js, Express.js, and MongoDB. I combine modern frontend tools like Angular Material, Taiga UI, DevExtreme, and Tailwind CSS with robust backend technologies such as Sails.js, Redis, and Prisma ORM to deliver seamless performance. My workflow embraces clean architecture, RESTful APIs, real-time communication with WebSockets, and smooth state management with NgRx and Redux. I’m constantly exploring new ways to blend design and technology—crafting responsive, high-quality, and maintainable solutions that bring ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {/* <Button
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button> */}
              <a
  href="https://drive.google.com/file/d/1yS-ykMGFZa9UxJ_8syqi_VqEutDEKopz/view?usp=sharing"
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

              {/* <Button
                variant="outline"
                size="lg"
                className="glass-card-hover px-8 py-6 rounded-2xl font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </Button> */}
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden glass-card"
          >
            <Scene3D />
          </motion.div> */}
          <motion.div
      initial={{ opacity: 0, scale: 0.8, borderRadius: "20% 50% 30% 50% / 30% 40% 60% 70%" }}
      animate={{
        opacity: loaded ? 1 : 0,
        scale: loaded ? 1 : 0.8,
        borderRadius: [
          "20% 50% 30% 50% / 30% 40% 60% 70%",
          "50% 20% 70% 30% / 40% 60% 30% 50%",
          "30% 60% 50% 20% / 50% 30% 70% 40%",
          "20% 50% 30% 50% / 30% 40% 60% 70%",
        ],
      }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="h-[400px] lg:h-[500px] overflow-hidden glass-card"
    >
      <img
        src="/2.JPG"
        alt="My Photo"
        className="w-full h-full object-cover object-top"
        onLoad={() => setLoaded(true)} // start animation only when image loads
      />
    </motion.div>
        </div>
      </motion.div>
    </section>
    </Suspense>
  );
}
