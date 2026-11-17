export const personalInfo = {
  name: "Ahmed Abdel Fattah Ahmed",
  shortName: "Ahmed Abdel Fattah",
  firstName: "AHMED",
  lastName: "ABDELFATTAH",
  role: "Data Analyst",
  subRole: "Data & BI Analyst · Statistics & CS",
  headline: "Bridging the Gap Between Raw Data & Actionable Business Strategy.",
  tagline: "Proficient in database modeling, enterprise business intelligence, SSIS ETL pipelines, and developing interactive Power BI & Tableau dashboards.",
  location: "Cairo, Egypt",
  phone: "+20 102 271 1764",
  rawPhone: "+201022711764",
  email: "ahmedabdelfattah5655@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-abdel-fattah-272787302",
  github: "https://github.com/ahmed-abdel-fattah-data",
  whatsapp: "https://wa.me/201022711764",
  available: true,
  statusText: "AVAILABLE FOR WORK",
  summary: "Data Analyst with a degree in Statistics and Computer Science. Experienced in bridging the gap between raw data and actionable business strategy. Proficient in database modeling, business intelligence, and developing interactive dashboards. Strong foundation in leveraging statistical analysis to support data-driven decision-making.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B2 (Professional Working)" }
  ],
  softSkills: [
    "Problem Solving",
    "Continuous Learning",
    "Critical Thinking",
    "Teamwork",
    "Time Management",
    "Communication",
    "Creativity",
    "Presentation Skills"
  ]
};

export const preloaderQuotes = [
  "> connecting to ahmed.db ...",
  "> SELECT insights FROM raw_chaos;",
  "> 1,000,000 rows scanned in 0.18s",
  "> joining talent ⨝ statistics ... OK",
  "> loading predictive models & star schemas ...",
  "> rendering executive portfolio ..."
];

export const servicesData = [
  {
    icon: "BarChart3",
    accent: "#F59E0B",
    title: "Power BI & Tableau Dashboards",
    desc: "Interactive, decision-ready executive dashboards with advanced DAX, time intelligence, dynamic KPIs, and drill-through storytelling.",
    tags: ["Power BI", "Tableau", "DAX", "KPI Design"]
  },
  {
    icon: "Database",
    accent: "#3B82F6",
    title: "SQL & Data Warehousing",
    desc: "Star schemas, fact/dimension table design, SSIS ETL pipelines, and query optimization from raw tables to clean analytical data marts.",
    tags: ["SQL Server", "SSIS", "Data Warehousing", "ETL"]
  },
  {
    icon: "TrendingUp",
    accent: "#10B981",
    title: "Statistical & Python Analysis",
    desc: "Leveraging strong Statistics foundations for exploratory data analysis (EDA), RFM customer segmentation, and automated data processing with Pandas.",
    tags: ["Python", "Pandas", "Statistics", "EDA"]
  },
  {
    icon: "Sheet",
    accent: "#8B5CF6",
    title: "Excel Solutions & Optimization",
    desc: "Power Query workflows, multi-source data consolidation, dynamic pivot reporting, and root-cause logistical bottlenecks diagnostics.",
    tags: ["Advanced Excel", "Power Query", "Pivot Tables", "Logistics"]
  }
];

export const experienceData = [
  {
    role: "Data Analyst Intern",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Cairo, Egypt",
    date: "Nov 2025 – Jul 2026",
    badge: "Government Scholarship",
    points: [
      "Solved real-world business and commercial problems utilizing Python, SQL Server, Excel, and Power BI.",
      "Performed end-to-end data cleaning, anomaly detection, statistical validation, and executive dashboard development.",
      "Collaborated on cross-functional business intelligence solutions providing stakeholders with clear performance metrics."
    ]
  },
  {
    role: "Business Intelligence Intern",
    org: "Information Technology Institute (ITI)",
    location: "Smart Village · Giza, Egypt",
    date: "Aug 2025 – Sept 2025",
    badge: "120+ Intensive Hours",
    points: [
      "Completed 120+ rigorous training hours in SQL Server, SSIS, SSAS, SSRS, Advanced SQL, Data Warehousing, Power BI, and Tableau.",
      "Engineered full enterprise BI solutions including multi-fact data modeling, automated ETL pipelines, and interactive reporting systems.",
      "Designed star schema data marts and optimized complex analytical queries for high-volume enterprise datasets."
    ]
  }
];

export const projectsData = [
  {
    id: "olist-ecommerce",
    title: "Olist E-Commerce BI & Data Pipeline",
    tag: "E-Commerce Analytics · RFM Segmentation",
    tools: "Python · SQL Server · Power BI · RFM · ETL Pipeline",
    desc: "Developed 4 highly interactive Power BI dashboards, translating millions of Brazilian e-commerce records into actionable insights that identified a critical 3.12% retention rate and logistical bottlenecks, delivering actionable, data-driven solutions, including the launch of loyalty program and regional supply chain restructuring.",
    img: "/assets/ecomerace-7Dkp-LKz.png",
    metrics: [
      { label: "Retention Rate Alert", value: "3.12%" },
      { label: "Records Modeled", value: "1M+" },
      { label: "Dashboards", value: "4 Executive Views" }
    ],
    githubLink: "https://github.com/ahmed-abdel-fattah-data",
    liveLink: null,
    highlight: "Identified critical 3.12% retention bottleneck & restructured logistics"
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Intelligence & Analytics",
    tag: "Hospital Operations · Multi-Department BI",
    tools: "SQL Server · Power BI · DAX · Medical Data Modeling",
    desc: "Delivered 4 interactive dashboards (Executive Overview, Patient Admissions, Lab & Diagnostics, and Pharmacy Inventory) uncovering critical insights such as a 61%/39% out-of-pocket vs. insurance payment split and department-level performance patterns across revenue, admissions, and prescriptions.",
    img: "/assets/healthcare%20analytics_page-0001-B8Yh7UaG.jpg",
    metrics: [
      { label: "Payment Split", value: "61% / 39%" },
      { label: "Dashboards", value: "4 Systems" },
      { label: "Departments", value: "Admissions, Lab, Pharmacy" }
    ],
    githubLink: "https://github.com/ahmed-abdel-fattah-data",
    liveLink: null,
    highlight: "Uncovered 61%/39% payment split & multi-department bottlenecks"
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics Dashboard",
    tag: "Operations & Logistics Analytics · Root-Cause Analysis",
    tools: "Advanced Excel · Power Query · Pivot Reporting · Root Cause Analysis",
    desc: "Built an interactive Excel dashboard to analyze 27,000+ logistics and cargo shipping records, highlighting an 82.2% late delivery rate and 73% cargo damage rate, successfully tracing root causes to a 27.7% equipment availability deficit and recommending targeted operational remedies.",
    img: "/assets/markiting-1_page-0001-CcQ1KZBa.jpg",
    metrics: [
      { label: "Records Analyzed", value: "27,000+" },
      { label: "Late Delivery Rate", value: "82.2%" },
      { label: "Equipment Deficit", value: "27.7%" }
    ],
    githubLink: "https://github.com/ahmed-abdel-fattah-data",
    liveLink: null,
    highlight: "Isolated 27.7% equipment shortage driving 82.2% late delivery rate"
  },
  {
    id: "osol-crm",
    title: "Osol Real Estate CRM & Analytics",
    tag: "Graduation Project · CRM & Database Architecture",
    tools: "SQL Server · Statistics & CS · Python · C++ · Pipeline Analytics",
    desc: "Official Graduation Project for the Statistics and Computer Science Program at Ain Shams University Faculty of Science. Engineered an enterprise real estate customer relationship management database system and analytical dashboard tracking lead conversion pipelines, agent performance, property valuation models, and sales forecasting.",
    img: "/assets/linkedin%20dashboard_page-0001-7sdbRReX.jpg",
    metrics: [
      { label: "Ain Shams Univ", value: "Faculty of Science" },
      { label: "Program", value: "Statistics & CS" },
      { label: "Domain", value: "PropTech CRM" }
    ],
    githubLink: "https://github.com/ahmed-abdel-fattah-data",
    liveLink: null,
    highlight: "Graduation Project combining pure statistical modeling with CRM architecture"
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Business Intelligence Specialist",
    issuer: "Information Technology Institute (ITI)",
    category: "Business Intelligence",
    date: "2025",
    image: "/assets/Associate Data Analyst in SQL_page-0001-qGwMj4BZ.jpg",
    credential: "https://iti.gov.eg",
    quote: "Completed 120+ intensive hours in SQL Server, SSIS ETL pipelines, SSAS tabular models, SSRS enterprise reports, Data Warehousing, Power BI, and Tableau."
  },
  {
    id: 2,
    title: "Data Analyst Professional Track",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    category: "Data Analytics",
    date: "2025 – 2026",
    image: "/assets/Associate Data Analyst in SQL_page-0001-qGwMj4BZ.jpg",
    credential: "https://depi.gov.eg",
    quote: "Comprehensive training solving end-to-end business scenarios utilizing Python, SQL Server, Advanced Excel, and Power BI with emphasis on business impact."
  },
  {
    id: 3,
    title: "B.Sc. in Statistics and Computer Science",
    issuer: "Ain Shams University — Faculty of Science",
    category: "Higher Education Degree",
    date: "2022 – 2026",
    image: null,
    credential: "https://sci.asu.edu.eg",
    quote: "Rigorous academic double major blending mathematical statistics, probability distributions, data structures, and computer science systems."
  },
  {
    id: 4,
    title: "Advanced SQL & Relational Database Design",
    issuer: "ITI & DEPI Specialized Modules",
    category: "SQL & Databases",
    date: "2025",
    image: "/assets/Associate Data Analyst in SQL_page-0001-qGwMj4BZ.jpg",
    credential: "https://github.com/ahmed-abdel-fattah-data",
    quote: "Mastery of complex multi-table joins, subqueries, CTEs, window functions, indexing strategies, star schema modeling, and query execution plan optimization."
  },
  {
    id: 5,
    title: "Enterprise Power BI & Tableau Dashboards",
    issuer: "ITI BI Program",
    category: "Data Visualization",
    date: "2025",
    image: null,
    credential: "https://github.com/ahmed-abdel-fattah-data",
    quote: "Designed production-grade dashboards with complex DAX measures, time-intelligence comparisons, dynamic parameters, and executive storytelling."
  }
];

export const educationData = [
  {
    degree: "B.Sc. in Statistics and Computer Science",
    period: "2022 – 2026",
    institution: "Faculty of Science, Ain Shams University",
    location: "Cairo, Egypt",
    badge: "Graduated",
    project: "Graduation Project: Osol Real Estate CRM",
    desc: "Rigorous dual specialization combining mathematical statistics, probability theory, hypothesis testing, and numerical analysis with software engineering, algorithms, and database systems — establishing deep analytical rigor for predictive business intelligence, star schema modeling, and complex SQL workflows."
  }
];

export const skillsTerminalConfig = {
  username: "ahmed@analytics-terminal",
  commands: [
    "ahmed --skills --category=bi-visualization",
    "ahmed --skills --category=databases-sql",
    "ahmed --skills --category=python-stats",
    "ahmed --skills --category=spreadsheets-tools"
  ],
  outputs: {
    0: [
      "  ✔ Power BI Desktop  |  Tableau  |  Interactive Storytelling",
      "  ✔ Advanced DAX Measures  |  Time Intelligence  |  Executive KPI Dashboards"
    ],
    1: [
      "  ✔ SQL Server  |  Advanced SQL  |  SSIS  |  SSAS  |  SSRS",
      "  ✔ Data Warehousing  |  Star Schema Modeling  |  Fact & Dimension Tables  |  ETL Pipelines"
    ],
    2: [
      "  ✔ Python (Pandas, NumPy, Matplotlib)  |  C++",
      "  ✔ Statistical Modeling  |  Exploratory Data Analysis (EDA)  |  RFM Analysis"
    ],
    3: [
      "  ✔ Advanced Excel (Power Query & Pivot Tables)  |  SQL BI  |  Git & GitHub",
      "  [STATUS] All statistical & business intelligence skill modules verified."
    ]
  }
};
