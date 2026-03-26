# FUTURE_FS_01
# 🖥️ Otsile Sebola — Personal Portfolio Website
 
> A cyberpunk-themed personal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed to showcase software engineering skills, projects, and experience with a dark navy aesthetic and immersive tech-inspired interactions.
 
---
 
## 📸 Preview
 
> **Welcome Page** — Animated splash screen with scrolling tech ticker  
> **Hero Page** — Name, headline, spinning hex deco, and status badges  
> **About Page** — Profile photo (left) + bio (right) + centered stat cards  
> **Skills Page** — Categorized skill cards with glow hover effects  
> **Projects Page** — Full project cards with tech stack tags and GitHub links  
> **Resume Page** — Timeline layout for experience and education + CV download  
> **Contact Page** — Contact form with sidebar links and social buttons  
 
---
 
## 📁 Project Structure
 
```
portfolio/
├── index.html        # All HTML markup — structure only, no inline styles or scripts
├── style.css         # All styling — variables, animations, layout, responsive breakpoints
├── script.js         # All behaviour — cursor, binary rain transitions, routing, form
├── your-photo.jpg    # ← Replace this with your actual profile photo
└── README.md         # Project documentation
```
 
---
 
## ✨ Features
 
- **Binary Rain Page Transitions** — Matrix-style `<canvas>` animation plays between every page navigation
- **Custom Cursor** — Glowing dot + ring cursor that reacts to clicks
- **CRT Scanline Overlay** — Subtle scanline effect layered over the full page for depth
- **Scrolling Ticker** — Tech stack marquee on the welcome page
- **Spinning Hex Deco** — Animated SVG hexagonal rings on the hero page
- **Pulse Status Badges** — Live-looking availability indicators
- **Glow Hover Effects** — Cyan and green box-shadow glows on cards, buttons, and inputs
- **Live Clock** — Real-time HH:MM:SS clock in the footer
- **Clipped Polygon Buttons** — Custom `clip-path` angled button shapes with slide-fill hover
- **Photo Frame** — Clipped corner-bracket frame for the About profile photo
- **Contact Form Validation** — Name, email format, and message field checks
- **Fully Responsive** — Collapses gracefully on tablet and mobile viewports
 
---
 
## 🎨 Design System
 
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#020b18` | Main background |
| `--panel` | `#091d3e` | Card / panel background |
| `--border` | `#0d3a6e` | Card borders |
| `--accent` | `#00d4ff` | Primary cyan — headings, glows, links |
| `--green` | `#00ff9d` | Secondary green — tags, badges, section labels |
| `--text` | `#c8dff5` | Body text |
| `--muted` | `#4a7aab` | Subdued text, nav links |
| `--white` | `#e8f4ff` | High-contrast headings |
| `--glow` | `0 0 18px rgba(0,212,255,.55)` | Cyan glow shadow |
| `--glow-g` | `0 0 18px rgba(0,255,157,.45)` | Green glow shadow |
 
**Fonts** (loaded from Google Fonts):
- `Orbitron` — Display headings, logo, buttons
- `Share Tech Mono` — Labels, tags, code-style text
- `Rajdhani` — Body text, descriptions
