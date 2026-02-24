import type { Project } from "./term1";

export const term2 = {
  name: "Term 2",
  slug: "term-2",
  projects: [
    {
      id: "design-studio-02",
      title: "Design Studio 02",
      description: "Deepening our design practice through community engagement and iterative prototyping. This term focused on co-design methods and participatory approaches.",
      images: ["/images/projects/term-2/ds02-1.jpg"],
    },
    {
      id: "fab-academy",
      title: "Fab Academy",
      description: "Digital fabrication intensive — from 3D printing and laser cutting to electronics and programming. Building skills to prototype ideas at any scale.",
      images: ["/images/projects/term-2/fab-1.jpg"],
    },
  ] as Project[],
};
