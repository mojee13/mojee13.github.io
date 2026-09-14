/**
 * Ambient Network Science Visualizer
 * Smooth, elegant Canvas 2D ambient background network with floating nodes and glowing information pulses.
 */

export class HeroNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.nodes = [];
    this.edges = [];
    this.pulses = [];
    this.width = 0;
    this.height = 0;
    this.animId = null;
    this.hoveredNode = null;
    
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    // Smooth hover interaction
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
      
      this.hoveredNode = this.nodes.find(n => {
        const dx = n.x - x;
        const dy = n.y - y;
        return Math.sqrt(dx * dx + dy * dy) < n.radius + 8;
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
    this.height = Math.max(360, Math.min(480, parent.clientHeight || 420));
    
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
    const nodesPerCommunity = 8;
    const centers = [
      { x: this.width * 0.30, y: this.height * 0.40 },
      { x: this.width * 0.70, y: this.height * 0.35 },
      { x: this.width * 0.50, y: this.height * 0.72 }
    ];

    const colors = ['#0d9488', '#0284c7', '#6366f1'];
    let idCounter = 0;

    // Create Nodes
    for (let c = 0; c < numCommunities; c++) {
      const center = centers[c];
      const color = colors[c];
      for (let i = 0; i < nodesPerCommunity; i++) {
        const angle = (i / nodesPerCommunity) * Math.PI * 2 + Math.random() * 0.4;
        const dist = 30 + Math.random() * 60;
        const isCore = i === 0 || i === 1;

        this.nodes.push({
          id: idCounter++,
          community: c,
          color: color,
          x: center.x + Math.cos(angle) * dist,
          y: center.y + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          baseX: center.x + Math.cos(angle) * dist,
          baseY: center.y + Math.sin(angle) * dist,
          radius: isCore ? 6.5 : 4.5
        });
      }
    }

    // Intra-community Edges
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const n1 = this.nodes[i];
        const n2 = this.nodes[j];

        if (n1.community === n2.community) {
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 100 && Math.random() < 0.6) {
            this.edges.push({ source: n1, target: n2 });
          }
        }
      }
    }

    // Inter-community Bridging Edges
    const bridges = [
      { from: 0, to: 8 },
      { from: 2, to: 16 },
      { from: 9, to: 17 },
      { from: 1, to: 10 }
    ];

    bridges.forEach(b => {
      if (this.nodes[b.from] && this.nodes[b.to]) {
        this.edges.push({
          source: this.nodes[b.from],
          target: this.nodes[b.to],
          isBridge: true
        });
      }
    });
  }

  spawnPulse() {
    if (this.edges.length === 0) return;
    const edge = this.edges[Math.floor(Math.random() * this.edges.length)];
    
    this.pulses.push({
      edge: edge,
      progress: 0,
      speed: 0.006 + Math.random() * 0.008,
      color: edge.source.color
    });
  }

  update() {
    // Ambient node motion
    this.nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;

      const dx = n.x - n.baseX;
      const dy = n.y - n.baseY;
      const dist = Math.hypot(dx, dy);

      if (dist > 20) {
        n.vx -= dx * 0.0015;
        n.vy -= dy * 0.0015;
      }

      n.vx += (Math.random() - 0.5) * 0.03;
      n.vy += (Math.random() - 0.5) * 0.03;
      n.vx *= 0.97;
      n.vy *= 0.97;
    });

    // Pulses
    if (Math.random() < 0.04) {
      this.spawnPulse();
    }

    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const p = this.pulses[i];
      p.progress += p.speed;
      if (p.progress >= 1) {
        this.pulses.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const isDark = document.documentElement.classList.contains('dark');
    const edgeColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.12)';
    const bridgeColor = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(2, 132, 199, 0.35)';

    // Draw Edges
    this.edges.forEach(e => {
      this.ctx.beginPath();
      this.ctx.moveTo(e.source.x, e.source.y);
      this.ctx.lineTo(e.target.x, e.target.y);
      this.ctx.lineWidth = e.isBridge ? 1.5 : 1;
      this.ctx.strokeStyle = e.isBridge ? bridgeColor : edgeColor;
      this.ctx.stroke();
    });

    // Draw Pulses
    this.pulses.forEach(p => {
      const x = p.edge.source.x + (p.edge.target.x - p.edge.source.x) * p.progress;
      const y = p.edge.source.y + (p.edge.target.y - p.edge.source.y) * p.progress;

      const grad = this.ctx.createRadialGradient(x, y, 0, x, y, 6);
      grad.addColorStop(0, p.color);
      grad.addColorStop(1, 'transparent');

      this.ctx.beginPath();
      this.ctx.arc(x, y, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = grad;
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fill();
    });

    // Draw Nodes
    this.nodes.forEach(n => {
      const isHovered = this.hoveredNode && this.hoveredNode.id === n.id;
      const radius = isHovered ? n.radius + 3 : n.radius;

      // Aura
      this.ctx.beginPath();
      this.ctx.arc(n.x, n.y, radius + 4, 0, Math.PI * 2);
      this.ctx.fillStyle = n.color + '20';
      this.ctx.fill();

      // Core
      this.ctx.beginPath();
      this.ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = n.color;
      this.ctx.fill();

      this.ctx.lineWidth = 1.5;
      this.ctx.strokeStyle = isDark ? '#0f172a' : '#ffffff';
      this.ctx.stroke();
    });
  }

  loop() {
    this.update();
    this.draw();
    this.animId = requestAnimationFrame(() => this.loop());
  }
}
