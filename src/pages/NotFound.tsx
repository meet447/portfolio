import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] flex items-center justify-center font-mono"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-accent">404</h1>
        <p className="text-xl text-muted-foreground mb-8">System Error: Path not found</p>
        <Link to="/">
          <Button variant="outline" className="font-mono">
            <Home size={16} className="mr-2" />
            Return to Root
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
