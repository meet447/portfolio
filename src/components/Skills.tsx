import SectionTitle from "./SectionTitle";
import TechTag from "./TechTag";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Swift"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "FastAPI", "Node.js", "LangChain", "Docker", "Kubernetes", "React Native"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud Platform", "GitHub Actions", "Docker", "Uvicorn"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "REST API", "Web Scraping", "Microservices", "Reverse Engineering APIs"],
    },
  ];

  return (
    <section className="container-site section-spacing">
      <div className="content-column">
        <SectionTitle title="Skills" />

        <div className="grid gap-10 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-display text-sm font-semibold mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
