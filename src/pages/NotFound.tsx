import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center glass-card p-12 max-w-md">
        <h1 className="mb-4 text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Button
          onClick={() => window.location.href = '/'}
          className="bg-primary hover:bg-primary-light text-primary-foreground rounded-2xl px-8 py-6"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
