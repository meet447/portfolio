import GetInTouchBanner from "@/components/GetInTouchBanner";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import projects from "@/content/projects.json";

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <main className="container-site pt-28 pb-16">
        <div className="content-column mb-10">
          <SectionTitle title="Projects" subtitle="A collection of things I've built" />
        </div>

        <section className="mb-16 sm:mb-20">
          <h3 className="text-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Featured
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h3 className="text-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} compact />
            ))}
          </div>
        </section>

        <GetInTouchBanner />
      </main>
    </motion.div>
  );
};

export default Projects;
