import { Mail, Linkedin } from "lucide-react";

const GetInTouchBanner = () => {
  return (
    <section>
      <div className="card-surface p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <h2 className="text-pixel text-2xl sm:text-3xl mb-3">Get in Touch</h2>
        <p className="text-sm font-mono text-muted-foreground mb-8 leading-relaxed">
          I'm always excited to collaborate on interesting projects. Let's discuss your ideas and bring them to life!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:meetsonawane3@gmail.com?subject=Project Collaboration"
            className="social-btn justify-center bg-foreground text-background hover:bg-foreground/90 hover:border-foreground"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/meet-sonawane/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn justify-center"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchBanner;
