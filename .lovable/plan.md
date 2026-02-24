

# MDEF Portfolio Website

## Overview
A playful, clean personal portfolio site for your Master in Design for Emergent Futures projects. Built with React + Tailwind CSS (your current stack), using Helvetica typography and a white/grey/pink/neon-green color palette.

> **Note:** Your project uses React + Vite (not Next.js), so I'll adapt the plan accordingly. Content will live in easy-to-edit TypeScript files that you can update in VS Code.

---

## Design System
- **Typography:** Helvetica, Arial, sans-serif
- **Colors:** White (#FFFFFF) backgrounds, Rat Grey (#8C8C8C) for secondary text, Hot Pink (#FF69B4) and Neon Green (#39FF14) for accents and hover states
- **Border radius:** Minimal, keeping it clean
- **Animations:** Fade/slide transitions, custom cursor trail on cover page only

---

## Pages & Features

### 1. Cover Page (/)
- Full-screen background (placeholder for your GIF)
- Centered title: your name / "MDEF Portfolio"
- Bottom-aligned menu with three links: About Me, Master Journey, Contact
- **Custom cursor trail effect** — a soft fading generative glow that follows the mouse (only on this page)

### 2. About Me (/about)
- Clean bio text (loaded from a content file you can edit)
- Small profile picture at the bottom
- Simple, readable layout

### 3. Master Journey Landing (/journey)
- Menu showing Term 1, Term 2, Term 3
- Each term is a clickable card/link leading to its term page
- Styled with accent colors

### 4. Term Pages (/journey/term-1, etc.)
- Lists all projects for that term
- Each project shown as a clickable card with title and brief description
- Clicking a project opens the full-screen project view

### 5. Full-Screen Project View
- Smooth fade/scale animation to expand and cover the entire screen
- Shows: project title, description, and images
- **X button** in the top-right corner to close and return to the term page
- Fully responsive on all devices

### 6. Contact Page (/contact)
- Simple list of contact links (email, social media)
- Styled with accent colors for links

---

## Content Management (Easy Editing)

All content stored in simple TypeScript files under `src/content/`:

```
src/content/
  profile.ts        → name, bio, profile image path
  contact.ts        → contact links (email, socials)
  projects/
    term1.ts        → term name + array of projects (title, description, images)
    term2.ts
    term3.ts
```

**Adding a new project** = add an entry to the term's array.  
**Adding a new term** = create a new file and register it.  
Images go in `public/images/` organized by project.

---

## Interactive Effects
- **Cover page cursor trail:** Canvas-based particle trail that fades behind the mouse
- **Page transitions:** Smooth fade-in animations between routes
- **Hover states:** Neon green or pink highlights on links and cards
- **Project open/close:** Smooth scale + fade animation

---

## Responsive Design
- Fully responsive across desktop, tablet, and mobile
- Cover page menu stacks vertically on mobile
- Project grid adapts from multi-column to single-column
- Full-screen project view works on all screen sizes

