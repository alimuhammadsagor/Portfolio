/* ==========================================================================
   PORTFOLIO DATA
   Edit this file to update services, skills, projects and timeline content.
   ========================================================================== */

const servicesData = [
  {
    icon: "code",
    title: "Web Development",
    description: "Building modern, responsive and high-performance websites and web applications."
  },
  {
    icon: "terminal-square",
    title: "Software Development",
    description: "Developing reliable and scalable software solutions for real-world problems."
  },
  {
    icon: "pen-tool",
    title: "UI/UX Design",
    description: "Designing clean, intuitive and user-friendly digital experiences."
  },
  {
    icon: "brain-circuit",
    title: "Machine Learning",
    description: "Developing data-driven machine learning solutions and predictive models."
  },
  {
    icon: "database",
    title: "Database Development",
    description: "Designing structured, secure and scalable database solutions."
  },
  {
    icon: "sparkles",
    title: "AI Solutions",
    description: "Exploring intelligent solutions using Artificial Intelligence and modern technologies."
  }
];

const skillsData = [
  {
    category: "Frontend",
    icon: "layout-panel-left",
    skills: [
      { name: "HTML", icon: "file-code-2" },
      { name: "CSS", icon: "palette" },
      { name: "JavaScript", icon: "file-json-2" },
      { name: "React", icon: "atom" },
      { name: "Vite", icon: "zap" }
    ]
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", icon: "hexagon" },
      { name: "Express.js", icon: "route" }
    ]
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", icon: "leaf" },
      { name: "MySQL", icon: "database-zap" }
    ]
  },
  {
    category: "Programming",
    icon: "code-2",
    skills: [
      { name: "Python", icon: "file-terminal" },
      { name: "JavaScript", icon: "file-json-2" },
      { name: "C / C++", icon: "binary" }
    ]
  },
  {
    category: "ML / DL",
    icon: "brain-circuit",
    skills: [
      { name: "Machine Learning", icon: "bot" },
      { name: "Deep Learning", icon: "network" },
      { name: "Data Analysis", icon: "bar-chart-3" }
    ]
  },
  {
    category: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", icon: "git-branch" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "app-window" },
      { name: "Google Colab", icon: "Google Colab" }
    ]
  }
];

const projectsData = [
  {
    image: "File/Determining%20the%20Early-Life%20Data%20Requirement%20for%20Reliable%20Remaining%20Useful%20Life%20Prediction%20of%20Lithium-Ion%20Batteries%20Using%20Machine%20Learning.jpg",
    title: "Determining the Early-Life Data Requirement for Reliable Remaining Useful Life Prediction of Lithium-Ion Batteries Using Machine Learning",
    description: "University thesis research using the NASA Battery Dataset to compare Random Forest, XGBoost, LSTM, GRU and BiLSTM models across 5%, 10%, 15% and 20% early-life data for reliable RUL prediction.",
    status: "University Thesis - On Work",
    tech: ["Python", "NASA Battery Dataset", "RF", "XGBoost", "LSTM", "GRU", "BiLSTM"],
    demo: "#",
    github: "#"
  },
  {
    image: "File/DIU%20Smart%20Food%20Protal.jpg",
    title: "DIU Smart Food Portal",
    description: "Developed a web-based platform that enables students to browse cafeteria menus, place food orders, manage postpaid billing and track order status through a user-friendly interface.",
    status: "Completed",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "#",
    github: "#"
  },
  {
    image: "File/Pet%20Care%20Adoption%20System.jpg",
    title: "Pet Care Adoption System",
    description: "Built a pet care adoption system that simplifies the adoption process through pet listings, adoption applications, user authentication and pet management.",
    status: "Completed",
    tech: ["Web Development", "Authentication", "Database", "CRUD"],
    demo: "#",
    github: "#"
  },
  {
    image: "File/Temperature-Based%20Fan.jpg",
    title: "Temperature-Based Fan",
    description: "Developed a temperature-based fan system that automatically adjusts fan speed according to ambient temperature using a sensor and microcontroller, improving energy efficiency and user comfort.",
    status: "Completed",
    tech: ["Arduino", "C / C++", "Temperature Sensor", "Microcontroller"],
    demo: "#",
    github: "#"
  }
];

const timelineData = [
  {
    year: "Present",
    title: "BSc in Software Engineering",
    place: "Daffodil International University",
    description: "Pursuing a BSc in Software Engineering while building practical solutions in web development, software engineering, AI and machine learning."
  },
  {
    year: "Completed",
    title: "DIU Smart Food Portal",
    place: "Web Application Project",
    description: "Developed a platform for cafeteria menus, food ordering, postpaid billing and order tracking for university students."
  },
  {
    year: "Completed",
    title: "Pet Care Adoption System",
    place: "Software Development Project",
    description: "Built a system with pet listings, adoption applications, user authentication and pet management features."
  },
  {
    year: "Completed",
    title: "Temperature-Based Fan",
    place: "Embedded Systems Project",
    description: "Created an automated fan controller using a temperature sensor and microcontroller to improve comfort and energy efficiency."
  },
  {
    year: "Ongoing",
    title: "Early-Life Data for Reliable RUL Prediction",
    place: "Machine Learning Research",
    description: "Analyzing NASA Battery Dataset data and comparing RF, XGBoost, LSTM, GRU and BiLSTM models using different early-life data percentages."
  }
];
