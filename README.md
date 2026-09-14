# Mojtaba Roshana — Personal Academic Website

A complete, responsive personal academic website for **Mojtaba Roshana** (Moji), PhD Candidate in Physics at the University of Padua (CoMuNe Lab).

Live Web Address: [https://mojee13.github.io/](https://mojee13.github.io/)

---

## 🌟 Key Features

- **Interactive Canvas Network Simulator:** Live 2D network physics visualizer showcasing community structure and animated information propagation.
- **Interactive Fragility & Perturbation Tool:** Educational illustration allowing users to sever network connections and observe real-time rerouting of information pathways between source and target node sets.
- **Editorial Academic Design:** Warm off-white light mode and deep slate dark mode with customizable color tokens.
- **Publications & BibTeX Generator:** Categorized publications (Master's thesis, conference posters, preprints) with instant copyable BibTeX citations and PDF download links.
- **Curated Code Showcase:** Categorized GitHub repository cards with technical highlights and direct links.
- **Modular Data Architecture:** All text, publications, and projects are centralized in `js/content.js` for quick maintenance.
- **Zero-Dependency Dev Server:** Includes built-in Node.js server for instant local preview.

---

## 🚀 Quick Setup & Local Preview

```bash
# 1. Clone repository
git clone https://github.com/mojee13/mojee13.github.io.git
cd mojee13.github.io

# 2. Run local development server
npm run dev

# 3. Open browser at:
http://localhost:3000
```

---

## 📦 Project Structure

```
.
├── index.html                  # Main semantic HTML5 page with SEO metadata
├── server.js                   # Zero-dependency Node.js dev server
├── package.json                # Project scripts
├── HANDOVER.md                 # Fact verification handover report
├── assets/
│   └── Mojtaba_Roshana_Cv.pdf  # Master's Thesis & CV PDF asset
├── css/
│   ├── main.css                # Color tokens, typography, header, theme toggle
│   └── components.css          # Cards, canvas wrapper, fragility widget, modal styles
└── js/
    ├── content.js              # Centralized data configuration
    ├── hero-network.js         # Interactive Canvas 2D physics network simulator
    ├── fragility-widget.js     # Edge disruption & pathway rerouting widget
    ├── publications.js         # Publications renderer & BibTeX modal
    ├── projects.js             # Projects grid & filter tabs
    └── app.js                  # Navigation, theme controller, scroll observers
```

---

## 📄 License & Attribution

Designed & Developed for Mojtaba Roshana, CoMuNe Lab, University of Padua.
