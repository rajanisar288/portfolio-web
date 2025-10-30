import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const socialLinks = [
  { icon: Github, url: "https://github.com/rajanisar288", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/nisar-ahmed-35572120a/", label: "LinkedIn" },
  { icon: Instagram, url: "https://www.instagram.com/dev.nisarr/?igsh=MTExcXMweTluaXFuZQ%3D%3D#", label: "Instagram" },
  { icon: Mail, url: "mailto:dev.m.nisar191@gmail.com", label: "Email" },
];

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_w0dsgvr",
        "template_siij6m8",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "e5rnq9VeW6nWjvenM" // ⚠️ Your EmailJS Public Key (DO NOT REMOVE)
      )
      .then(
        () => {
          toast({
            title: "Message Sent Successfully ✅",
            description: "Thanks for reaching out! I will get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Failed to send message ❌",
            description: "Something went wrong, please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen p-6 lg:p-12 flex items-center bg-gradient-to-br from-background via-accent/5 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's build something amazing together 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-card border-glass-border rounded-xl"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-card border-glass-border rounded-xl"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass-card border-glass-border rounded-xl"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass-card border-glass-border rounded-xl resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Social & Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 glass-card-hover rounded-xl"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="text-muted-foreground mb-6">
                Based in Karachi, Pakistan 🇵🇰
                <br />
                Available for remote work worldwide 🌍
              </p>

              <h3 className="text-2xl font-bold mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
