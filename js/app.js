/**
 * Main Application Script
 * Initializes navigation, theme switcher, scroll behavior, modals, and mounts visual components.
 */

import { siteConfig } from './content.js';
import { HeroNetwork } from './hero-network.js';
import { renderPublications } from './publications.js';
import { renderProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initHeroVisual();
  initResearchDeepDives();
  renderEducationTimeline();
  renderPublications('publications-container', 'modal-container');
  renderProjects('projects-container');
  initThesisSpotlight();
});

// Theme Toggle Handler
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}

// Mobile Menu & Navigation Scroll Highlight
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Active section observer
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach(l => {
          l.classList.add('active');
        });
      } else {
        document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach(l => {
          l.classList.remove('active');
        });
      }
    });
  });
}

// Hero Ambient Visual
function initHeroVisual() {
  new HeroNetwork('hero-canvas');
}

// Research Expandable Technical Details
function initResearchDeepDives() {
  const toggleBtns = document.querySelectorAll('.research-expand-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.research-card');
      const details = card.querySelector('.research-details');
      const isExpanded = details.classList.contains('expanded');

      if (isExpanded) {
        details.classList.remove('expanded');
        btn.innerHTML = `Technical Summary ↓`;
      } else {
        details.classList.add('expanded');
        btn.innerHTML = `Hide Summary ↑`;
      }
    });
  });
}

// Education Timeline Render
function renderEducationTimeline() {
  const container = document.getElementById('education-timeline');
  if (!container) return;

  const edu = siteConfig.education;

  container.innerHTML = `
    <div class="timeline">
      ${edu.map(item => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-period">${item.period}</span>
            <h4 class="timeline-degree">${item.degree}</h4>
            <p class="timeline-institution"><strong>${item.institution}</strong> ${item.department ? `· ${item.department}` : ''}</p>
            <p class="timeline-details">${item.details}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Master's Thesis Spotlight Section
function initThesisSpotlight() {
  const container = document.getElementById('thesis-spotlight-container');
  if (!container) return;

  const thesis = siteConfig.outputs.find(o => o.category === 'thesis');
  if (!thesis) return;

  container.innerHTML = `
    <div class="cv-card">
      <div class="cv-header">
        <div>
          <span class="badge-pill" style="margin-bottom: 0.5rem;">University of Padua · MSc in Physics of Data</span>
          <h3 class="cv-name" style="font-size: 1.5rem; margin-top: 0.25rem;">Master's Thesis</h3>
          <p class="cv-sub">Graduated July 2024 · Supervisor: Prof. Manlio De Domenico</p>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="${siteConfig.socials.thesisPdf}" target="_blank" download="Roshana_Mojtaba_Thesis.pdf" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Thesis PDF
          </a>
          <a href="${siteConfig.socials.thesisUrl}" target="_blank" rel="noopener" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            University Record
          </a>
        </div>
      </div>

      <div>
        <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
          "${thesis.title}"
        </h4>
        <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
          ${thesis.abstract}
        </p>

        <h5 class="cv-section-title">Methods & Theoretical Framework</h5>
        <div class="skills-group" style="margin-top: 0.5rem;">
          <span class="skill-tag">Information-Theoretic Density Matrices</span>
          <span class="skill-tag">Generalized Thermodynamics</span>
          <span class="skill-tag">Mammalian Connectomics</span>
          <span class="skill-tag">Simulated Annealing Optimization</span>
          <span class="skill-tag">Particle Swarm Optimization (PSO)</span>
          <span class="skill-tag">Network Diffusion Dynamics</span>
        </div>
      </div>
    </div>
  `;
}
