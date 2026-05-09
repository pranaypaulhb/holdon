# HoldOn – Landing Page

A modern, responsive static landing page built with **React + Vite**.

## 🚀 Tech Stack

- **React 18** – UI library
- **Vite 5** – Build tool & dev server
- **CSS Modules** – Scoped, maintainable styles
- **gh-pages** – GitHub Pages deployment

## 📁 Project Structure

```
holdon/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── About/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to GitHub Pages

```bash
# 1. Initialise git (if not already done)
git init

# 2. Stage all files
git add .

# 3. Commit
git commit -m "initial commit"

# 4. Create a repository on GitHub at https://github.com/new
#    then add it as remote:
git remote add origin https://github.com/pranaypaulhb/holdon.git

# 5. Push to GitHub
git push -u origin main

# 6. Deploy to GitHub Pages
npm run deploy
```

The site will be available at: **https://pranaypaulhb.github.io/holdon**

## 🎨 Landing Page Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed nav with logo, links, CTA, responsive hamburger menu |
| **Hero** | Gradient background, animated task-card illustration, stats |
| **Features** | 6 feature cards with icons and hover effects |
| **About** | Company description, image placeholder, achievement badge |
| **Testimonials** | 4 user review cards with star ratings |
| **Contact** | Contact details, social links, and a functional message form |
| **Footer** | Logo, quick links, legal links, newsletter form, copyright |

## ✨ Key Features

- **Fully responsive** — mobile, tablet, desktop
- **Smooth scrolling** — native CSS scroll-behavior
- **Subtle animations** — fade-up entrance, floating elements, hover effects
- **CSS Modules** — zero global namespace collisions
- **Semantic HTML** — accessible markup throughout
- **Production-ready** — optimised Vite build
