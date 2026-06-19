import { Mail, Linkedin } from "lucide-react";

const HireMeBanner = () => {
  return (
    <section className="container-site section-spacing pb-20">
      <div className="content-column">
        <div className="card-surface p-8 sm:p-10">
          <h2 className="text-section-pixel mb-3">Let's Connect</h2>
          <p className="text-body-prose mb-8">
            Open to AI/ML engineering, backend infrastructure, and MLOps roles. Also available for freelance work in LLM systems, API design, and distributed compute. Based in India, remote-friendly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:meetsonawane3@gmail.com?subject=Opportunity"
              className="social-btn justify-center bg-foreground text-background hover:bg-foreground/90 hover:border-foreground"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/meet-sonawane/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn justify-center"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeBanner;
