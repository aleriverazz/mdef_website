import { X } from "lucide-react";
import type { Project } from "@/content/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // --- NEW HELPER FUNCTION ---
const getImageUrl = (path: string) => {
  console.log('Original path from data:', path);
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL;
  console.log('BASE_URL:', base);
  const fullUrl = base + cleanPath;
  console.log('Final image URL:', fullUrl);
  return fullUrl;
};
  // ---------------------------

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-background animate-scale-in">
      <button
        onClick={onClose}
        className="fixed right-6 top-6 z-50 rounded-full border border-border p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
        aria-label="Close project"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="w-full max-w-3xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">{project.title}</h1>
        {project.description1 && (
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            {project.description1}
          </p>
        )}

        {/* first set of images: up to three */}
        {project.images.length > 0 && (
          <div className="space-y-6">
            {project.images.slice(0, 3).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-sm border border-border bg-muted"
              >
                <img
                  src={getImageUrl(img)}   // <-- CHANGED
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
                  Image placeholder
                </div>
              </div>
            ))}
          </div>
        )}

        {project.description2 && (
          <p className="my-10 text-lg leading-relaxed text-muted-foreground">
            {project.description2}
          </p>
        )}

        {/* remaining images */}
        {project.images.length > 3 && (
          <div className="space-y-6">
            {project.images.slice(3).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-sm border border-border bg-muted"
              >
                <img
                  src={getImageUrl(img)}   // <-- CHANGED
                  alt={`${project.title} — image ${i + 4}`}
                  className="w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
                  Image placeholder
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ⚠️ NOTE: This third block duplicates all images – you may want to remove it later */}
        {project.images.length > 0 && (
          <div className="space-y-6">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-sm border border-border bg-muted"
              >
                <img
                  src={getImageUrl(img)}   // <-- CHANGED
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
                  Image placeholder
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;