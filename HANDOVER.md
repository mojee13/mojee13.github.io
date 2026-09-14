# Handover & Fact Verification Document

**Project:** Personal Academic Website for Mojtaba Roshana (Moji)  
**Status:** Simplified, Refined & Deployed  
**GitHub Repository:** [github.com/mojee13/mojee13.github.io](https://github.com/mojee13/mojee13.github.io)  
**Live Site:** [https://mojee13.github.io/](https://mojee13.github.io/)

---

## 1. Summary of Verified Facts & Removed Data

### Included Verified Information
- **Identity & Title:** Mojtaba Roshana (Informal: Moji), PhD Candidate in Physics (Started November 2024). Not titled "Dr." or implied to have finished PhD.
- **Affiliation:** Department of Physics and Astronomy "Galileo Galilei", University of Padua, Italy; CoMuNe Lab (Complex Multilayer Networks Lab).
- **Supervisor:** Prof. Manlio De Domenico.
- **Education:**
  - **PhD in Physics:** University of Padua (Nov 2024 – Present). Focus: Functional fragility, set-to-set communication flow, and complex networks.
  - **MSc in Physics of Data:** University of Padua (Oct 2021 – Completed July 2024).
  - **BSc in Physics:** Shiraz University (Sep 2017 – Sep 2021). Background in computational astrophysics.
- **Master's Thesis:** *"Generalized Thermodynamics in Complex Information Dynamics: Optimization Techniques and Applications to Mammalian Connectomes"* (Univ. of Padua, July 2024). PDF attached and linked from `assets/Mojtaba_Roshana_Cv.pdf`.
- **Conference Presentation:** NetSci-X 2024 Poster titled *"Information pathways analysis in mammalian connectomes unravels clusters akin to the phylogenetic tree"* (Mojtaba Roshana, Manlio De Domenico, et al.).
- **Curated Repositories:**
  - `mojee13-reconstruction-of-complex-networks`
  - `Comparison-Between-the-Neuronal-Network-and-the-Cosmic-Web`
  - `Percolation`
  - `Ising-model`
  - `Delay-Time-Dist.-of-Compact-Binary-Objects`
  - `LaboratoryOfComputationalPhysics_Y4`
- **Applied Work (Beyond Research):** Limo team digital solutions & data analysis (`website_Limo`, `Madaar`).
- **Verified Contact Emails:** `mojtaba.roshana@phd.unipd.it`, `roshana.mojtaba13@gmail.com`.

### Intentional Omissions & Simplifications (Per User Instruction)
1. **Removed Ongoing Paper Drafts & Unreleased Findings:** All unreleased paper drafts and ongoing manuscript details have been removed to protect intellectual property.
2. **Removed "The Arrow of Time in Temporal Networks":** Completely excluded from featured research and outputs.
3. **De-emphasized General Infrastructure Stressing:** Research statement and project descriptions are generalized to focus on **functional fragility, set-to-set communication flow, and complex network resilience**.
4. **Streamlined UI & Animations:** Removed intrusive edge-clicking widgets and play/pause controls. Replaced with an elegant ambient background network animation.

---

## 2. Maintenance & Editing Guide

All site content is decoupled from layout markup and resides inside:
`js/content.js`

### How to update content:
1. **Change Biography or Headline:**  
   Edit `siteConfig.identity.headline` or `siteConfig.identity.biography` in `js/content.js`.
2. **Add a Publication or Poster:**  
   Add an entry to `siteConfig.outputs` in `js/content.js`.
3. **Add or Update a GitHub Repository:**  
   Add an entry to `siteConfig.projects` in `js/content.js`.
4. **Replace the CV PDF:**  
   Replace the file located at `assets/Mojtaba_Roshana_Cv.pdf` with your updated PDF file.
