import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container-resume">
        <div className="flex flex-col items-center text-center py-6 sm:py-10">
          {/* Name & Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-1">Meet Sonawane</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">Fullstack Developer</p>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-6 mb-5">
            <a href="#about" className="text-xs sm:text-sm hover:text-accent transition-colors">
              About
            </a>
            <a href="/projects" className="text-xs sm:text-sm hover:text-accent transition-colors">
              Projects
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;