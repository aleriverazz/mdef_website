export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const term1 = {
  name: "Term 1",
  slug: "term-1",
  projects: [
    {
      id: "design-studio-01",
      title: "Design Studio 01",
      description: "An exploration of emergent design methodologies through hands-on prototyping and critical reflection. This project examined how we can rethink everyday objects through the lens of sustainability and circularity.",
      images: ["/images/projects/term-1/ds01-1.jpg"],
    },
    {
      id: "atlas-of-weak-signals",
      title: "Atlas of Weak Signals",
      description: "Mapping emerging trends and weak signals to identify design opportunities for future interventions. A collaborative exercise in foresight and speculative thinking.",
      images: ["/images/projects/term-1/aws-1.jpg"],
    },
    {
      id: "bio-zero",
      title: "Bio & Agri Zero",
      description: "Introduction to biology and agriculture as design materials. Experiments with biomaterials, living organisms, and regenerative systems.",
      images: ["/images/projects/term-1/bio-1.jpg"],
    },
  ] as Project[],
};
