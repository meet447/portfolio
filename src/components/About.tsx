import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { FileText, Mail, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";
import TechTag from "./TechTag";

const coreSkills = ["Python", "Go", "React", "FastAPI", "Docker", "Kubernetes", "Redis", "LLM", "PostgreSQL"];

const milestones = [
  {
    title: "LLM Orchestration & MLOps",
    body: "At Hooman Digital, I co-designed the product roadmap and core infrastructure for the InferiaLLM platform — building a modular adapter layer via SkyPilot to automate zero-downtime model deployments across AWS, GCP, and decentralized GPU grids (Nosana, Akash).",
  },
  {
    title: "Published ML Model on Hugging Face",
    body: "Fine-tuned and released Bakwas v1 Alpha — an extractive prompt compression model built on DistilBERT that classifies tokens as signal or noise, cutting LLM context bloat without generative rewriting. Includes a public demo Space for interactive evaluation.",
  },
  {
    title: "National Recognition & System Acquisition",
    body: "Won 1st place at the national Smart India Hackathon among thousands of teams. Engineered an OSINT network reconnaissance framework capable of unmasking origin IPs behind reverse proxies — subsequently acquired by a state police department for operational use.",
  },
  {
    title: "Venture & Community Validation",
    body: "Selected for Y Combinator's AI Startup School. I contribute to open-source AI systems including Koraku (a self-hostable ReAct agent runtime with isolated 3-tier sandbox routing) and Chipling.xyz (a multimodal vector discovery engine using CLIP models, scaling to 500+ active users).",
  },
];

const About = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section id="about" className="container-site pt-28 pb-14 sm:pt-32 sm:pb-20">
      <div className="content-column">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-10 mb-10">
          <div className="min-w-0 flex-1">
            <p className="text-hero-greeting">Hola I'm 👋</p>
            <h1 className="text-hero-name">Meet Sonawane</h1>
            <p className="text-hero-subtitle">
              AI/ML Engineer • Backend Infrastructure • MLOps
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-4 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to AI/ML & backend roles
              </span>
              <span className="text-border hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} /> India · Remote OK
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="mailto:meetsonawane3@gmail.com"
                className="social-btn bg-foreground text-background hover:bg-foreground/90 hover:border-foreground"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href="/resume/newresume.pdf"
                download
                target="_blank"
                className="social-btn"
              >
                <FileText size={16} />
                Download CV
              </a>
            </div>
          </div>

          <div className="shrink-0 self-center sm:self-start">
            <img
              src="/profile.png"
              alt="Meet Sonawane"
              width={176}
              height={176}
              className="h-36 w-36 sm:h-44 sm:w-44 rounded-full border border-border/60 object-cover bg-secondary"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {["YC AI Startup School 2026", "SIH National Winner 2024", "MLOps @ Hooman Digital"].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-[11px] font-mono text-foreground/80"
            >
              {badge}
            </span>
          ))}
        </div>

        <h2 className="text-section-pixel mb-8 sm:mb-10">About Me</h2>

        <div className="space-y-5 text-body-prose">
          <p>
            I'm an <strong>AI/ML and Backend Infrastructure Engineer</strong> who approaches software through the lens of a technical founder. Rather than building application wrappers, I focus on the underlying plumbing — specializing in{" "}
            <strong>low-latency backend systems, MLOps, distributed compute abstraction, and multi-agent execution environments</strong>.
          </p>

          <p>
            My journey is driven by a deep interest in <strong>performance optimization, microservices architecture, and high-throughput API design</strong>. I bridge the gap between complex machine learning paradigms and production-grade systems engineering.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-display text-sm font-semibold mb-5 uppercase tracking-wider">
            Selected Technical Milestones
          </h3>
          <ul className="space-y-5">
            {milestones.map((item) => (
              <li key={item.title} className="pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60 before:content-['']">
                <p className="text-body-prose">
                  <strong>{item.title}:</strong> {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
            Core Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <TechTag key={skill} name={skill} />
            ))}
          </div>
        </div>

        <p className="mt-8 text-body-prose">
          Whether optimizing time-to-first-token metrics, abstracting heterogeneous compute nodes, or refining API schemas — I obsess over building{" "}
          <strong>efficient, maintainable, and highly resilient solutions</strong>. Let's connect if you're building the future of the AI-driven infrastructure layer.
        </p>

        <p className="mt-10 mb-4 text-sm font-mono text-muted-foreground">Connect with me</p>
        <SocialLinks />

        <div className="mt-14 sm:mt-16 w-full overflow-x-auto">
          <GitHubCalendar
            username="meet447"
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
