import { Link } from "react-router-dom";
import { profile } from "@/content/profile";
import CursorTrail from "@/components/CursorTrail";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
      <CursorTrail />

      {/* Background placeholder for GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/fondo.gif')" }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-2 text-2xl font-bold tracking-tight md:text-4xl animate-fade-in" style={{ color: "#FF69B4" }}>
          {profile.name}
        </h1>
        <p className="text-base text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s", color: "#A9A9A9" }}>
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
