import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] flex items-center justify-center pt-28"
    >
      <div className="text-center">
        <h1 className="text-pixel text-6xl mb-4">404</h1>
        <p className="text-sm font-mono text-muted-foreground mb-8">Page not found</p>
        <Link to="/" className="social-btn inline-flex">
          <ArrowLeft size={16} />
          Back Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
