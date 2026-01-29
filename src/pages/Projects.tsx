import React from "react";
import { ExternalLink, Github } from "lucide-react";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import dashboardImage from "@/assets/project-dashboard.png";
import chatbotImage from "@/assets/project-chatbot.png";
import monitoringImage from "@/assets/project-monitoring.png";
import ecommerceImage from "@/assets/project-ecommerce.png";
import { motion } from "framer-motion";

const Projects = () => {
  const allProjects = [
    {
      id: 8,
      title: "SurgeDB",
      description: "A SIMD-powered, ultra-lightweight vector database for the Edge, written in pure Rust. Features Adaptive HNSW indexing, SQ8/Binary quantization, and ACID-compliant persistence.",
      image: "/projects/SurgeDB.png",
      tech: ["Rust", "SIMD", "HNSW", "Vector Database", "WASM"],
      github: "https://github.com/meet447/surgedb",
      live: "https://github.com/meet447/surgedb",
      featured: true,
      year: "2026"
    },
    {
      id: 1,
      title: "Unio",
      description: "A unified OpenAI-compatible API service where users can add keys for multiple LLM providers, enabling seamless key rotation, fallback, and centralized model management.",
      image: monitoringImage,
      tech: ["Python", "FastAPI", "Docker", "LLMs", "API"],
      github: "https://github.com/meet447/unio",
      live: "https://github.com/meet447/unio",
      featured: true,
      year: "2025"
    },
    {
      id: 2,
      title: "Axiomai",
      description: "An open-source AI search engine inspired by Perplexity AI. Focuses on real-time AI-assisted search, summarization, and question-answering capabilities.",
      image: dashboardImage,
      tech: ["TypeScript", "Next.js", "LLMs", "PostgreSQL"],
      github: "https://github.com/meet447/axiomai",
      live: "https://axiom.chipling.xyz",
      featured: true,
      year: "2025"
    },
    {
      id: 3,
      title: "Chipling-AI",
      description: "AI platform providing free access to stable-diffusion, video diffusion, and LLM inference. Built with Flask, enabling quick AI experimentation.",
      image: chatbotImage,
      tech: ["Python", "Flask", "Stable Diffusion", "LLMs", "Video Diffusion"],
      github: "https://github.com/meet447/chipling-ai",
      live: "https://github.com/meet447/chipling-ai",
      featured: true,
      year: "2024"
    },
    {
      id: 4,
      title: "Schemely",
      description: "AI-powered tool to convert natural language and URLs into structured JSON via schema extraction, making data parsing easier.",
      image: ecommerceImage,
      tech: ["Python", "FastAPI", "LLMs", "Schema Extraction"],
      github: "https://github.com/meet447/schemely",
      live: "https://github.com/meet447/schemely",
      featured: false,
      year: "2025"
    },
    {
      id: 5,
      title: "FastHost",
      description: "Self-hosted Python backend deployment platform. Deploy FastAPI or Flask apps seamlessly with Docker and container orchestration.",
      image: monitoringImage,
      tech: ["Python", "FastAPI", "Flask", "Docker", "Deployment"],
      github: "https://github.com/meet447/fasthost",
      live: "https://github.com/meet447/fasthost",
      featured: false,
      year: "2025"
    },
    {
      id: 6,
      title: "Dokusha",
      description: "A manga and webtoon reader app built with React Native, inspired by Tachiyomi. Supports clean UI, library management, and smooth reading experience.",
      image: dashboardImage,
      tech: ["React Native", "JavaScript", "Mobile", "App Development"],
      github: "https://github.com/meet447/dokusha",
      live: "https://github.com/meet447/dokusha",
      featured: false,
      year: "2024"
    },
    {
      id: 7,
      title: "MeuxVtuber",
      description: "Lightweight AI VTuber project with no API key requirements, capable of streaming and integrating AI characters in real-time.",
      image: chatbotImage,
      tech: ["Python", "LLMs", "AI", "Streaming"],
      github: "https://github.com/meet447/meuxvtuber",
      live: "https://github.com/meet447/meuxvtuber",
      featured: false,
      year: "2023"
    }
  ];

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
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section className="section-spacing">
            <h2 className="text-section-title"># OTHER PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
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
    id: number;
    title: string;
    description: string;
    image: string;
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
       
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2 py-1 bg-black/70 text-white rounded font-mono">
            {project.year}
          </span>
        </div>
      </div>
      
      {/* Project Info */}
      <div className={`p-${compact ? '4' : '6'}`}>
        <h3 className="text-job-title mb-2">{project.title}</h3>
        <p className={`text-body mb-4 ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, compact ? 3 : 6).map((tech, idx) => (
            <span 
              key={idx}
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
