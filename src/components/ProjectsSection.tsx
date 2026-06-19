import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projects from "@/content/projects.json";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="container-site section-spacing">
      <div className="content-column mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionTitle title="Projects" className="mb-0" />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground shrink-0 pb-1"
          >
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </div>
        <p className="text-section-sub -mt-6 sm:-mt-8">A collection of things I've built</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
