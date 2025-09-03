import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const GetInTouchBanner = () => {
  return (
    <section className="container-resume section-spacing">
      <div className="border border-border rounded-lg p-8 text-center bg-card">
        <div className="mb-4">
          <MessageCircle className="h-12 w-12 mx-auto text-accent mb-4" />
          <h2 className="text-2xl font-bold mb-2">Want to work on a project together?</h2>
          <p className="text-muted-foreground mb-6">
            I'm always excited to collaborate on interesting projects. Let's discuss your ideas and bring them to life!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => window.open("mailto:meetsonawane3@gmail.com?subject=Project Collaboration", "_blank")}
          >
            <Mail className="h-4 w-4 mr-2" />
            Get in Touch
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open("https://www.linkedin.com/in/meet-sonawane/", "_blank")}
          >
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchBanner;