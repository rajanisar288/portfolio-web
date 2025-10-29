import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, url: "https://github.com/devnisar", label: "GitHub" },
  { icon: Linkedin, url: "https://linkedin.com/in/devnisar", label: "LinkedIn" },
  { icon: Twitter, url: "https://twitter.com/devnisar", label: "Twitter" },
  { icon: Mail, url: "mailto:dev.nisar@example.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-lg mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dev Nisar. Built with React, TypeScript & Three.js
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card-hover transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
