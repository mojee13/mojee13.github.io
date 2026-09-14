/**
 * Mojtaba Roshana - Personal Academic Website Data Configuration
 * Centralized content repository for biography, research, publications, projects, timeline, and links.
 */

export const siteConfig = {
  identity: {
    name: "Mojtaba Roshana",
    informalName: "Moji",
    title: "PhD Candidate in Physics",
    specialization: "Network Science & Complex Systems",
    institution: "University of Padua",
    department: "Department of Physics and Astronomy 'Galileo Galilei'",
    group: "CoMuNe Lab (Complex Multilayer Networks Lab)",
    supervisor: "Prof. Manlio De Domenico",
    location: "Padua, Italy",
    phdStartDate: "November 2024",
    headline: "Understanding how complex networks function—and how they fail.",
    biography: `My path into network science grew from a deep curiosity about how physical interactions give rise to complex collective behavior. Combining a background in theoretical physics, computational astrophysics, and data science, my research as a PhD candidate at the University of Padua (CoMuNe Lab) investigates functional fragility in complex networks—asking how edge and pathway disruptions impact set-to-set communication flow and network resilience.`,
    interests: [
      "Network Science & Complex Systems",
      "Functional Fragility & Resilience",
      "Information Dynamics & Diffusion",
      "Statistical Physics & Density Matrices",
      "Biological Networks & Connectomes",
      "Scientific Computing & Data Analysis"
    ]
  },

  socials: {
    github: "https://github.com/mojee13",
    linkedin: "https://www.linkedin.com/in/mojtaba-roshana/",
    lab: "https://comunelab.isiglobal.org/",
    unipd: "https://www.dfa.unipd.it/",
    emailAcademic: "mojtaba.roshana@phd.unipd.it",
    emailPersonal: "roshana.mojtaba13@gmail.com",
    thesisPdf: "assets/Roshana_Mojtaba_Thesis.pdf",
    thesisUrl: "https://thesis.unipd.it/handle/20.500.12608/1/browse?authority=co10887&etal=-1&offset=86&order=1&rpp=20&sort_by=ASC&starts_with=R&type=relationCourse&utm_source=chatgpt.com"
  },

  education: [
    {
      period: "Nov 2024 – Present",
      degree: "PhD Candidate in Physics",
      institution: "University of Padua, Italy",
      department: "Department of Physics and Astronomy 'Galileo Galilei'",
      details: "Member of CoMuNe Lab under the supervision of Prof. Manlio De Domenico. Research focusing on functional fragility, information dynamics, and communication flow in complex networks."
    },
    {
      period: "Oct 2021 – Jul 2024",
      degree: "MSc in Physics of Data",
      institution: "University of Padua, Italy",
      details: "Completed July 2024. Master's Thesis: 'Generalized Thermodynamics in Complex Information Dynamics: Optimization Techniques and Applications to Mammalian Connectomes'. Specialized in complex networks, information theory, statistical mechanics, and data science."
    },
    {
      period: "Sep 2017 – Sep 2021",
      degree: "BSc in Physics",
      institution: "Shiraz University, Iran",
      details: "Strong background in theoretical physics, statistical mechanics, and computational astrophysics."
    }
  ],

  featuredResearch: [
    {
      id: "functional-fragility",
      title: "Functional Fragility & Network Resilience",
      subtitle: "PhD Research Focus",
      status: "PhD Research — CoMuNe Lab",
      tag: "Network Science",
      question: "Which connections and pathways are essential for communication between selected parts of a network, and how does their disruption affect overall function?",
      whyItMatters: "Traditional connectivity analysis measures whether a network remains structurally connected after a perturbation. However, complex systems must maintain functional communication and throughput across key pathways.",
      approach: "Using Laplacian diffusion, density matrices, and spectral methods to construct path-based descriptions of information propagation. We study set-to-set communication flow under edge and pathway perturbations to understand functional vulnerability in complex interconnected systems.",
      topics: [
        "Functional Fragility & Vulnerability",
        "Set-to-Set Communication Flow",
        "Laplacian Diffusion & Density Matrices",
        "Spectral Methods & Network Entropy",
        "Path-Based Information Propagation"
      ]
    },
    {
      id: "connectome-dynamics",
      title: "Information Dynamics in Mammalian Connectomes",
      subtitle: "MSc Thesis & Biological Networks",
      status: "Completed Thesis (Jul 2024) — NetSci-X 2024 Poster",
      tag: "Biological Networks",
      question: "How does structural wiring in mammalian brain networks govern information dynamics and phylogenetic clustering?",
      whyItMatters: "Mammalian connectomes balance physical wiring cost with efficient information integration. Quantifying information flow pathways provides insights into evolutionary patterns across different species' brain networks.",
      approach: "Applying density-matrix representations and information-theoretic distance metrics to mammalian connectomes. Implementing global optimization algorithms (Simulated Annealing, Particle Swarm Optimization) to compare topological features with simulated dynamics.",
      topics: [
        "Mammalian Connectomics",
        "Generalized Thermodynamics",
        "Density Matrix Formalism",
        "Simulated Annealing & Particle Swarm Optimization",
        "Structural vs. Functional Alignment"
      ]
    }
  ],

  outputs: [
    {
      id: "msc-thesis",
      category: "thesis",
      categoryName: "Master's Thesis",
      title: "Generalized Thermodynamics in Complex Information Dynamics: Optimization Techniques and Applications to Mammalian Connectomes",
      authors: "Mojtaba Roshana",
      venue: "University of Padua, Department of Physics and Astronomy",
      year: "2024",
      month: "July",
      pdfUrl: "assets/Roshana_Mojtaba_Thesis.pdf",
      externalUrl: "https://thesis.unipd.it/handle/20.500.12608/1/browse?authority=co10887&etal=-1&offset=86&order=1&rpp=20&sort_by=ASC&starts_with=R&type=relationCourse&utm_source=chatgpt.com",
      abstract: "Master's thesis presented at the University of Padua under the MSc in Physics of Data degree program. Focuses on information-theoretic density matrix representations of complex networks, global optimization techniques, and applications to mammalian connectome organization.",
      bibtex: `@mastersthesis{roshana2024generalized,
  author       = {Roshana, Mojtaba},
  title        = {Generalized Thermodynamics in Complex Information Dynamics: Optimization Techniques and Applications to Mammalian Connectomes},
  school       = {University of Padua},
  year         = {2024},
  month        = {July},
  type         = {Master's Thesis}
}`
    },
    {
      id: "netscix-2024",
      category: "posters",
      categoryName: "Conference Posters & Presentations",
      title: "Information pathways analysis in mammalian connectomes unravels clusters akin to the phylogenetic tree",
      authors: "Mojtaba Roshana, Manlio De Domenico, et al.",
      venue: "NetSci-X 2024 (International School and Conference on Network Science)",
      year: "2024",
      abstract: "Poster presentation detailing information pathway analysis on mammalian connectomes, demonstrating that spectral information-theoretic distances capture evolutionary clustering closely mirroring phylogenetic trees.",
      bibtex: `@inproceedings{roshana2024netscix,
  author       = {Roshana, Mojtaba and De Domenico, Manlio},
  title        = {Information pathways analysis in mammalian connectomes unravels clusters akin to the phylogenetic tree},
  booktitle    = {NetSci-X 2024 Conference Poster Session},
  year         = {2024}
}`
    }
  ],

  projects: [
    {
      id: "reconstruction-complex-networks",
      title: "Reconstruction of Complex Networks",
      category: "Research",
      tag: "Network Science",
      language: "Python / Jupyter",
      description: "Implementation of statistical inferential models for identifying missing and spurious interactions in complex networks and reconstructing underlying graph topologies from partial observations.",
      githubUrl: "https://github.com/mojee13/mojee13-reconstruction-of-complex-networks",
      highlights: [
        "Expectation-maximization & likelihood techniques for link prediction",
        "Reconstruction of adjacency matrices under noise",
        "Applied to synthetic networks and biological benchmarks"
      ]
    },
    {
      id: "neuronal-vs-cosmic-web",
      title: "Neuronal Network vs. Cosmic Web",
      category: "Research",
      tag: "Complex Networks",
      language: "Python / Jupyter",
      description: "Comparative quantitative study analyzing structural and topological similarities between mammalian brain neuronal networks and large-scale cosmic web dark matter distributions.",
      githubUrl: "https://github.com/mojee13/Comparison-Between-the-Neuronal-Network-and-the-Cosmic-Web",
      highlights: [
        "Degree distribution, clustering coefficient, and spectral analysis",
        "Comparing micro-scale neuronal wiring with mega-parsec cosmic web filaments",
        "Multi-scale network metrics computation"
      ]
    },
    {
      id: "percolation-simulations",
      title: "Percolation in Complex Systems",
      category: "Scientific Computing",
      tag: "Statistical Physics",
      language: "Python / Jupyter",
      description: "Numerical simulations of site and bond percolation thresholds, giant component formation, and critical exponents on square, triangular, and complex network topologies.",
      githubUrl: "https://github.com/mojee13/Percolation",
      highlights: [
        "Hoshen-Kopelman algorithm for cluster labeling",
        "Finite-size scaling analysis for critical exponents",
        "Phase transition visualization"
      ]
    },
    {
      id: "ising-model-monte-carlo",
      title: "Ising Model & Phase Transitions",
      category: "Scientific Computing",
      tag: "Statistical Physics",
      language: "Python / Jupyter",
      description: "Monte Carlo algorithms for the 2D/3D Ising spin model, investigating thermodynamic variables, heat capacity, magnetic susceptibility, and critical temperature behavior.",
      githubUrl: "https://github.com/mojee13/Ising-model",
      highlights: [
        "Metropolis-Hastings & Wolff cluster algorithms",
        "Calculation of energy, magnetization, and critical exponents",
        "Parallelized spin lattice updates"
      ]
    },
    {
      id: "delay-time-binary-objects",
      title: "Delay Time Distributions of Compact Binaries",
      category: "Scientific Computing",
      tag: "Astrophysics",
      language: "Python / Jupyter",
      description: "Computational astrophysics models estimating merger delay time distributions for compact binary systems (double neutron stars, black hole binaries) from stellar evolution populations.",
      githubUrl: "https://github.com/mojee13/Delay-Time-Dist.-of-Compact-Binary-Objects",
      highlights: [
        "Population synthesis data processing",
        "Gravitational-wave merger time calculations",
        "Cosmological redshift integration"
      ]
    },
    {
      id: "computational-physics-y4",
      title: "Advanced Computational Physics Pipelines",
      category: "Coursework",
      tag: "Scientific Computing",
      language: "Python / C++",
      description: "Curated collection of numerical algorithms, differential equation solvers, Fourier analysis tools, and computational physics benchmarks.",
      githubUrl: "https://github.com/mojee13/LaboratoryOfComputationalPhysics_Y4",
      highlights: [
        "Numerical integration & differential equation solvers",
        "High-performance numerical routines in Python & C++",
        "Data pipeline optimization"
      ]
    }
  ],

  appliedWork: [
    {
      id: "website-limo",
      title: "Limo Team Web Architecture",
      category: "Applied Work",
      role: "Frontend Development & Digital Solutions",
      description: "Collaborative project with the Limo team developing web applications and digital interfaces for business solutions.",
      githubUrl: "https://github.com/mojee13/website_Limo"
    },
    {
      id: "madaar-ai",
      title: "Madaar Data Analysis Platform",
      category: "Applied Work",
      role: "Data Analysis & AI Exploration",
      description: "Applied data analysis and exploratory computer vision workflows built as part of team initiatives.",
      githubUrl: "https://github.com/mojee13/Madaar"
    }
  ]
};
