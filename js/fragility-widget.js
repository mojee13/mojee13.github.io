/**
 * Interactive Network Fragility & Perturbation Widget
 * Educational illustration of edge disruption, pathway rerouting, and functional communication loss.
 */

export class FragilityWidget {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.nodes = [
      { id: 'S', name: 'Source (S)', x: 60, y: 140, type: 'source' },
      { id: 'A', name: 'Hub A', x: 180, y: 60, type: 'hub' },
      { id: 'B', name: 'Hub B', x: 180, y: 220, type: 'hub' },
      { id: 'C', name: 'Relay C', x: 300, y: 60, type: 'relay' },
      { id: 'D', name: 'Relay D', x: 300, y: 220, type: 'relay' },
      { id: 'E', name: 'Bypass E', x: 240, y: 140, type: 'bypass' },
      { id: 'T', name: 'Target (T)', x: 420, y: 140, type: 'target' }
    ];

    this.edges = [
      { id: 'e1', from: 'S', to: 'A', active: true, label: 'Primary N1' },
      { id: 'e2', from: 'S', to: 'B', active: true, label: 'Primary N2' },
      { id: 'e3', from: 'A', to: 'C', active: true, label: 'High-cap Line' },
      { id: 'e4', from: 'B', to: 'D', active: true, label: 'Secondary Line' },
      { id: 'e5', from: 'A', to: 'E', active: true, label: 'Cross-connect' },
      { id: 'e6', from: 'B', to: 'E', active: true, label: 'Cross-connect' },
      { id: 'e7', from: 'C', to: 'T', active: true, label: 'Target Feed 1' },
      { id: 'e8', from: 'D', to: 'T', active: true, label: 'Target Feed 2' },
      { id: 'e9', from: 'E', to: 'T', active: true, label: 'Backup Feed' }
    ];

    this.removedCount = 0;
    this.init();
  }

  init() {
    this.render();
  }

  // Find shortest active path from S to T using BFS
  findShortestPath() {
    const adj = {};
    this.nodes.forEach(n => adj[n.id] = []);
    this.edges.forEach(e => {
      if (e.active) {
        adj[e.from].push(e.to);
        adj[e.to].push(e.from);
      }
    });

    const queue = [['S']];
    const visited = new Set(['S']);

    while (queue.length > 0) {
      const path = queue.shift();
      const node = path[path.length - 1];

      if (node === 'T') return path;

      for (const neighbor of adj[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
    return null; // Path severed!
  }

  toggleEdge(edgeId) {
    const edge = this.edges.find(e => e.id === edgeId);
    if (!edge) return;
    edge.active = !edge.active;
    this.removedCount = this.edges.filter(e => !e.active).length;
    this.render();
  }

  reset() {
    this.edges.forEach(e => e.active = true);
    this.removedCount = 0;
    this.render();
  }

  render() {
    const activePath = this.findShortestPath();
    const isConnected = activePath !== null;

    // Check path edges for highlighting
    const pathEdges = new Set();
    if (activePath) {
      for (let i = 0; i < activePath.length - 1; i++) {
        const u = activePath[i];
        const v = activePath[i + 1];
        const e = this.edges.find(edge => 
          (edge.from === u && edge.to === v) || (edge.from === v && edge.to === u)
        );
        if (e) pathEdges.add(e.id);
      }
    }

    let statusClass = isConnected ? 'status-connected' : 'status-severed';
    let statusText = isConnected 
      ? `Functional Route Active: S → ${activePath.slice(1, -1).join(' → ')} → T (Path Length: ${activePath.length - 1} hops)`
      : `Functional Pathway Severed! Communication from S to T is blocked.`;

    this.container.innerHTML = `
      <div class="fragility-card">
        <div class="fragility-header">
          <div>
            <span class="badge-pill">Illustrative Model</span>
            <h4 class="fragility-title">Edge Disruption & Pathway Rerouting</h4>
          </div>
          <button id="reset-fragility-btn" class="btn btn-sm btn-outline">Reset Network</button>
        </div>
        <p class="fragility-desc">
          Click any connection line in the diagram below to simulate an edge disruption (e.g., power line failure or track closure) and observe how information flow reroutes dynamically between Source <strong>(S)</strong> and Target <strong>(T)</strong>.
        </p>

        <div class="fragility-status-bar ${statusClass}">
          <span class="status-indicator"></span>
          <span>${statusText}</span>
        </div>

        <div class="fragility-canvas-container">
          <svg viewBox="0 0 480 280" class="fragility-svg">
            <defs>
              <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0d9488" />
                <stop offset="100%" stop-color="#0284c7" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <!-- Render Connections -->
            ${this.edges.map(e => {
              const u = this.nodes.find(n => n.id === e.from);
              const v = this.nodes.find(n => n.id === e.to);
              const isPath = pathEdges.has(e.id);
              
              let strokeColor = '#cbd5e1';
              let strokeWidth = 2;
              let dash = '';

              if (!e.active) {
                strokeColor = '#ef4444';
                strokeWidth = 2;
                dash = '5,5';
              } else if (isPath) {
                strokeColor = '#0d9488';
                strokeWidth = 4;
              } else {
                strokeColor = 'var(--color-border-subtle)';
                strokeWidth = 2;
              }

              const midX = (u.x + v.x) / 2;
              const midY = (u.y + v.y) / 2;

              return `
                <g class="edge-group ${!e.active ? 'edge-disabled' : ''} ${isPath ? 'edge-active-path' : ''}" 
                   data-edge-id="${e.id}" style="cursor: pointer;">
                  <line x1="${u.x}" y1="${u.y}" x2="${v.x}" y2="${v.y}" 
                        stroke="${strokeColor}" stroke-width="${strokeWidth}" 
                        stroke-dasharray="${dash}" 
                        filter="${isPath ? 'url(#glow)' : 'none'}" />
                  <!-- Invisible thick hit box for easy clicking -->
                  <line x1="${u.x}" y1="${u.y}" x2="${v.x}" y2="${v.y}" 
                        stroke="transparent" stroke-width="14" />
                  <circle cx="${midX}" cy="${midY}" r="${!e.active ? 8 : 5}" 
                          fill="${!e.active ? '#ef4444' : (isPath ? '#0d9488' : '#94a3b8')}" />
                  ${!e.active ? `<text x="${midX}" y="${midY + 4}" font-size="10" text-anchor="middle" fill="#ffffff" font-weight="bold">✕</text>` : ''}
                </g>
              `;
            }).join('')}

            <!-- Render Nodes -->
            ${this.nodes.map(n => {
              let fill = '#0284c7';
              let r = 16;
              let textColor = '#ffffff';

              if (n.type === 'source') {
                fill = '#10b981';
                r = 20;
              } else if (n.type === 'target') {
                fill = '#f59e0b';
                r = 20;
              }

              const inPath = activePath && activePath.includes(n.id);

              return `
                <g class="node-group">
                  ${inPath ? `<circle cx="${n.x}" cy="${n.y}" r="${r + 5}" fill="${fill}" opacity="0.25" />` : ''}
                  <circle cx="${n.x}" cy="${n.y}" r="${r}" fill="${fill}" 
                          stroke="#ffffff" stroke-width="2.5" class="shadow-sm" />
                  <text x="${n.x}" y="${n.y + 4}" font-size="12" font-weight="700" 
                        text-anchor="middle" fill="${textColor}">${n.id}</text>
                  <text x="${n.x}" y="${n.y + r + 14}" font-size="11" font-weight="500" 
                        text-anchor="middle" fill="var(--color-text-muted)">${n.name}</text>
                </g>
              `;
            }).join('')}
          </svg>
        </div>

        <div class="fragility-footer">
          <span class="text-xs text-muted">Disrupted Connections: <strong>${this.removedCount} of ${this.edges.length}</strong></span>
          <span class="text-xs text-muted font-mono">Laplacian & Path Entropy Analysis Model</span>
        </div>
      </div>
    `;

    // Bind event listeners
    this.container.querySelectorAll('.edge-group').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-edge-id');
        this.toggleEdge(id);
      });
    });

    const resetBtn = this.container.querySelector('#reset-fragility-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.reset());
    }
  }
}
