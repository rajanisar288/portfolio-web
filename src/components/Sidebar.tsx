import { Home, Code, Briefcase, User, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", section: "home", icon: Home },
  { 
    name: "Tech Stack", 
    section: "tech-stack", 
    icon: Code
    // subItems: [
    //   { name: "Frontend", section: "tech-stack", data: "frontend" },
    //   { name: "Backend", section: "tech-stack", data: "backend" },
    //   { name: "Tools", section: "tech-stack", data: "tools" },
    //   { name: "Other", section: "tech-stack", data: "other" },
    // ]
  },
  { name: "Projects", section: "projects", icon: Briefcase },
  { name: "About Me", section: "about", icon: User },
  { name: "Contact", section: "contact", icon: Mail },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItem, setExpandedItem] = useState<string | null>("Tech Stack");

  return (
    <>
      {/* Toggle Button - Always Visible */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 glass-card-hover"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Overlay for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-screen w-72 glass-sidebar z-40 flex flex-col"
          >
        {/* Logo / Brand */}
        <div className="p-8 border-b border-sidebar-border mt-10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dev Nisar
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Full Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name}>
              {/* {item?.subItems ? (
                <div>
                  <button
                    onClick={() => {
                      setExpandedItem(expandedItem === item.name ? null : item.name);
                      scrollToSection(item.section);
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-300 hover:bg-sidebar-accent/10 group"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-sidebar-primary" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedItem === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-8 mt-1 space-y-1 overflow-hidden"
                      >
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              scrollToSection(subItem.section);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left p-2 rounded-xl text-sm transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/5"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group hover:bg-sidebar-accent/10 w-full text-left"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              )} */}
               <button
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group hover:bg-sidebar-accent/10 w-full text-left"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
            </div>
          ))}
        </nav>

            {/* Theme Toggle */}
            <div className="p-6 border-t border-sidebar-border">
              <ThemeToggle />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
