import { ExternalLink, Github } from "lucide-react";
import TechTag from "./TechTag";

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

const ProjectCard = ({ project, compact = false }: ProjectCardProps) => (
  <div className="card-surface group">
    {project.image && (
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          width={800}
          height={384}
          loading="lazy"
          decoding="async"
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${compact ? "h-40" : "h-48 sm:h-52"}`}
        />
        <div className="absolute top-3 right-3">
          <span className="rounded-md bg-background/80 px-2 py-0.5 text-[10px] font-mono text-muted-foreground backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>
    )}

    <div className={compact ? "p-4" : "p-5 sm:p-6"}>
      <h3 className="text-display text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
      <p className={`text-sm font-mono text-muted-foreground leading-relaxed mb-4 ${compact ? "line-clamp-2" : "line-clamp-3"}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, compact ? 4 : 6).map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
        {compact && project.tech.length > 4 && (
          <span className="tech-tag border-border text-muted-foreground">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.github}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={14} />
          Code
        </a>
        <a
          href={project.live}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
