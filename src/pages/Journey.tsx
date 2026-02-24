import { Link } from "react-router-dom";
import { terms } from "@/content/projects";

const Journey = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-2xl animate-fade-in">
        <Link
          to="/"
          className="mb-12 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          ← Home
        </Link>

        <h1 className="mb-10 text-4xl font-bold md:text-5xl">Master Journey</h1>

        <div className="space-y-4">
          {terms.map((term) => (
            <Link
              key={term.slug}
              to={`/journey/${term.slug}`}
              className="group block rounded-sm border border-border p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <h2 className="text-2xl font-bold transition-colors group-hover:text-accent">
                {term.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {term.projects.length} project{term.projects.length !== 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
