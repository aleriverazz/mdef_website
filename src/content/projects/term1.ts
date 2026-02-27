export interface Project {
  id: string;
  title: string;
  description1?: string;    // first text block
  images: string[];        // up to five images; order is maintained
  description2?: string;    // second text block
}

export const term1 = {
  name: "Term 1",
  slug: "term-1",
  projects: [
    {
      id: "design-studio-01",
      title: "Design Studio 01",
      description1: "...",
      images: [
        "/images/projects/term-1/ds01-1.jpg"
      ],
      description2: ""
    },
    {
      id: "unpacking-tech-systems",
      title: "Unpacking Tech Systems",
      description1: "...",
      images: [
        "/images/projects/term-1/aws-1.jpg"
      ],
      description2: ""
    },
    {
      id: "Reflections-I---Living-with-your-own-ideas",
      title: "reflections I - living with your own ideas",
      description1: `★ ★ ★ ★ ★ ★ ★ ★ ★ To become the best version of yourself ★ ★ ★ ★ ★ ★ ★ ★ ★ On Nails, Symbolic Power, and Becoming ........ I began by questioning what constitutes the “best version” of oneself. More precisely, I asked when I feel I am embodying that ideal. This inquiry resonates with our lecture’s exploration of the natural, femininity, beauty, and functionality. My personal investigation started with beauty: when do I feel like the best version of myself? The answer, perhaps oddly, is found in the process of getting my nails done. This feeling transcends mere aesthetics; it is an embodied experience. I started to research this sensation, focusing on my hands—the primary extensions of my body that interact with the world. When they are adorned, I feel pretty, beautiful, and most authentically myself. Culturally, this practice carries significant meaning. Here in Europe, the long, extravagant nail art I grew up seeing in Latin American contexts is uncommon. This style—the “bling bling,” the extra length, the pearls and stones—is a specific cultural expression. Functionality is, in a sense, sacrificed; one’s manual dexterity is compromised. Yet, this very sacrifice is what makes the presentation so powerfully symbolic. Who has the privilege to sit for two or three hours at eleven in the morning every three to four weeks? As Sayak Valencia might suggest, in the context of “gore capitalism” and the performance of identity, such aesthetics are not passive. Ornate, “bling” nails are a social signifier: they communicate that one has time, disposable income, and the power to spend a significant sum (a thousand Mexican pesos monthly) on a non-essential part of the body. In this sense, a specific, hyper-feminine aesthetic becomes a form of power within Mexican society. This led me to an imaginative, speculative extreme: a concept of neobuchona, prosthetic nails. I envisioned what a hyper-norteño, buchón version of robotic nail prosthetics would look like—excessive, gleaming, embedded with pearls and stones, screaming power and wealth. In a robotic future so often imagined as masculine, how would femininity, particularly this fronteriza femininity described by Valencia as a “borderized” and potent force, manifest? This is my exploration. In my daily life, I opt for clean, useful nails. I cut them when necessary, as I must work with my hands, on computers, and with machinery. I cannot afford that monthly financial or functional sacrifice. Yet, I still experience that potent feeling of being my best self with my own, more subdued taste of symbolic cleanliness and power—a subtle assertion of identity and control right at my fingertips.`,
      images: [
        "/images/projects/term-1/1109.0.gif",
      ],
      description2: `★ ★ ★ ★ ★ ★ ★ ★ ★ To become something else ★ ★ ★ ★ ★ ★ ★ ★ ★ On Strawberries and Self........ It is said we share 60% of our DNA with a strawberry. A humbling, if not slightly absurd, thought. But what would it truly take to transform myself into one? I love strawberries. They are not merely pretty to look at, but I would argue, beautiful in taste. For this exploration of “becoming,” I chose to inhabit the essence of something edible, something that grows from the earth, something deceptively simple. I decided to become a strawberry by engaging in the very act of creating one: I began to breed a strawberry plant. This process, much like the growth of a berry itself, demanded time, effort, and a particular kind of patience. I began to translate the needs of a plant into my own. A berry requires healthful soil and time; I translated this into a need for a certain quality of companionship—present, but not overwhelming, much like water for a plant that must be just enough, lest it drowns. I needed silence and patience, in equal measure to how my strawberry needed good soil and sunlight. What began as an exercise in becoming-other quietly turned into a profound introspection. In striving to nurture something as simple and pretty as a red strawberry, I found myself wanting to embody those very qualities. This exploration became less about transforming into a fruit and more about understanding the conditions for my own growth, aiming for a state of being that is both quietly productive and beautifully uncomplicated.`,
    },
    {
      id: "Reflections-II---Design-with-others",
      title:"reflections II - design with others",
      description1: "...",
      images: [
        "/images/projects/term-1/rfdwo-1.jpg"
      ],
      description2: ""
    },
    {
      id: "Extended-Intelligences-I---A-technical-history-of-AI",
      title: "extended intelligences I - a technical history of AI",
      description1: "...",
      images: [
        "/images/projects/term-1/extended-intelligences-1.jpg"
      ],
      description2: ""
    },
    {
      id: "Extended-Intelligences-II---Personal-Manifesto",
      title: "extended intelligences II - personal manifesto",
      description1: "...",
      images: [
        "/images/projects/term-1/extended-intelligences-manifesto-1.jpg"
      ],
      description2: ""
    },
    {
      id: "Other-Species-I",
      title: "other species I",
      description1: ".",
      images: [
        "/images/projects/term-1/other-species-1.jpg"
      ],
      description2: ""
    },
    {
      id: "Fundamentals-of-Future-Makers",
      title: "(FUN)damentals of future makers",
      description1: "...",
      images: [
        "/images/projects/term-1/fundamentals-of-future-makers-1.jpg"
      ],
      description2: ""
    },
  ] as Project[],
};
