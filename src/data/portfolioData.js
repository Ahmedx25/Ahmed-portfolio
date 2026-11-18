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
  github: "https://github.com/Ahmedx25",
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
    img: "/assets/olist_ecommerce_1.png",
    metrics: [
      { label: "Retention Rate Alert", value: "3.12%" },
      { label: "Records Modeled", value: "1M+" },
      { label: "Dashboards", value: "4 Executive Views" }
    ],
    githubLink: "https://github.com/Ahmedx25/Olist-ECommerce",
    liveLink: null,
    highlight: "Identified critical 3.12% retention bottleneck & restructured logistics"
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Intelligence & Analytics",
    tag: "Hospital Operations · Multi-Department BI",
    tools: "SQL Server · Power BI · DAX · Medical Data Modeling",
    desc: "Delivered 4 interactive dashboards (Executive Overview, Patient Admissions, Lab & Diagnostics, and Pharmacy Inventory) uncovering critical insights such as a 61%/39% out-of-pocket vs. insurance payment split and department-level performance patterns across revenue, admissions, and prescriptions.",
    img: "/assets/healthcare_executive.png",
    metrics: [
      { label: "Payment Split", value: "61% / 39%" },
      { label: "Dashboards", value: "4 Systems" },
      { label: "Departments", value: "Admissions, Lab, Pharmacy" }
    ],
    githubLink: "https://github.com/Ahmedx25/Healthcare",
    liveLink: null,
    highlight: "Uncovered 61%/39% payment split & multi-department bottlenecks"
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics Dashboard",
    tag: "Operations & Logistics Analytics · Root-Cause Analysis",
    tools: "Advanced Excel · Power Query · Pivot Reporting · Root Cause Analysis",
    desc: "Built an interactive Excel dashboard to analyze 27,000+ logistics and cargo shipping records, highlighting an 82.2% late delivery rate and 73% cargo damage rate, successfully tracing root causes to a 27.7% equipment availability deficit and recommending targeted operational remedies.",
    img: "/assets/supply_chain_dashboard.png",
    metrics: [
      { label: "Records Analyzed", value: "27,000+" },
      { label: "Late Delivery Rate", value: "82.2%" },
      { label: "Equipment Deficit", value: "27.7%" }
    ],
    githubLink: "https://github.com/Ahmedx25/Supply-Chain",
    liveLink: null,
    highlight: "Isolated 27.7% equipment shortage driving 82.2% late delivery rate"
  },
  {
    id: "lumera-campaign",
    title: "LUMERA — Business Intelligence & Campaign Dashboard",
    tag: "Executive BI · Marketing & Sales Performance",
    tools: "Power BI Desktop · Advanced DAX · Star Schema · Geospatial Mapping",
    desc: "A comprehensive, multi-page Business Intelligence solution delivering a 360-degree view of business performance across $527K in gross sales, profit margins, marketing campaign ROI across 7M impressions, customer demographics, and 95.4% target attainment across multiple operational dimensions.",
    img: "/assets/lumera_executive.png",
    metrics: [
      { label: "Gross Sales / Attain", value: "$527K · 95.4%" },
      { label: "Marketing Reach", value: "7M · 3.19% CTR" },
      { label: "Gross Margin", value: "36.9%" }
    ],
    githubLink: "https://github.com/Ahmedx25/LUMERA-Campaign",
    liveLink: null,
    highlight: "Multi-page executive BI dashboard achieving 95.4% target attainment and isolating high-ROI campaign reallocation strategies"
  }
];

export const educationData = [
  {
    degree: "B.Sc. in Statistics and Computer Science",
    period: "2022 – 2026",
    institution: "Faculty of Science, Ain Shams University",
    location: "Cairo, Egypt",
    badge: "Graduated",
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
