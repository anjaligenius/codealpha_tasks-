# PixelGallery — Responsive Image Gallery Website

> **CodeAlpha Task 1: Responsive Image Gallery**  
> UI/UX faithfully translated and enhanced from **Google Stitch** (`projects/10413953539738233483`) into a fully functional, production-grade frontend website using HTML5, modern Tailwind CSS, custom CSS animations, and vanilla JavaScript.

---

## 🌟 Overview

**PixelGallery** is an editorial fine art photography showcase inspired by contemporary gallery platforms (such as Unsplash, Pinterest, and editorial publications). It incorporates Google Stitch's design system tokens, typography pairing (Plus Jakarta Sans & Inter), soft glassmorphic backdrops, deep purple accents (`#5B45C8` / `#7965E8`), and responsive multi-column layouts across Desktop (1440px), Tablet (768px), and Mobile (375px).

---

## ✨ Features & Architecture

### 1. Sticky Glassmorphic Navigation Bar
- **Brand Identity:** Camera aperture insignia with clean brand typography.
- **Navigation Links:** Smooth scrolling to Home, Explore Gallery, Editor's Picks, and Curatorial Statement.
- **Scroll Spy:** Automatically detects and highlights the active section as you scroll.
- **Search Shortcut & Favorites Badge:** Live counter displaying saved favorites.
- **Mobile Drawer:** Animated slide-in navigation drawer with backdrop blur.

### 2. Editorial Hero Section
- **Curated Fine Art Showcase:** Minimalist pill tag with pulsing accent indicator.
- **Editorial Headline:** *"Discover the Beauty in Every Frame."*
- **Call-to-Action Buttons:** *"Explore Gallery"* and *"Editor's Collections"*.
- **Featured Photograph Showcase:** Daily spotlight photograph (*"Alpine Dawn Awakening"*) featuring photographer credits, geographic location, and camera EXIF parameters (`1/250s · f/8.0 · ISO 100`).

### 3. Sticky Search & Filter Toolbar
- **Real-Time Live Search:** Instant keyword filtering across titles, categories, photographers, locations, camera gear, and tags.
- **Category Filter Pills:** 
  - *All Photos*
  - *Nature*
  - *Travel*
  - *Architecture*
  - *Animals*
  - *Portraits*
- Pill buttons feature active purple elevation, smooth transition animations, and live count updates.

### 4. Interactive Responsive Gallery Grid
- Responsive grid adapting cleanly:
  - **Desktop (1280px+):** 4 columns
  - **Laptop (1024px+):** 3 columns
  - **Tablet (640px+):** 2 columns
  - **Mobile (375px):** 2 columns / 1 column
- **Hover Zoom:** Smooth `scale(1.04)` transition with dark translucent gradient overlay.
- **Interactive Favorite Hearts:** Clicking the heart saves the item to `localStorage`, pulses the heart icon, and increments the live like count.
- **Skeleton Shimmer Loading:** Built-in placeholder shimmers that gracefully vanish once images load.
- **Empty State Feedback:** Displays friendly recovery instructions and a *"Reset All Filters"* button when no search queries match.

### 5. Fullscreen Lightbox Viewer (Google Stitch Screen 1)
- Seamless fullscreen modal with backdrop blur (`rgba(43, 47, 70, 0.92)`).
- **Top Control Bar:** Live counter badge (`03 / 16`), toggleable favorite heart, high-res download button, link share button, and close dismiss button.
- **Center Stage:**
  - Previous and Next navigation arrows.
  - Large centered photograph with subtle ambient vignette.
  - **Click/Tap to Zoom:** Toggles `scale(1.3)` zoom view.
- **Curatorial EXIF Metadata:** Title, category badge, live like count, photographer name, camera body, lens, shutter speed, and ISO.
- **Exhibition Sequence Thumbnails:** Horizontally scrollable thumbnail strip with active photo indicator and auto-centering.
- **Keyboard Controls:**
  - `Escape`: Close lightbox
  - `ArrowLeft`: Previous photo
  - `ArrowRight`: Next photo
  - `F`: Toggle favorite
  - `D`: Download photo
- **Mobile Touch Gestures:** Swipe left/right support for touch screens.

### 6. Editor's Picks Collections
- Curated showcase featuring 3 distinctive visual collections:
  1. **Into the Wild** (Untouched habitats & wildlife)
  2. **Urban Perspectives** (Brutalist geometry & city lines)
  3. **Golden Hour** (Twilight glow & amber radiance)
- **Interactive Filtering:** Clicking any collection card smoothly scrolls to the gallery and automatically filters photos matching that theme.

### 7. Curatorial Statement & Gear Specs
- Highlights PixelGallery's artistic ethos.
- Features the **Curator's Gear Specification Card** (Leica M11, 35mm f/1.4 Summilux, ISO 100 reference standard).

### 8. Footer & Micro-Interactions
- Brand narrative, directory links, newsletter subscribe form with real-time toast feedback, and back-to-top floating button.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic, accessible markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **Tailwind CSS:** Responsive utility styling configured with Google Stitch's exact design theme colors.
- **Custom CSS3 (`css/style.css`):** Glassmorphism, card hover translations, skeleton animations, lightbox zoom transitions, and focus rings.
- **Vanilla JavaScript (ES6+ `js/main.js`):** Modular application logic, `localStorage` persistence, touch swipe handlers, and keyboard shortcuts.
- **Google Fonts:** Plus Jakarta Sans & Inter.
- **Google Material Symbols Outlined:** Clean vector iconography.

---

## 🚀 How to Run the Project

1. Clone or download the folder:
   ```bash
   cd c:\Users\Anjali\OneDrive\Desktop\CoadAlpha_project\Task1
   ```
2. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari):
   - Double click `index.html` directly in File Explorer, OR
   - Serve using VS Code Live Server / Python HTTP server:
     ```bash
     python -m http.server 8000
     ```
   - Then navigate to `http://localhost:8000`.

---

## 📱 Responsive Breakpoints Tested

- **Desktop (1440px wide):** Spacious 4-column gallery grid with expanded editorial spacing.
- **Tablet (768px wide):** Balanced 2–3 column layout with responsive sticky search.
- **Mobile (375px wide):** Compact touch-friendly layout, sliding navigation drawer, touch swipe in lightbox, and no horizontal overflow.

---

*Crafted for CodeAlpha Internship Task 1.*
