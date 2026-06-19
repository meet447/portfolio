import SectionTitle from "./SectionTitle";

const achievements = [
  {
    title: "Y Combinator Startup School",
    organization: "Y Combinator",
    logo: "/companies/yc.svg",
    date: "2026",
    highlight: "Selected for YC Startup School 2026 — global cohort of founders building ambitious tech companies.",
  },
  {
    title: "Smart India Hackathon Winner",
    organization: "Govt of India",
    logo: "/companies/sih.jpg",
    date: "Dec 2024",
    highlight: "Winner among 50,000+ teams — built host-detection software for Madhya Pradesh Police, bypassing CDN masking.",
  },
];

const Achievements = () => {
  return (
    <section className="container-site section-spacing">
      <div className="content-column">
        <SectionTitle title="Achievements" />

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <div key={item.title} className="card-surface p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 rounded-md border border-border/60 object-cover bg-secondary"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-display text-sm font-semibold leading-snug">{item.title}</h3>
                    <span className="text-[10px] font-mono text-muted-foreground shrink-0">{item.date}</span>
                  </div>
                  <p className="text-[11px] font-mono text-muted-foreground mt-0.5">{item.organization}</p>
                </div>
              </div>
              <p className="text-body-prose text-sm leading-relaxed">{item.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
