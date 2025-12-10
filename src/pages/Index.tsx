import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperience from "@/components/WorkExperience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import HireMeBanner from "@/components/HireMeBanner";
import LatestBlogs from "@/components/LatestBlogs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      <main>
        <About />
        <WorkExperience />
        <Achievements />
        <Skills />
        <ProjectsSection />
        <LatestBlogs />
        <Education />
        <HireMeBanner />
      </main>

      {/* Footer */}
      <footer className="container-resume py-8 border-t border-border mt-16">
        <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
          <a href="mailto:meetsonawane3@gmail.com" className="hover:text-accent transition-colors">
            meetsonawane3@gmail.com
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/meet-sonawane/" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/meet447" className="hover:text-accent transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
