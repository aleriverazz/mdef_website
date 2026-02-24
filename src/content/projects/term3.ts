import type { Project } from "./term1";

export const term3 = {
  name: "Term 3",
  slug: "term-3",
  projects: [
    {
      id: "design-studio-03",
      title: "Design Studio 03",
      description: "Final design intervention — synthesizing everything learned across the master into a coherent, impactful project that addresses a real-world challenge.",
      images: ["/images/projects/term-3/ds03-1.jpg"],
    },
    {
      id: "thesis-project",
      title: "Thesis Project",
      description: "My master's thesis exploring the potential of design to foster community resilience through distributed manufacturing and open-source tools.",
      images: ["/images/projects/term-3/thesis-1.jpg"],
    },
  ] as Project[],
};
