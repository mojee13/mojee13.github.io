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
      details: "Completed July 2024. Conducted Master's Thesis research at CoMuNe Lab: 'Generalized Thermodynamics in Complex Information Dynamics: Optimization Techniques and Applications to Mammalian Connectomes'. Specialized in complex networks, information theory, statistical mechanics, and data science."
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
      subtitle: "PhD Research",
      status: "CoMuNe Lab",
      tag: "Network Science",
      question: "Which connections and pathways are essential for communication between selected parts of a network, and how does their disruption affect overall function?",
      context: "We move beyond structural connectivity to measure set-to-set information flow using Laplacian diffusion, spectral entropy, and pathway perturbation analysis in complex networks.",
      topics: [
        "Laplacian Diffusion",
        "Density Matrices",
        "Spectral Entropy",
        "Set-to-Set Flow"
      ]
    },
    {
      id: "connectome-dynamics",
      title: "Information Dynamics in Mammalian Connectomes",
      subtitle: "MSc Thesis",
      status: "CoMuNe Lab",
      tag: "Biological Networks",
      question: "How does structural connectome wiring govern information flow and evolutionary clustering across species?",
      context: "Conducted at CoMuNe Lab under Prof. Manlio De Domenico. Brain networks optimize physical wiring against information integration. We applied density matrix representations and information-theoretic distance metrics to mammalian connectomes.",
      topics: [
        "Connectomics",
        "CoMuNe Lab",
        "Simulated Annealing",
        "Particle Swarm Opt.",
        "Phylogenetic Trees"
      ]
    },
    {
      id: "network-medicine",
      title: "Computational Modelling of Biological Networks",
      subtitle: "Research Internship",
      status: "Padua Center for Network Medicine",
      tag: "Biological Networks",
      question: "How can generative network models fit empirical biological networks using entropy minimization and spectral density matrices?",
      context: "Using optimization procedures such as particle swarms and simulated annealing to fit generative models into empirical networks involves minimizing entropy profiles derived from the density matrix formalism and spectral entropy to discover the underlying rules of empirical networks. The internship entails implementation in R/Python, culminating in a direct comparison of various approaches like ERGM and Configuration Model.",
      topics: [
        "Padua Center for Network Medicine",
        "Generative Models",
        "Spectral Entropy & Density Matrix",
        "Particle Swarm & Annealing",
        "ERGM & Configuration Model",
        "R / Python"
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
      venue: "University of Padua, Department of Physics and Astronomy (CoMuNe Lab)",
      year: "2024",
      month: "July",
      pdfUrl: "assets/Roshana_Mojtaba_Thesis.pdf",
      externalUrl: "https://thesis.unipd.it/handle/20.500.12608/1/browse?authority=co10887&etal=-1&offset=86&order=1&rpp=20&sort_by=ASC&starts_with=R&type=relationCourse&utm_source=chatgpt.com",
      abstract: "Master's thesis presented at the University of Padua under the MSc in Physics of Data degree program, conducted at CoMuNe Lab under the supervision of Prof. Manlio De Domenico. Focuses on information-theoretic density matrix representations of complex networks, global optimization techniques, and applications to mammalian connectome organization.",
      bibtex: `@mastersthesis{roshana2024generalized,
  author       = {Roshana, Mojtaba},
  title        = {Generalized Thermodynamics in Complex Information Dynamics: Optimization Techniques and Applications to Mammalian Connectomes},
  school       = {University of Padua},
  year         = {2024},
  month        = {July},
  type         = {Master's Thesis}
}`
    }
  ],

  projects: [
    {
      id: "reconstruction-complex-networks",
      title: "Reconstruction of Complex Networks",
      category: "Research",
      categoryBadge: "Research & Networks",
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
      categoryBadge: "Research & Networks",
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
      categoryBadge: "Scientific Computing",
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
      categoryBadge: "Scientific Computing",
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
      categoryBadge: "Scientific Computing",
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
      categoryBadge: "Coursework",
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
  ]
};
