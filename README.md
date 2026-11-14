# My Portfolio — React + Vite

A beautiful, animated full-stack developer portfolio inspired by Brittany Chiang's design.

## 🚀 Quick Start

```bash
cd my-portfolio
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build
```

## ✏️ Customize Your Portfolio

**All your personal data is in one file:**
```
src/data/portfolioData.js
```

Edit the following:
- `personalInfo` — name, bio, email, social links, resume link
- `skills` — your skills by category with proficiency levels
- `projects` — featured & other projects
- `experience` — work history
- `education` — education details
- `blogPosts` — blog articles

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/       — Sticky navbar with mobile menu
│   ├── Hero/         — Animated intro with typing effect
│   ├── About/        — About me section
│   ├── Skills/       — Tabbed skill bars
│   ├── Experience/   — Tabbed work history
│   ├── Projects/     — Featured + grid projects
│   ├── Blog/         — Blog/Articles cards
│   ├── Contact/      — Contact form + info
│   └── Footer/       — Footer
├── data/
│   └── portfolioData.js  — ⭐ ALL YOUR DATA HERE
└── styles/
    └── global.css    — Global CSS variables & base styles
```

## 🎨 Customizing Colors

Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --bg-primary: #0a0f1a;     /* Main background */
  --accent: #64ffda;          /* Accent color (teal) */
  --text-primary: #ccd6f6;   /* Primary text */
  --text-secondary: #8892b0; /* Secondary text */
}
```

## 📧 Setting Up Contact Form

1. Sign up at [EmailJS](https://emailjs.com)
2. Create a service and email template
3. In `Contact.jsx`, replace the `handleSubmit` function with EmailJS send call

## 🌐 Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

Also update `vite.config.js` to add `base: '/my-portfolio/'`.

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **Framer Motion** — Animations
- **React Scroll** — Smooth scrolling
- **React Icons** — Icon library
- **React Type Animation** — Typing effect
