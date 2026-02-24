import { Link } from "react-router-dom";
import { profile } from "@/content/profile";

const About = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-2xl animate-fade-in">
        <Link
          to="/"
          className="mb-12 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          ← Home
        </Link>

        <h1 className="mb-8 text-4xl font-bold md:text-5xl">About Me</h1>

        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          {profile.bio.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12">
          <div className="inline-block overflow-hidden rounded-sm border border-border">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="h-48 w-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{profile.name}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
