/**
 * Hero Network Physics Simulator
 * Interactive Canvas 2D community-structured network visual with animated information propagation pulses.
 */

export class HeroNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.nodes = [];
    this.edges = [];
    this.pulses = [];
    this.communities = [
      { id: 'connectome', name: 'Connectome / Brain', color: '#0d9488', bg: 'rgba(13, 148, 136, 0.15)' },
      { id: 'infrastructure', name: 'Infrastructure / Grids', color: '#0284c7', bg: 'rgba(2, 132, 199, 0.15)' },
      { id: 'temporal', name: 'Temporal / Dynamics', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.15)' }
    ];
    
    this.isRunning = true;
    this.pulseFrequency = 0.05;
    this.speed = 1.0;
    this.highlightCommunity = null;
    this.width = 0;
    this.height = 0;
    this.animId = null;
    this.hoveredNode = null;
    
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    // Mouse hover detection
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
      
      this.hoveredNode = this.nodes.find(n => {
        const dx = n.x - x;
        const dy = n.y - y;
        return Math.sqrt(dx * dx + dy * dy) < n.radius + 6;
      });
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.hoveredNode = null;
    });

    this.generateNetwork();
    this.loop();
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const dpr = window.devicePixelRatio || 1;
    this.width = parent.clientWidth;
    this.height = Math.max(380, Math.min(520, parent.clientHeight || 450));
    
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
    
    if (this.nodes.length > 0) {
      this.generateNetwork();
    }
  }

  generateNetwork() {
    this.nodes = [];
    this.edges = [];
    this.pulses = [];

    const numCommunities = 3;
    const nodesPerCommunity = 9;
    const centers = [
      { x: this.width * 0.28, y: this.height * 0.45 },
      { x: this.width * 0.72, y: this.height * 0.38 },
      { x: this.width * 0.50, y: this.height * 0.75 }
    ];

    let idCounter = 0;

    // Create Nodes
    for (let c = 0; c < numCommunities; c++) {
      const center = centers[c];
      const comm = this.communities[c];
      for (let i = 0; i < nodesPerCommunity; i++) {
        const angle = (i / nodesPerCommunity) * Math.PI * 2 + Math.random() * 0.5;
        const dist = 35 + Math.random() * 65;
        const isCore = i === 0 || i === 1;

        this.nodes.push({
          id: idCounter++,
          community: c,
          color: comm.color,
          name: `${comm.name} Node ${i+1}`,
          x: center.x + Math.cos(angle) * dist,
          y: center.y + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseX: center.x + Math.cos(angle) * dist,
          baseY: center.y + Math.sin(angle) * dist,
          radius: isCore ? 7 : 4.5,
          isSource: c === 0 && isCore,
          isTarget: c === 1 && isCore
        });
      }
    }

    // Create Intra-community edges
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const n1 = this.nodes[i];
        const n2 = this.nodes[j];

        if (n1.community === n2.community) {
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 110 && Math.random() < 0.65) {
            this.edges.push({ source: n1, target: n2, weight: 1.0 });
          }
        }
      }
    }

    // Inter-community bridging edges
    const bridges = [
      { from: 0, to: 9, weight: 1.5 },
      { from: 2, to: 18, weight: 1.2 },
      { from: 10, to: 19, weight: 1.2 },
      { from: 4, to: 22, weight: 1.0 },
      { from: 1, to: 12, weight: 1.8 }
    ];

    bridges.forEach(b => {
      if (this.nodes[b.from] && this.nodes[b.to]) {
        this.edges.push({
          source: this.nodes[b.from],
          target: this.nodes[b.to],
          weight: b.weight,
          isBridge: true
        });
      }
    });
  }

  spawnPulse() {
    if (this.edges.length === 0) return;
    // Prefer edge starting from source or bridge
    const suitableEdges = this.edges.filter(e => e.isBridge || e.source.isSource || Math.random() < 0.3);
    const edge = suitableEdges[Math.floor(Math.random() * suitableEdges.length)] || this.edges[Math.floor(Math.random() * this.edges.length)];
    
    this.pulses.push({
      edge: edge,
      progress: 0,
      speed: 0.008 + Math.random() * 0.012,
      color: edge.source.color
    });
  }

  update() {
    if (!this.isRunning) return;

    // Ambient floating physics
    this.nodes.forEach(n => {
      n.x += n.vx * this.speed;
      n.y += n.vy * this.speed;

      const dx = n.x - n.baseX;
      const dy = n.y - n.baseY;
      const dist = Math.hypot(dx, dy);

      if (dist > 25) {
        n.vx -= dx * 0.002;
        n.vy -= dy * 0.002;
      }

      // Add soft jitter
      n.vx += (Math.random() - 0.5) * 0.04;
      n.vy += (Math.random() - 0.5) * 0.04;
      n.vx *= 0.96;
      n.vy *= 0.96;
    });

    // Update pulses
    if (Math.random() < this.pulseFrequency * this.speed) {
      this.spawnPulse();
    }

    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const p = this.pulses[i];
      p.progress += p.speed * this.speed;
      if (p.progress >= 1) {
        this.pulses.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const isDark = document.documentElement.classList.contains('dark');
    const edgeColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.12)';
    const bridgeEdgeColor = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(2, 132, 199, 0.35)';

    // Draw Edges
    this.edges.forEach(e => {
      this.ctx.beginPath();
      this.ctx.moveTo(e.source.x, e.source.y);
      this.ctx.lineTo(e.target.x, e.target.y);
      this.ctx.lineWidth = e.isBridge ? 2 : 1;
      this.ctx.strokeStyle = e.isBridge ? bridgeEdgeColor : edgeColor;
      if (e.isBridge) {
        this.ctx.setLineDash([4, 4]);
      } else {
        this.ctx.setLineDash([]);
      }
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    });

    // Draw Information Pulses
    this.pulses.forEach(p => {
      const x = p.edge.source.x + (p.edge.target.x - p.edge.source.x) * p.progress;
      const y = p.edge.source.y + (p.edge.target.y - p.edge.source.y) * p.progress;

      // Glow effect
      const grad = this.ctx.createRadialGradient(x, y, 0, x, y, 8);
      grad.addColorStop(0, p.color);
      grad.addColorStop(1, 'transparent');

      this.ctx.beginPath();
      this.ctx.arc(x, y, 8, 0, Math.PI * 2);
      this.ctx.fillStyle = grad;
      this.ctx.fill();

      // Core pulse
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, Math.PI * 2);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fill();
    });

    // Draw Nodes
    this.nodes.forEach(n => {
      const isHovered = this.hoveredNode && this.hoveredNode.id === n.id;
      const radius = isHovered ? n.radius + 3 : n.radius;

      // Node background aura
      this.ctx.beginPath();
      this.ctx.arc(n.x, n.y, radius + 5, 0, Math.PI * 2);
      this.ctx.fillStyle = n.color + '22';
      this.ctx.fill();

      // Source/Target Special Ring
      if (n.isSource || n.isTarget) {
        this.ctx.beginPath();
        this.ctx.arc(n.x, n.y, radius + 4, 0, Math.PI * 2);
        this.ctx.strokeStyle = n.isSource ? '#10b981' : '#f59e0b';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
      }

      // Core Node
      this.ctx.beginPath();
      this.ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = n.color;
      this.ctx.fill();

      this.ctx.lineWidth = 1.5;
      this.ctx.strokeStyle = isDark ? '#0f172a' : '#ffffff';
      this.ctx.stroke();
    });

    // Draw Hover Tooltip
    if (this.hoveredNode) {
      const n = this.hoveredNode;
      const label = `${this.communities[n.community].name} (${n.isSource ? 'Source Region' : n.isTarget ? 'Target Region' : 'Node'})`;
      
      this.ctx.font = '500 12px sans-serif';
      const textWidth = this.ctx.measureText(label).width;
      const px = n.x + 12;
      const py = n.y - 12;

      this.ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)';
      this.ctx.strokeStyle = n.color;
      this.ctx.lineWidth = 1;
      
      this.ctx.beginPath();
      this.ctx.roundRect(px, py - 18, textWidth + 16, 24, 6);
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
      this.ctx.fillText(label, px + 8, py - 2);
    }
  }

  loop() {
    this.update();
    this.draw();
    this.animId = requestAnimationFrame(() => this.loop());
  }

  togglePlay() {
    this.isRunning = !this.isRunning;
    return this.isRunning;
  }

  setSpeed(s) {
    this.speed = s;
  }
}
