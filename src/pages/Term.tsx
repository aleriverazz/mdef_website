import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTermBySlug, type Project } from "@/content/projects";
import ProjectModal from "@/components/ProjectModal";

const Term = () => {
  const { slug } = useParams<{ slug: string }>();
  const term = getTermBySlug(slug || "");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!term) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Term not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-2xl animate-fade-in">
        <Link
          to="/journey"
          className="mb-12 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          ← Master Journey
        </Link>

        <h1 className="mb-10 text-4xl font-bold md:text-5xl">{term.name}</h1>

        <div className="space-y-4">
          {term.projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group w-full rounded-sm border border-border p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <h2 className="text-xl font-bold transition-colors group-hover:text-primary">
                {project.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {project.description1}
              </p>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Term;
