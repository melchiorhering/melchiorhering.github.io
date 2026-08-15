import type {
  Labels,
  BlogPost,
  Tool,
  Job,
  Education,
  PortfolioProject,
} from "@/types";
import { fetchMediumPosts } from "../utils/blog.ts";

// Icons
import linkedinIcon from "@/icons/linkedin.svg";
import githubIcon from "@/icons/github.svg";

// Logos
import postnlLogo from "@/assets/postnl-logo.png";
import amsterdamLogo from "@/assets/amsterdam-flag.png";

export const heroData = {
  description: {
    text: "Data/AI/ML Engineer by trade. Builder and habitual tinkerer by heart. I thrive on a broad curiosity for new tech, constantly experimenting with new setups to build scalable, user-friendly solutions from the infrastructure up. With a stack spanning Python, TypeScript, Kubernetes, and Cloud architecture, I bridge DevOps and Intelligence to orchestrate production-ready technological systems!",
    class: "dark:text-white font-bold",
  },
  buttons: [
    {
      text: "Resume",
      href: "/resume-stijn-hering.pdf",
      iconName: "download",
      class: "bg-blue-600 hover:bg-blue-900",
    },
    {
      text: "Contact",
      href: "https://www.linkedin.com/in/stijn-hering-contact/",
      iconName: "e-mail",
      class: "bg-slate-700 hover:bg-slate-400",
    },
  ],
  heading: {
    class:
      "font-mono text-[34px] md:text-5xl font-semibold text-gray-800 dark:text-white",
  },
  texts: [
    {
      text: "Hi. Welcome!",
      class:
        "text-transparent bg-clip-text bg-gradient-to-r from-black to-sky-400 dark:from-white dark:to-sky-400",
      delay: 70,
    },
    {
      text: "I do some Data Science...",
      class:
        "text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 dark:from-sky-400 dark:to-sky-600",
      delay: 70,
    },
    {
      text: "Also some Data Engineering...",
      class:
        "text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-700 dark:from-sky-300 dark:to-sky-500",
      delay: 70,
    },
    {
      text: "And Software Engineering...",
      class:
        "text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-500 dark:from-sky-500 dark:to-sky-300",
      delay: 70,
      pauseFor: 1500,
    },
    {
      text: "I build things!",
      class:
        "text-transparent bg-clip-text bg-gradient-to-r from-black to-sky-600 dark:from-white dark:to-sky-600",
      delay: 70,
      pauseFor: 1500,
    },
    {
      text: "Hi, I'm Stijn.",
      class:
        "text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-black dark:from-sky-400 dark:via-sky-500 dark:to-white font-bold",
      delay: 100,
      final: true,
    },
  ],
};

export const toolsData: Tool[] = [
  {
    name: "Python",
    iconName: "logos:python",
  },
  {
    name: "TypeScript",
    iconName: "logos:typescript-icon",
  },
  {
    name: "Rust",
    iconName: "logos:rust",
  },
  {
    name: "Streamlit",
    iconName: "logos:streamlit",
  },
  {
    name: "Astro",
    iconName: "logos:astro-icon",
  },
  {
    name: "React",
    iconName: "logos:react",
  },
  {
    name: "TailwindCSS",
    iconName: "logos:tailwindcss-icon",
  },
  {
    name: "Docker",
    iconName: "logos:docker-icon",
  },
  {
    name: "Kubernetes",
    iconName: "devicon:kubernetes",
  },
  {
    name: "Pulumi",
    iconName: "logos:pulumi-icon",
  },
  {
    name: "Terraform",
    iconName: "logos:terraform-icon",
  },
  {
    name: "AWS",
    iconName: "logos:aws",
  },
  {
    name: "Azure",
    iconName: "logos:azure-icon",
  },
  {
    name: "Databricks",
    iconName: "simple-icons:databricks",
    colorClass: "text-[#FF3621]", // Databricks Brand Color
  },
  {
    name: "Hono",
    iconName: "logos:hono",
  },
  {
    name: "Deno",
    iconName: "logos:deno",
  },
  {
    name: "Bun",
    iconName: "logos:bun",
  },
  {
    name: "VSCode",
    iconName: "devicon:vscode",
  },
  {
    name: "Zed",
    iconName: "devicon:zed",
  },
  {
    name: "Git",
    iconName: "logos:git-icon",
  },
  {
    name: "GitHub Copilot",
    iconName: "logos:github-copilot",
  },
  {
    name: "Github Actions",
    iconName: "logos:github-actions",
  },
  {
    name: "Figma",
    iconName: "logos:figma",
  },
  {
    name: "HuggingFace",
    iconName: "logos:hugging-face-icon",
  },
  {
    name: "Pydantic AI",
    iconName: "simple-icons:pydantic",
    colorClass: "text-[#D93863]",
  },
  {
    name: "Linux",
    iconName: "logos:linux-tux",
  },
  {
    name: "Zsh",
    iconName: "logos:zsh",
  },
  {
    name: "Bash",
    iconName: "logos:bash-icon",
  },
  {
    name: "FastAPI",
    iconName: "logos:fastapi-icon",
  },
  {
    name: "SurrealDB",
    iconName: "logos:surrealdb-icon",
  },
  {
    name: "Milvus",
    iconName: "logos:milvus-icon",
  },
  {
    name: "PostgreSQL",
    iconName: "logos:postgresql",
  },
];

export const labels: Labels[] = [
  {
    title: "PostNL",
    icon: postnlLogo, // Ensure this is a string containing SVG path data
    website: "https://www.postnl.nl/",
  },
  {
    title: "Amsterdam",
    icon: amsterdamLogo,
  },
  {
    title: "LinkedIn",
    icon: linkedinIcon,
    website: "https://www.linkedin.com/in/stijn-hering-contact/",
  },
  {
    title: "GitHub",
    icon: githubIcon,
    website: "https://github.com/melchiorhering",
  },
];

export const about: string =
  "I am a versatile Data/AI/ML/Cloud Engineer specializing in Python, TypeScript, and Cloud-native architectures, combined with strong DevOps expertise. I thrive in 'zero-to-one' environments-those that aren’t fully carved out yet-where I can act as a builder, creating structure out of ambiguity. My approach blends design thinking with a pragmatic, fail-fast mindset, allowing me to innovate quickly and iterate based on real-world feedback. Beyond the technical stack, I am a firm believer in shared ownership. I engage stakeholders and end-users early in the lifecycle to ensure long-term adoption and alignment. My passion lies in building scalable, reliable tools that solve messy problems and empower people to work more intelligent every day.";

export const projectsData: PortfolioProject[] = [
  {
    name: "houtwerk.hering.services",
    description:
      "Designed and developed a responsive, multi-language landing page for, Daan Hering, an Amsterdam & Utrecht based carpenter. It features an interactive price estimator and custom contact forms. Builtusing Astro and Deno, and automatically deployed via GitHub Actions to StaticHost.eu",
    techStack: [
      { name: "Typescript", iconName: "logos:typescript" },
      { name: "Astro", iconName: "logos:astro-icon" },
      { name: "Bun", iconName: "logos:bun" },
      { name: "Linux", iconName: "logos:linux-tux" },
      { name: "Docker", iconName: "logos:docker-icon" },
      { name: "GitHub Actions", iconName: "logos:github-actions" },
      {
        name: "Statichost.eu",
        iconName: "emojione:flag-for-european-union",
      },
    ],
    repoUrl:
      "https://github.com/melchiorhering/web/tree/main/bun/houtwerk.hering.services",
    liveUrl: "https://houtwerk.hering.services/",
    imagePath: "houtwerk-hering-services.png",
  },
  {
    name: "GUI OS AI Agent Benchmarking",
    description:
      "Developed a comprehensive AI benchmarking framework leveraging Hugging Face’s smolagents. It evaluates autonomous agent performance within a secure, QEMU-virtualized GUI OS environment, enabling the safe and reproducible testing of complex desktop interactions and system-level tasks.",
    techStack: [
      { name: "Python", iconName: "logos:python" },
      { name: "Docker", iconName: "logos:docker-icon" },
      { name: "HuggingFace", iconName: "logos:hugging-face-icon" },
      { name: "Linux", iconName: "logos:linux-tux" },
      { name: "QEMU" },
      { name: "SSH" },
      { name: "Jupyter", iconName: "devicon:jupyter-wordmark" },
    ],
    repoUrl: "https://github.com/melchiorhering/GUI-OS-AI-Agent-Benchmarking",
    imagePath:
      "https://github.com/melchiorhering/GUI-OS-AI-Agent-Benchmarking/blob/main/media/overview-framework.png?raw=true",
  },
  {
    name: "Open Data Platform",
    description:
      "A scalable, cloud-agnostic open data platform architected on Kubernetes. Leveraging Pulumi and Python for Infrastructure-as-Code (IaC), it dynamically provisions computing nodes and storage, ensuring automated, seamless deployments across any VPS or cloud computing provider.",
    techStack: [
      { name: "Python", iconName: "logos:python" },
      { name: "Kubernetes", iconName: "devicon:kubernetes" },
      { name: "Pulumi", iconName: "logos:pulumi-icon" },
      { name: "GitHub Actions", iconName: "logos:github-actions" },
    ],
    repoUrl: "https://github.com/melchiorhering/open-data-platform",
  },
];

export const experience: Job[] = [
  {
    company: "Team Rockstars IT",
    role: "Data, ML & AI Engineer",
    period: "May 2025 – Present",
    logo: "/src/assets/teamrockstars-logo.webp",
    borderColorClass: "border-yellow-400 dark:border-yellow-500",
    achievements: [
      "Employed as a consultant focusing on data, machine learning and AI solutions for enterprise clients.",
    ],
    clients: [
      {
        company: "Rabobank",
        role: "Full Stack AI Engineer",
        period: "Apr 2026 – Present",
        logo: "/src/assets/rabobank-logo.png",
        achievements: [
          "Co-architected and established an enterprise Agentic Platform utilizing open-source (FOSS) technologies within the AI Center of Excellence (CoE).",
          "Consulted with cross-functional business units to identify high-value opportunities and spearheaded the end-to-end development of custom autonomous AI agent solutions.",
          "Led continuous experimentation with emerging tools, setups, and agile ways of working to optimize agentic workflows and development lifecycles.",
        ],
      },
      {
        company: "TenneT TSO",
        role: "Data Engineer | ML Engineer",
        period: "May 2025 – Dec 2025",
        logo: "/src/assets/tennet-logo.jpg",
        achievements: [
          "Worked on a critical data migration project, moving from an on-premise solution to an Azure cloud data platform.",
          "Built robust data pipelines to ingest and process data across various external and internal sources.",
          "Leveraged Azure, Azure Databricks, PySpark, and Azure Data Factory.",
        ],
      },
    ],
  },
  {
    company: "PostNL",
    role: "Data Scientist | AI Engineer",
    period: "Feb 2024 – May 2025",
    logo: "/src/assets/postnl-logo.png",
    borderColorClass: "border-[#f06601] dark:border-[#f06601]",
    achievements: [
      "Transitioned to internal employee.",
      "Led the development of the internal Data Science Portal using AWS CDK and CI/CD pipelines — now hosting 40+ Data Scientists and 30+ production apps.",
      "Created the initial PostLit Python package for integrating Streamlit dashboards into the PostNL ecosystem.",
      "Developed PostNLChat, an internal ChatGPT-like interface, and built a GenAI workflow that automates call summaries for the sales team.",
    ],
  },
  {
    company: "Aurai",
    role: "Data Engineer | ML Engineer",
    period: "Feb 2022 – Feb 2024",
    logo: "/src/assets/aurai-logo.png",
    borderColorClass: "border-black dark:border-white",
    achievements: [
      "Joined Aurai to specialize in Data Engineering, starting with an intensive traineeship before transitioning to client-facing consultancy.",
    ],
    clients: [
      {
        company: "PostNL",
        role: "Data Scientist | Data Engineer",
        period: "Jun 2022 – Feb 2024",
        logo: "/src/assets/postnl-logo.png",
        achievements: [
          "Delivered insights via dashboards and reports to support data-driven decisions.",
          "Guided stakeholders on data architecture and integration strategy.",
          "Maintained and extended ETL pipelines and managed data lake ingestion in AWS.",
          "Improved operational efficiency by embedding data-driven workflows.",
        ],
      },
      {
        company: "Data Engineering Traineeship",
        role: "Trainee",
        period: "Feb 2022 – Jun 2022",
        logo: "/src/assets/aurai-logo.png",
        achievements: [
          "Completed a rigorous, intensive bootcamp focused on Data Engineering principles and modern data stacks.",
          "Gained hands-on experience with cloud infrastructure, ETL/ELT pipelines, and advanced Python.",
          "Successfully transitioned into a full-time consultancy role.",
        ],
      },
    ],
  },
];

export const educationData: Education[] = [
  {
    institution: "Universiteit van Amsterdam",
    degree: "MSc. Informationstudies: Data Science", // Replace with your actual Master's
    period: "2023 – 2025",
    logo: "/src/assets/uva-logo.jpg",
    achievements: [
      "Specialized in Data & Machine Learning Engineering and Data Science, AI Agents",
      "Completed my master while working",
    ],
    projects: [
      {
        name: "Master Thesis",
        role: "Researcher",
        period: "Feb 2025 – Jul 2025",
        url: "https://github.com/melchiorhering/GUI-OS-AI-Agent-Benchmarking",
        achievements: [
          "Created a AI Agent benchmarking framework for agents that perform tasks in a full GUI OS sandbox",
          "Open sourced the benchmarking framework here",
        ],
      },
    ],
  },
  {
    institution: "Universiteit van Amsterdam",
    degree: "BSc. Informatiekunde",
    period: "2018 – 2021",
    logo: "/src/assets/uva-logo.jpg",
    borderColorClass: "border-black dark:border-white",
    achievements: [
      "Core focus on data structures, algorithms, software engineering principles and data science work",
    ],
    projects: [
      {
        name: "Minor Artificial Intelligence",
        role: "Minor",
        period: "Dec 2020 – Mei 2021",
        achievements: [
          "Completed coursework in statistical learning, calculus, linear algebra, ML/AI topics,",
        ],
      },
    ],
  },
];

// Fetch dynamic Medium posts and merge with static posts
export const allBlogPosts: Promise<BlogPost[]> = (async () => {
  const username = "stijn.hering"; // Medium username
  const mediumPosts = await fetchMediumPosts(username);
  return [...mediumPosts]; // Merge with static posts
})();
