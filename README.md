# Harsh Rana — Developer Portfolio

A hyper-modern, cinematic developer portfolio built with Next.js 15, TypeScript, Three.js, GSAP, and Framer Motion.



Live Website:
https://portfolio-harsh-ashy.vercel.app/

## ✨ Features

- **3D Hero Section** — React Three Fiber particle field + floating orb
- **Custom Animated Cursor** — Glowing dot + magnetic ring
- **Page Loader** — Cinematic boot sequence animation
- **Scroll Progress** — Gradient top bar
- **Smooth Scrolling** — Lenis-powered buttery scroll
- **Terminal Animation** — Live typing hacker terminal in hero
- **Typing Effect** — Cycling role titles with real typing/deleting
- **Glassmorphism Cards** — Blurred, neon-bordered project cards
- **3D Tilt Effect** — Mouse-tracked perspective on project cards
- **Skill Bars** — Animated on scroll-into-view
- **Futuristic Timeline** — Glowing animated experience section
- **Contact Form** — Neon inputs with terminal-style info block
- **Responsive** — Mobile-first design with touch-friendly interactions

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| 3D Graphics | React Three Fiber + Drei |
| Animation | GSAP + Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Lucide React |

## 📁 Structure

```
harsh-portfolio/
├── app/
│   ├── globals.css       # Global styles, animations, design tokens
│   ├── layout.tsx        # Root layout with cursor, scroll, loader
│   └── page.tsx          # Main page composing all sections
├── components/
│   ├── sections/         # Hero, About, Projects, Skills, Experience, Contact
│   ├── three/            # HeroCanvas, ParticleField, FloatingOrb
│   └── ui/               # Navbar, Footer, Cursor, Loader, ScrollProgress
├── public/
│   └── resume.pdf        # Replace with your actual resume
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Branding / Content
Edit the data in each section component:
- `components/sections/Hero.tsx` — Name, role, terminal lines
- `components/sections/About.tsx` — Bio, stats, skills
- `components/sections/Projects.tsx` — Project data
- `components/sections/Skills.tsx` — Skill categories and levels
- `components/sections/Experience.tsx` — Education timeline
- `components/sections/Contact.tsx` — Contact links

### Resume
Replace `public/resume.pdf` with your actual PDF.

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --purple-neon: #b44fff;
  --blue-electric: #00c3ff;
  --cyan-neon: #00fff5;
  --pink-soft: #ff6eb4;
}
```

## 📦 Build

```bash
npm run build
npm start
```

## 🚀 Deploy

Works seamlessly on Vercel:
```bash
npx vercel
```
