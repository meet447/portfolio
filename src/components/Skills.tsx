import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Swift"]
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React.js", "FastAPI", "Node.js", "LangChain", "Docker", "Kubernetes", "React Native"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB","Firebase", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud Platform", "GitHub Actions", "Docker", "Uvicorn"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "REST API", "Web Scraping", "Microservices", "Reverse Engineering APIs"]
    }
  ];

  return (
    <section className="container-resume section-spacing">
      <h2 className="text-section-title"># TECHNICAL SKILLS</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="space-y-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-job-title">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <motion.span 
                  key={idx}
                  className="text-xs px-2 py-1 bg-muted rounded font-mono border border-border/50"
                  whileHover={{ scale: 1.05, backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;