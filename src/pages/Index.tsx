import { Link } from "react-router-dom";
import { profile } from "@/content/profile";
import CursorTrail from "@/components/CursorTrail";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
      <CursorTrail />

      {/* Background placeholder for GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/home-background.gif')" }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-2 text-xl font-bold tracking-tight md:text-2xl text-primary animate-fade-in">
          {profile.name}
        </h1>
        <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {profile.title}
        </p>
      </div>

      <nav className="relative z-10 flex flex-col items-center gap-4 pb-12 sm:flex-row sm:gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <Link
          to="/about"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          About Me
        </Link>
        <Link
          to="/journey"
          className="text-sm font-medium transition-colors hover:text-accent"
        >
          Master Journey
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Index;
