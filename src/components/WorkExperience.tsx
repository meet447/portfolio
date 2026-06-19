import SectionTitle from "./SectionTitle";
import TechTag from "./TechTag";

const WorkExperience = () => {
  const experiences = [
    {
      title: "MLOps Intern",
      company: "Hooman Digital LLP",
      logo: "/companies/hooman-digital.jpg",
      location: "Remote",
      type: "Internship",
      period: "Nov 2025 - Present",
      tech: ["Python", "Docker", "Kubernetes", "LangChain", "LLM"],
      responsibilities: [
        "Building LLM inference orchestration across decentralized and centralized GPU pools, optimizing for cost and throughput at scale.",
        "Architected a SkyPilot-style GPU workload framework integrating multiple compute providers into a unified scheduling layer.",
        "Deployed and scaled large language models on distributed infrastructure with focus on high availability and resource utilization.",
      ],
    },
    {
      title: "Technical Head",
      company: "E-CELL BVCOE",
      logo: "/companies/ecell-bvcoe.jpg",
      location: "Bharati Vidyapeeth College of Engineering",
      type: "Leadership",
      period: "Sept 2024 - Jan 2025",
      tech: ["React.js", "Node.js", "REST API"],
      responsibilities: [
        "Led the technical team for the entrepreneurship cell, owning end-to-end execution of all tech-driven initiatives.",
        "Organized 5+ workshops and events, driving student participation in hackathons and startup-building programs.",
      ],
    },
  ];

  return (
    <section id="experience" className="container-site section-spacing">
      <div className="content-column">
        <SectionTitle title="Experience" />

        <div className="relative">
          <div className="absolute left-[9px] top-2.5 bottom-2.5 w-px bg-border" aria-hidden />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-7">
                <div
                  className="absolute left-[4px] top-1.5 z-10 h-2.5 w-2.5 rounded-full bg-muted-foreground ring-4 ring-background"
                  aria-hidden
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 rounded-md border border-border/60 object-cover bg-secondary"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-display text-base font-semibold">{exp.company}</h3>
                        <span className="rounded-full border border-border/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-mono text-muted-foreground">{exp.title}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <p className="text-xs font-mono text-muted-foreground">{exp.period}</p>
                    <p className="text-xs font-mono text-muted-foreground/70">{exp.location}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Key Responsibilities
                  </p>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-body-prose pl-4 relative before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60 before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Technology Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <TechTag key={t} name={t} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
