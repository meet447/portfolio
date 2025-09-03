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
          <div key={index} className="space-y-3">
            <h3 className="text-job-title">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-2 py-1 bg-muted rounded font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;