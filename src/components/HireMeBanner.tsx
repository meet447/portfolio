import { Button } from "@/components/ui/button";
import { Briefcase, Code, Star } from "lucide-react";

const HireMeBanner = () => {
  return (
    <section className="container-resume section-spacing">
      <div className="border border-border rounded-lg p-8 text-center bg-card">
        <div className="mb-6">
          <Briefcase className="h-12 w-12 mx-auto text-accent mb-4" />
          <h2 className="text-2xl font-bold mb-2">Available for Freelance & Projects</h2>
          <p className="text-muted-foreground mb-6">
            Looking for a skilled developer? I'm available for freelance work and exciting projects. 
            Let's build something amazing together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center p-4 border border-border rounded-lg">
            <Code className="h-8 w-8 text-accent mb-2" />
            <h3 className="font-semibold mb-1">Full-Stack Development</h3>
            <p className="text-sm text-muted-foreground">Modern web applications with React, Python, and more</p>
          </div>
          
          <div className="flex flex-col items-center p-4 border border-border rounded-lg">
            <Star className="h-8 w-8 text-accent mb-2" />
            <h3 className="font-semibold mb-1">AI & ML Projects</h3>
            <p className="text-sm text-muted-foreground">LLM integration, AI tools, and intelligent applications</p>
          </div>
          
          <div className="flex flex-col items-center p-4 border border-border rounded-lg">
            <Briefcase className="h-8 w-8 text-accent mb-2" />
            <h3 className="font-semibold mb-1">Consulting</h3>
            <p className="text-sm text-muted-foreground">Technical guidance and project architecture</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => window.open("mailto:meetsonawane3@gmail.com?subject=Freelance Opportunity", "_blank")}
          >
            Hire Me
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open("https://www.linkedin.com/in/meet-sonawane/", "_blank")}
          >
            View LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HireMeBanner;