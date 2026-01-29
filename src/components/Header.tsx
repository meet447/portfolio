import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container-resume">
        <div className="flex flex-col items-center text-center py-10 sm:py-16">
          {/* Status Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-accent/10 text-accent border border-accent/20 animate-pulse">
              ● Available for new opportunities
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tighter">Meet Sonawane</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-4 font-mono">
            Fullstack Software Engineer <span className="mx-2 text-border">|</span> 
            <span className="text-foreground"> Systems & AI Enthusiast</span>
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8 font-mono">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> India
            </span>
            <span>•</span>
            <span>Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href="mailto:meetsonawane3@gmail.com">
              <Button variant="default" size="sm" className="font-mono h-9 px-5">
                <Mail size={16} className="mr-2" />
                Get in Touch
              </Button>
            </a>
            <Button variant="outline" size="sm" className="font-mono h-9 px-5">
              <FileText size={16} className="mr-2" />
              Download CV
            </Button>
          </div>

          {/* Navigation & Socials */}
          <div className="w-full max-w-xs border-t border-border pt-6 flex flex-col items-center">
            <nav className="flex items-center justify-center gap-6 mb-6">
              <a href="#about" className="text-xs hover:text-accent transition-colors uppercase tracking-widest font-bold">
                About
              </a>
              <Link to="/projects" className="text-xs hover:text-accent transition-colors uppercase tracking-widest font-bold">
                Projects
              </Link>
              <Link to="/blog" className="text-xs hover:text-accent transition-colors uppercase tracking-widest font-bold">
                Notes
              </Link>
            </nav>

            <div className="flex items-center gap-5">
              <a href="https://github.com/meet447" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/meet-sonawane/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;