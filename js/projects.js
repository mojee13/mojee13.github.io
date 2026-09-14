/**
 * Selected Code & Projects Component
 * Renders curated research repositories and computational physics implementations.
 */

import { siteConfig } from './content.js';

export function renderProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const mainProjects = siteConfig.projects;

  let currentCategory = 'all';

  function render() {
    let filteredProjects = currentCategory === 'all'
      ? mainProjects
      : mainProjects.filter(p => p.category === currentCategory);

    container.innerHTML = `
      <div class="projects-filter-bar">
        <button class="filter-tab ${currentCategory === 'all' ? 'active' : ''}" data-cat="all">All Projects</button>
        <button class="filter-tab ${currentCategory === 'Research' ? 'active' : ''}" data-cat="Research">Research & Networks</button>
        <button class="filter-tab ${currentCategory === 'Scientific Computing' ? 'active' : ''}" data-cat="Scientific Computing">Scientific Computing</button>
        <button class="filter-tab ${currentCategory === 'Coursework' ? 'active' : ''}" data-cat="Coursework">Coursework</button>
      </div>

      <div class="projects-grid">
        ${filteredProjects.map(p => `
          <div class="project-card">
            <div class="project-card-header">
              <span class="project-tag project-tag-${p.category.toLowerCase().replace(/\s+/g, '-')}">${p.tag}</span>
              <span class="project-lang">${p.language}</span>
            </div>

            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>

            ${p.highlights ? `
              <ul class="project-highlights">
                ${p.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
            ` : ''}

            <div class="project-footer">
              <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                Repository Code
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Filter Listeners
    container.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-cat');
        render();
      });
    });
  }

  render();
}
