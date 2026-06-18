import React from "react";
import { ExternalLink, Github } from "lucide-react";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import { motion } from "framer-motion";
import projects from "@/content/projects.json";

const Projects = () => {
  const allProjects = projects;


  const featuredProjects = allProjects.filter(project => project.featured);
  const otherProjects = allProjects.filter(project => !project.featured);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <main className="container-resume">
          {/* Featured Projects */}
          <section className="section-spacing">
            <h2 className="text-section-title"># FEATURED PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section className="section-spacing">
            <h2 className="text-section-title"># OTHER PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} compact />
              ))}
            </div>
          </section>
          
          {/* Get in Touch Banner */}
          <GetInTouchBanner />
        </main>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image?: string;
    tech: string[];
    github: string;
    live: string;
    year: string;
  };
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  return (
    <div className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Project Thumbnail */}
      <div className="relative overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            width="800"
            height="384"
            loading="lazy"
            decoding="async"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2 py-1 bg-black/70 text-white rounded font-mono">
            {project.year}
          </span>
        </div>
      </div>
      
      {/* Project Info */}
      <div className={compact ? "p-4" : "p-6"}>
        <h3 className="text-job-title mb-2">{project.title}</h3>
        <p className={`text-body mb-4 ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, compact ? 3 : 6).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-muted rounded font-mono"
            >
              {tech}
            </span>
          ))}
          {compact && project.tech.length > 3 && (
            <span className="text-xs px-2 py-1 bg-muted rounded font-mono text-muted-foreground">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-3">
          <a 
            href={project.github}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Code
          </a>
          <a 
            href={project.live}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
