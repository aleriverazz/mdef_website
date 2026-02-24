export interface ContactLink {
  label: string;
  url: string;
  icon?: string;
}

export const contactLinks: ContactLink[] = [
  { label: "Email", url: "mailto:your@email.com" },
  { label: "Instagram", url: "https://instagram.com/yourhandle" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { label: "GitHub", url: "https://github.com/yourusername" },
];
