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
      id: "unpacking-tech-systems",
      title: "Unpacking Tech Systems",
      description: "Mapping emerging trends and weak signals to identify design opportunities for future interventions. A collaborative exercise in foresight and speculative thinking.",
      images: ["/images/projects/term-1/aws-1.jpg"],
    },
    {
      id: "Reflections-I---Living-with-your-own-ideas",
      title: "Reflections I - Living with your own ideas",
      description: "Introduction to biology and agriculture as design materials. Experiments with biomaterials, living organisms, and regenerative systems.",
      images: ["/images/projects/term-1/rflwoi-1.jpg"],
    },
    {
      id: "Reflections-II---Design-with-others",
      title: "Reflections II - Design with others",
      description: "Introduction to biology and agriculture as design materials. Experiments with biomaterials, living organisms, and regenerative systems.",
      images: ["/images/projects/term-1/rfdwo-1.jpg"],
    },
    {
      id: "Extended-Intelligences-I---A-technical-history-of-AI",
      title: "Extended Intelligences I - A technical history of AI",
      description: "Introduction to biology and agriculture as design materials. Experiments with biomaterials, living organisms, and regenerative systems.",
      images: ["/images/projects/term-1/extended-intelligences-1.jpg"],
    },
    {
      id: "Extended-Intelligences-II---Personal-Manifesto",
      title: "Extended Intelligences II - Personal Manifesto",
      description: "Introduction to biology and agriculture as design materials. Experiments with biomaterials, living organisms, and regenerative systems.",
      images: ["/images/projects/term-1/extended-intelligences-manifesto-1.jpg"],
    },
    {
      id: "Other-Species-I",
      title: "Other Species I",
      description: "Introduction to biology and agriculture as design materials. Experiments with biomaterials, living organisms, and regenerative systems.",
      images: ["/images/projects/term-1/other-species-1.jpg"],
    },
    {
      id: "Fundamentals-of-Future-Makers",
      title: "(FUN)damentals of Future Makers",
      description: "Introduction to biology and agriculture as design materials. Experiments with biomaterials, living organisms, and regenerative systems.",
      images: ["/images/projects/term-1/fundamentals-of-future-makers-1.jpg"],
    },
  ] as Project[],
};
