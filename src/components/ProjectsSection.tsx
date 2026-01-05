import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardImage from "@/assets/project-dashboard.png";
import chatbotImage from "@/assets/project-chatbot.png";
import monitoringImage from "@/assets/project-monitoring.png";
import ecommerceImage from "@/assets/project-ecommerce.png";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Chipling",
      description: "The Visual Discovery Engine. A digital ocean that uses vector embeddings to let you search, curate, and discover inspiration by concept rather than keywords.",
      image: "/projects/chipling.png",
      tech: ["Next.js", "Supabase", "PostgreSQL", "FastAPI", "Vector Embeddings"], // Updated based on your actual stack
      github: "https://chipling.xyz", // Double check this link, looks like a placeholder?
      live: "https://chipling.xyz"
    },
    {
      id: 2,
      title: "Unio",
      description: "A unified API service for developers who use multiple LLM providers. The goal is to make AI development easier, cheaper, and more reliable.",
      image: "/projects/unio.png",
      tech: ["Python", "FastAPI", "Docker", "React", "Supabase", "Redis"],
      github: "https://github.com/meet447/Unio",
      live: "https://unio.chipling.xyz"
    },
    {
      id: 3,
      title: "Axiom",
      description: "Open Source AI search engine similar Perplexity AI but with ai agents and more features.",
      image: "/projects/axiom.png",
      tech: ["Next JS", "Node.js", "Fast API", "Supabase", "Redis"],
      github: "https://github.com/meet447/Axiomai",
      live: "https://axiom.chipling.xyz"
    }
  ];

  return (
    <section id="projects" className="container-resume section-spacing">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-section-title"># FEATURED PROJECTS</h2>
        <Link to="/projects">
          <Button variant="outline" className="text-sm font-mono">
            View All Projects →
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <div key={project.id} className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Project Thumbnail */}
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-job-title mb-2">{project.title}</h3>
              <p className="text-body mb-4 line-clamp-2">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 bg-muted rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
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
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;