<div align="center">

# ⚡ Pritamx4 · Developer Portfolio & GitDock

> **A high-performance, glassmorphic developer portfolio powered by React, Vite, and GitDock — an interactive live GitHub command center.**

[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub API](https://img.shields.io/badge/GitHub_API-Live_Telemetry-181717?style=for-the-badge&logo=github&logoColor=white)](https://docs.github.com/en/rest)

---

</div>

## 🛸 Spotlight: GitDock Command Center

**GitDock** is a custom-engineered floating launcher orb and interactive drawer panel built for developers. It brings live GitHub telemetry, contribution matrices, and real-time event streams directly into the web application.

```
┌─────────────────────────────────────────────────────────────┐
│  🛸 GitDock Launcher Orb (Draggable, Snappable, Screen-Aware) │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┴───────────────────────┐
       ▼                                               ▼
┌───────────────────────────────┐     ┌───────────────────────────────┐
│ 📊 Tab 1: Overview             │     │ ⚡ Tab 2: Activity Stream     │
│ • Live Repos, Stars, Storage  │     │ • Real-time Push Events       │
│ • 26-Week Contribution Grid   │     │ • Branch Creation / Deletes   │
│ • 56-Point Daily Bezier Curve │     │ • Star & Fork Activity Stream │
└───────────────────────────────┘     └───────────────────────────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │ 🔀 Tab 3: Pull Requests Tracker  │
              │ • Live PR Status Badges         │
              │ • Merged 🟣 / Open 🟢 / Closed  │
              └─────────────────────────────────┘
```

### 🌟 Key GitDock Features

- **🛸 Physics-Based Floating Orb**:
  - Fully draggable across the viewport even when the panel is open.
  - Edge-snapping logic and smart screen-aware auto-nudge position correction (zero clipping/covering).
  - Hover glassmorphism badge: `@Pritamx4 · GitHub Activity`.

- **📊 26-Week Contribution Heatmap**:
  - Displays 182 days (half a year) of continuous contribution data.
  - Horizontal mouse-wheel scroll support and auto-scrolls to the most recent weeks.
  - Mon/Wed/Fri day labels with proper padding & breathing space.

- **📈 56-Point Daily Bezier Spline Curve**:
  - Organic daily-driven activity curve calculated through 56 daily data points across 8 week blocks (`W1` to `W8`).
  - Floating glass crosshair tooltip tracking exact day dates and commit counts.

- **⚡ Real-Time Live Activity Feed**:
  - Live stream of GitHub events (`PushEvent`, `WatchEvent`, `CreateEvent`, `DeleteEvent`).
  - Commit message snippets, repository tags, and relative timestamps.

- **🔀 Pull Requests Tracker**:
  - Live PR tracking with sub-filter pills (`All`, `Merged`, `Open`, `Closed`).
  - Color-coded GitHub status pills (`Merged` 🟣, `Open` 🟢, `Closed` 🔴).

- **🎨 Authentic GitHub Underline Tab Navigation**:
  - Clean GitHub-style tab bar with active orange/gold indicator (`#F2B33D`) and Lordicon Lottie micro-animations.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19, Vite 8, ES Modules
- **Styling**: Custom Glassmorphism, CSS Custom Variables, Fluid Typography
- **Animations**: `@lordicon/react` Lottie Animations, SVG Path Bezier Interpolation, CSS Keyframes
- **API Engine**: GitHub REST API & `github-contributions-api`

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/Pritamx4/react.git
cd react
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the application live.

### 3. Production Build

```bash
npm run build
```

---

## 🤝 Connect & Contribute

<div align="left">

- **Developer**: Pritam Singh ([@Pritamx4](https://github.com/Pritamx4))
- **Repository**: [github.com/Pritamx4/react](https://github.com/Pritamx4/react)

</div>
