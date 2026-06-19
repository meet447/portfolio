import { Mail, Linkedin } from "lucide-react";

const GetInTouchBanner = () => {
  return (
    <section>
      <div className="content-column">
        <div className="card-surface p-8 sm:p-10">
          <h2 className="text-section-pixel mb-3">Get in Touch</h2>
          <p className="text-body-prose mb-8">
            Interested in collaborating on a project? I'm open to discussing ideas around AI infrastructure, full-stack products, and open-source work.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:meetsonawane3@gmail.com?subject=Project Collaboration"
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

export default GetInTouchBanner;
