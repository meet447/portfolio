import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { FileText } from "lucide-react";
import SocialLinks from "./SocialLinks";

const About = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section id="about" className="container-site pt-28 pb-14 sm:pt-32 sm:pb-20">
      <div className="content-column">
        {/* Hero row */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-10 mb-14 sm:mb-16">
          <div className="min-w-0 flex-1">
            <p className="text-hero-greeting">Hola I'm 👋</p>
            <h1 className="text-hero-name">Meet Sonawane</h1>
            <p className="text-hero-subtitle">
              Fullstack Software Engineer • Systems & AI Enthusiast
            </p>
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

        {/* About Me */}
        <h2 className="text-section-pixel mb-8 sm:mb-10">About Me</h2>

        <div className="space-y-5 text-body-prose">
          <p>
            I'm a passionate <strong>Full Stack Software Engineer</strong> with over 2 years of experience building{" "}
            <strong>scalable web applications and backend systems</strong>. I specialize in Python, React, and cloud architecture, with a strong focus on creating efficient, maintainable solutions.
          </p>

          <p>
            My journey in software development has taken me through various domains, from web scraping and SaaS to{" "}
            <strong>AI-powered chatbots and data analytics platforms</strong>. I enjoy tackling complex technical challenges and have a particular interest in{" "}
            <strong>microservices architecture, API design, and performance optimization</strong>.
          </p>

          <p>
            When I'm not coding, you'll find me exploring the latest technologies, contributing to{" "}
            <strong>open-source projects</strong>, or sharing knowledge with the developer community. I believe in writing clean, well-documented code and following best practices to deliver robust software solutions.
          </p>
        </div>

        <p className="mt-10 mb-4 text-sm font-mono text-muted-foreground">
          My social links (will really appreciate a follow 🙂)
        </p>

        <SocialLinks />

        <a
          href="/resume/newresume.pdf"
          download
          target="_blank"
          className="social-btn mt-3 inline-flex"
        >
          <FileText size={16} />
          Download CV
        </a>

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
