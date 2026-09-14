/**
 * Publications & Academic Outputs Handler
 * Manages output filtering, category separation, PDF previews, and BibTeX modal generation.
 */

import { siteConfig } from './content.js';

export function renderPublications(containerId, modalContainerId) {
  const container = document.getElementById(containerId);
  const modalContainer = document.getElementById(modalContainerId);
  if (!container) return;

  const outputs = siteConfig.outputs;

  // Render Category Filter Tabs
  const categories = [
    { id: 'all', label: 'All Outputs' },
    { id: 'thesis', label: 'Master\'s Thesis' }
  ];

  let currentCategory = 'all';

  function renderList() {
    const filtered = currentCategory === 'all' 
      ? outputs 
      : outputs.filter(o => o.category === currentCategory);

    container.innerHTML = `
      <div class="filter-tabs">
        ${categories.map(c => `
          <button class="filter-tab ${currentCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
            ${c.label}
          </button>
        `).join('')}
      </div>

      <div class="outputs-grid">
        ${filtered.map(item => `
          <div class="output-card">
            <div class="output-card-header">
              <span class="output-badge output-badge-${item.category}">${item.categoryName}</span>
              <span class="output-year">${item.year}</span>
            </div>
            
            <h3 class="output-title">${item.title}</h3>
            <p class="output-authors">${item.authors}</p>
            <p class="output-venue"><em>${item.venue}</em> (${item.month ? `${item.month} ${item.year}` : item.year})</p>
            
            ${item.abstract ? `<p class="output-abstract">${item.abstract}</p>` : ''}
            
            <div class="output-actions">
              ${item.pdfUrl ? `
                <a href="${item.pdfUrl}" target="_blank" class="btn btn-sm btn-outline">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  PDF Document
                </a>
              ` : ''}

              ${item.externalUrl ? `
                <a href="${item.externalUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  University Thesis Listing
                </a>
              ` : ''}

              ${item.bibtex ? `
                <button class="btn btn-sm btn-ghost open-bibtex-btn" data-id="${item.id}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                  BibTeX Citation
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Tab Listeners
    container.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-cat');
        renderList();
      });
    });

    // BibTeX Modal Listeners
    container.querySelectorAll('.open-bibtex-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = outputs.find(o => o.id === id);
        if (item && item.bibtex) {
          openBibtexModal(item);
        }
      });
    });
  }

  function openBibtexModal(item) {
    if (!modalContainer) return;

    modalContainer.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-box">
          <div class="modal-header">
            <h3 class="modal-title">BibTeX Citation</h3>
            <button class="modal-close">&times;</button>
          </div>
          <p class="modal-subtitle">${item.title}</p>
          <pre class="bibtex-code"><code>${item.bibtex}</code></pre>
          <div class="modal-footer">
            <button id="copy-bibtex-btn" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy BibTeX
            </button>
            <button class="btn btn-outline modal-close-btn">Close</button>
          </div>
        </div>
      </div>
    `;

    const closeBtn = modalContainer.querySelector('.modal-close');
    const closeBtn2 = modalContainer.querySelector('.modal-close-btn');
    const backdrop = modalContainer.querySelector('.modal-backdrop');
    const copyBtn = modalContainer.querySelector('#copy-bibtex-btn');

    const closeModal = () => {
      modalContainer.innerHTML = '';
    };

    closeBtn.addEventListener('click', closeModal);
    closeBtn2.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(item.bibtex).then(() => {
        copyBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Copied to Clipboard!
        `;
        setTimeout(() => {
          copyBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy BibTeX
          `;
        }, 2000);
      });
    });
  }

  renderList();
}
