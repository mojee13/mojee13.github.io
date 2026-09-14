# Handover & Fact Verification Document

**Project:** Personal Academic Website for Mojtaba Roshana (Moji)  
**Status:** Completed & Tested  
**Dev Server:** `npm run dev` (running locally at `http://localhost:3000`)  
**GitHub Pages Target:** `https://mojee13.github.io/`

---

## 1. Summary of Verified Facts vs. Unconfirmed Claims

### Verified Information (Included on Website)
- **Identity & Title:** Mojtaba Roshana (Informal: Moji), PhD Candidate in Physics (Started November 2024). Not titled "Dr." or implied to have finished PhD.
- **Affiliation:** Department of Physics and Astronomy "Galileo Galilei", University of Padua, Italy; CoMuNe Lab (Complex Multilayer Networks Lab).
- **Supervisor:** Prof. Manlio De Domenico.
- **Education:**
  - **PhD in Physics:** University of Padua (Nov 2024 – Present).
  - **MSc in Physics of Data:** University of Padua (Oct 2021 – Completed July 2024).
  - **BSc in Physics:** Shiraz University (Sep 2017 – Sep 2021). Background in computational astrophysics.
- **Master's Thesis:** *"Generalized Thermodynamics in Complex Information Dynamics: Optimization Techniques and Applications to Mammalian Connectomes"* (Univ. of Padua, July 2024). PDF attached and linked from `assets/Mojtaba_Roshana_Cv.pdf`.
- **Conference Presentation:** NetSci-X 2024 Poster titled *"Information pathways analysis in mammalian connectomes unravels clusters akin to the phylogenetic tree"* (Mojtaba Roshana, Manlio De Domenico, et al.).
- **Primary PhD Research:** Functional Fragility in Infrastructure Networks (ongoing research; paper in preparation).
- **Secondary / Collaborative Research:** The Arrow of Time in Temporal Networks (ongoing collaborative research / empirical validation).
- **Curated Repositories:**
  - `mojee13-reconstruction-of-complex-networks`
  - `Comparison-Between-the-Neuronal-Network-and-the-Cosmic-Web`
  - `Percolation`
  - `Ising-model`
  - `Delay-Time-Dist.-of-Compact-Binary-Objects`
  - `LaboratoryOfComputationalPhysics_Y4`
- **Applied Work (Beyond Research):** Limo team digital solutions & data analysis (`website_Limo`, `Madaar`). Accurately categorized as exploratory applied work without commercial exaggeration.
- **Verified Contact Emails:** `mojtaba.roshana@phd.unipd.it`, `roshana.mojtaba13@gmail.com`.

### Unconfirmed Details (Flagged for Review)
1. **ORCID & Google Scholar:** No ORCID or Google Scholar link was explicitly provided in the CV or prompt; these are omitted to avoid speculation and can be added to `js/content.js` once created.
2. **Co-authors for Fragility Paper:** The paper in preparation lists *"Mojtaba Roshana, et al."*. Additional co-authors can be listed in `js/content.js` when finalized.
3. **LinkedIn Full Profile Text:** LinkedIn raw text was restricted behind auth, but core credentials match the CV and Padua University thesis records.

---

## 2. Maintenance & Editing Guide

All site content is decoupled from layout markup and resides inside:
`js/content.js`

### How to update content:
1. **Change Biography or Headline:**  
   Edit `siteConfig.identity.headline` or `siteConfig.identity.biography` in `js/content.js`.
2. **Add a Publication or Preprint:**  
   Add a new entry to the `siteConfig.outputs` array in `js/content.js` with `id`, `category`, `title`, `authors`, `venue`, `year`, `pdfUrl`, and `bibtex`.
3. **Add or Update a GitHub Repository:**  
   Add an entry to `siteConfig.projects` in `js/content.js` with `title`, `category`, `tag`, `description`, and `githubUrl`.
4. **Replace the CV PDF:**  
   Replace the file located at `assets/Mojtaba_Roshana_Cv.pdf` with your updated PDF file.
5. **Update PhD Project Status:**  
   Edit the `status` field inside `siteConfig.featuredResearch` in `js/content.js`.

---

## 3. GitHub Pages Deployment Instructions (`mojee13.github.io`)

Your site is built with standard HTML5, CSS3, and ES Modules with relative path references, making it ready for instant deployment to GitHub Pages without complex build steps.

### Step 1: Initialize Git Repository in this Folder
```bash
git init
git add .
git commit -m "Build complete personal academic website for Mojtaba Roshana"
```

### Step 2: Link to your GitHub Pages Repository
```bash
git remote add origin https://github.com/mojee13/mojee13.github.io.git
git branch -M main
```

### Step 3: Push to GitHub
```bash
git push -u origin main --force
```

*(Note: Verify your `mojee13.github.io` settings on GitHub under Settings -> Pages to ensure the source branch is set to `main` at root `/`)*.

---

## 4. Local Development Server

To run the site locally for edits and preview:
```bash
npm run dev
# Open http://localhost:3000 in your browser
```
