/**
 * Main Application Script
 * Initializes navigation, theme switcher, scroll behavior, modals, and mounts visual components.
 */

import { siteConfig } from './content.js';
import { HeroNetwork } from './hero-network.js';
import { FragilityWidget } from './fragility-widget.js';
import { renderPublications } from './publications.js';
import { renderProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initHeroVisual();
  initFragilityWidget();
  initResearchDeepDives();
  renderEducationTimeline();
  renderPublications('publications-container', 'modal-container');
  renderProjects('projects-container');
  initCVPreview();
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

// Hero Visual Controls
function initHeroVisual() {
  const heroNetwork = new HeroNetwork('hero-canvas');
  
  const playBtn = document.getElementById('hero-play-btn');
  const speedBtn = document.getElementById('hero-speed-btn');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const isRunning = heroNetwork.togglePlay();
      playBtn.innerHTML = isRunning ? `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        Pause
      ` : `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Play
      `;
    });
  }

  if (speedBtn) {
    let speeds = [1.0, 1.8, 0.5];
    let speedLabels = ['1x', '1.8x', '0.5x'];
    let currentIdx = 0;

    speedBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % speeds.length;
      heroNetwork.setSpeed(speeds[currentIdx]);
      speedBtn.textContent = `Speed: ${speedLabels[currentIdx]}`;
    });
  }
}

// Fragility Widget
function initFragilityWidget() {
  new FragilityWidget('fragility-widget-container');
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
        btn.innerHTML = `Technical Deep Dive & Approach ↓`;
      } else {
        details.classList.add('expanded');
        btn.innerHTML = `Hide Technical Details ↑`;
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

// Interactive CV Overview Toggle
function initCVPreview() {
  const container = document.getElementById('cv-overview-container');
  if (!container) return;

  container.innerHTML = `
    <div class="cv-card">
      <div class="cv-header">
        <div>
          <h3 class="cv-name">${siteConfig.identity.name}</h3>
          <p class="cv-sub">${siteConfig.identity.title} · ${siteConfig.identity.institution}</p>
        </div>
        <a href="${siteConfig.socials.cvPdf}" target="_blank" download="Mojtaba_Roshana_Cv.pdf" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF Version
        </a>
      </div>

      <div class="cv-grid">
        <div class="cv-col">
          <h4 class="cv-section-title">Education & Credentials</h4>
          ${siteConfig.education.map(e => `
            <div class="cv-item">
              <div class="cv-item-year">${e.period}</div>
              <div class="cv-item-title">${e.degree}</div>
              <div class="cv-item-inst">${e.institution}</div>
            </div>
          `).join('')}
        </div>

        <div class="cv-col">
          <h4 class="cv-section-title">Research Methods & Tooling</h4>
          <div class="skills-group">
            <span class="skill-tag">Network Science (NetworkX, igraph, graph-tool)</span>
            <span class="skill-tag">Information Theory & Density Matrices</span>
            <span class="skill-tag">Laplacian Diffusion & Spectral Methods</span>
            <span class="skill-tag">Statistical Mechanics & Thermodynamics</span>
            <span class="skill-tag">Python (SciPy, NumPy, Pandas, Matplotlib)</span>
            <span class="skill-tag">Global Optimization (Simulated Annealing, PSO)</span>
            <span class="skill-tag">Monte Carlo & Percolation Algorithms</span>
            <span class="skill-tag">C++ & High-Performance Computing</span>
            <span class="skill-tag">Git / GitHub & Open Science Workflows</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
