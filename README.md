# Newsmaker Media Group

A high-performance, visually immersive agency platform built with **React 19**, **Framer Motion**, and **Tailwind CSS**. This project delivers a seamless storytelling experience for a creative and tech-focused media group.

## 🚀 Key Features

### 💎 Immersive User Experience
- **Adaptive Navbar:** Intelligent transparency switching using `react-router-dom` and `IntersectionObserver` to maintain contrast across diverse page sections.
- **Dynamic Animations:** Fluid transitions and entry effects powered by `Framer Motion` for a premium, high-end feel.
- **Video-First Design:** Optimized full-screen video backgrounds and interactive media elements throughout the Home, About, and Work pages.

### 🛠️ Specialized Modules
- **Service Explorer:** Interactive dropdown and overlay system for exploring PR, Digital Marketing, and Strategic Communications.
- **Project Showcase:** Detailed work case studies with integrated video playback and rich media descriptions.
- **Leadership Directory:** A grayscale-to-color interactive board showcasing agency talent and global reach.
- **News & Insights:** A fully filterable news engine with category-based sorting and responsive card layouts.

## 💻 Tech Stack

- **Frontend Framework:** React 19
- **Styling:** Vanilla CSS (Modular), Tailwind CSS, and Styled Components
- **Animation:** Framer Motion
- **Routing:** React Router DOM (v7)
- **State Management:** React Hooks (useState, useEffect, useRef)
- **Utility:** Lucide React for iconography

## 🏗️ Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── about/           # About page specific sections
│   ├── career/          # Job board and career modules
│   ├── contact/         # Lead generation forms
│   ├── home/            # Core landing page segments
│   ├── News/            # News engine and reporting
│   ├── people/          # Leadership and client components
│   ├── service/         # Product and service definitions
│   └── work/            # Portfolio and case study displays
├── CSS/                 # Component-specific stylesheets
├── data/                # JSON-based content stores
├── images/              # Static brand assets
└── video/               # Optimized web media
```

## 🛠️ Development

### Local Setup

1. **Clone & Install:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm start
   ```
   *The application defaults to port **3045** via `cross-env`.*

3. **Build for Production:**
   ```bash
   npm run build
   ```

