import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const projects = [
  {
    title: "Portfolio V1",
    description: "A 3D interactive portfolio website built with React, Three.js, and Tailwind CSS. Features smooth transitions and reactive background particles.",
    tags: ["React", "Three.js", "Tailwind", "Framer Motion"],
    links: { github: "#", demo: "#" },
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" // Tech abstract
  },
  {
    title: "Task Management App",
    description: "A full-stack productivity application with drag-and-drop task organization, user authentication, and real-time updates.",
    tags: ["MERN Stack", "Redux", "JWT", "Socket.io"],
    links: { github: "#", demo: "#" },
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80" // Productivity/Desk
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application using OpenWeatherMap API. Provides 5-day forecasts and location-based data.",
    tags: ["JavaScript", "API Integration", "CSS3"],
    links: { github: "#", demo: "#" },
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80" // Weather/Clouds
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="A collection of my recent work and experiments." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl overflow-hidden glass-card h-full flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-80" />
              {/* Unsplash image with descriptive comment */}
              {/* Technology abstract visualization */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                <Folder size={16} className="text-primary" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-primary/80 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
