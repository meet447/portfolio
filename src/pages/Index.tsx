import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperience from "@/components/WorkExperience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import HireMeBanner from "@/components/HireMeBanner";
import LatestBlogs from "@/components/LatestBlogs";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <main>
        <motion.div {...fadeInUp}>
          <About />
        </motion.div>
        <motion.div {...fadeInUp}>
          <WorkExperience />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Achievements />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Skills />
        </motion.div>
        <motion.div {...fadeInUp}>
          <ProjectsSection />
        </motion.div>
        <motion.div {...fadeInUp}>
          <LatestBlogs />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Education />
        </motion.div>
        <motion.div {...fadeInUp}>
          <HireMeBanner />
        </motion.div>
      </main>
    </motion.div>
  );
};


export default Index;
