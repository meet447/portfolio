import SectionTitle from "./SectionTitle";

const achievements = [
  {
    title: "Y Combinator Startup School",
    organization: "Y Combinator",
    logo: "/companies/yc.svg",
    date: "2026",
    description: [
      "Selected for Y Combinator's Startup School 2026, joining a global cohort of founders building ambitious technology companies.",
      "Gaining direct access to YC's startup curriculum, founder community, and mentorship on product development, go-to-market strategy, and scaling early-stage ventures.",
      "Applying lessons from world-class operators to refine technical products and build with a startup-first mindset.",
    ],
  },
  {
    title: "Smart India Hackathon Winner",
    organization: "Govt of India",
    logo: "/companies/sih.jpg",
    date: "Dec 2024",
    description: [
      "Developed a software for Madhya Pradesh police for identifying the actual host of a website or domain",
      "Created and implemented a solution for detecting the true host IP even if the site is protected by CDNs or security services.",
      "Our software stood out for its ability to uncover the true origin host, showcasing technical sophistication and real-world applications in cybersecurity",
    ],
  },
];

const Achievements = () => {
  return (
    <section className="container-site section-spacing">
      <div className="content-column">
        <SectionTitle title="Achievements" />

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <div key={index} className="card-surface p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <img
                    src={item.logo}
                    alt={`${item.organization} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 rounded-md border border-border/60 object-cover bg-secondary"
                  />
                  <div>
                    <h3 className="text-display text-base font-semibold">{item.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground mt-1">{item.organization}</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-muted-foreground shrink-0">{item.date}</p>
              </div>

              <ul className="space-y-2.5">
                {item.description.map((desc, idx) => (
                  <li
                    key={idx}
                    className="text-body-prose pl-4 relative before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60 before:content-['']"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
