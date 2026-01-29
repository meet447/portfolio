import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, FileText, MapPin, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [copied, setCopied] = useState(false);
  const email = "meetsonawane3@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="container-resume">
        <div className={`flex flex-col items-center text-center ${isHome ? 'py-10 sm:py-16' : 'py-6 sm:py-8'}`}>
          {/* Status Badge - Only on home */}
          {isHome && (
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-accent/10 text-accent border border-accent/20 animate-pulse">
                ● Available for new opportunities
              </span>
            </div>
          )}

          {/* Name & Title */}
          <Link to="/">
            <h1 className={`${isHome ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'} font-bold mb-2 tracking-tighter hover:text-accent transition-colors`}>
              Meet Sonawane
            </h1>
          </Link>
          
          <p className={`${isHome ? 'text-base sm:text-lg' : 'text-sm'} text-muted-foreground mb-4 font-mono`}>
            Fullstack Software Engineer <span className="mx-2 text-border">|</span> 
            <span className="text-foreground"> Systems & AI Enthusiast</span>
          </p>

          {/* Metadata - Only on home */}
          {isHome && (
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8 font-mono">
              <span className="flex items-center gap-1">
                <MapPin size={12} /> India
              </span>
              <span>•</span>
              <span>Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          )}

          {/* CTA Buttons - Smaller on subpages */}
          <div className={`flex flex-wrap items-center justify-center gap-4 ${isHome ? 'mb-10' : 'mb-6'}`}>
            <div className="flex items-center gap-2">
              <a href={`mailto:${email}`}>
                <Button variant="default" size="sm" className="font-mono h-9 px-5 text-xs">
                  <Mail size={14} className="mr-2" />
                  Get in Touch
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-9 w-9" 
                onClick={copyEmail}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              </Button>
            </div>
            <a href="/resume.pdf" target="_blank">
              <Button variant="outline" size="sm" className="font-mono h-9 px-5 text-xs">
                <FileText size={14} className="mr-2" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Navigation & Socials */}
          <div className={`w-full max-w-xs ${isHome ? 'border-t border-border pt-6' : ''} flex flex-col items-center`}>
            <nav className="flex items-center justify-center gap-6 mb-6">
              <Link to="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">
                Notes
              </Link>
            </nav>

            <div className="flex items-center gap-5">
              <a href="https://github.com/meet447" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/meet-sonawane/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;