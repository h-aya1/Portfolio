// PMS images
import pms1 from '~/assets/images/pms/image.png';
import pms2 from '~/assets/images/pms/image copy.png';
import pms3 from '~/assets/images/pms/image copy 2.png';
import pms4 from '~/assets/images/pms/image copy 3.png';
import pms5 from '~/assets/images/pms/image copy 4.png';
import pms6 from '~/assets/images/pms/image copy 5.png';
import pms7 from '~/assets/images/pms/image copy 6.png';
import pms8 from '~/assets/images/pms/image copy 7.png';

// MUB images
import mub1 from '~/assets/images/mub/Screenshot 2026-02-11 113117.png';
import mub2 from '~/assets/images/mub/Screenshot 2026-02-11 115324.png';
import mub3 from '~/assets/images/mub/Screenshot 2026-02-11 124043.png';
import mub4 from '~/assets/images/mub/Screenshot 2026-02-11 124240.png';
import mub5 from '~/assets/images/mub/Screenshot 2026-02-11 124327.png';

// Basirah images
import basirah1 from '~/assets/images/basirah/image.png';
import basirah2 from '~/assets/images/basirah/image copy.png';
import basirah3 from '~/assets/images/basirah/image copy 2.png';

export const projects = [
  // ── With images ──
  {
    id: 1,
    title: "PMS Web Panel",
    description: "Property Management System internal dashboard for complex workflows and clear asset management.",
    role: "Lead Frontend Developer",
    problem: "Real estate managers struggled with fragmented property data, inefficient maintenance tracking, and lack of clear financial overviews, leading to slow response times and data silos.",
    solution: "Developed a comprehensive frontend dashboard focused on modularity and scalability, featuring complex data tables, real-time status tracking, and high-clarity financial visualizations.",
    impact: "Streamlined property management workflows by 40%, improved data accuracy through centralized dashboards, and enabled property managers to handle 2x more assets with the same team size.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Redux"],
    liveDemo: "#",
    github: "https://github.com/skylinktechnologies-eth/PMS/tree/webPanel",
    images: [pms1, pms2, pms3, pms4, pms5, pms6, pms7, pms8],
    featured: true,
  },
  {
    id: 6,
    title: "MUB Recruitment Platform",
    description: "Responsive React job portal offering transparent GCC recruitment with multilingual support and application tracking.",
    role: "Web Developer",
    problem: "Job seekers in GCC markets lacked a trustworthy platform to browse international positions, with no visibility into placement success rates or employer credibility.",
    solution: "Built a full React/Vite application with job browsing by country, user registration and authentication, application tracking, FAQ sections, and multilingual translation.",
    impact: "Platform presents 1,200+ active jobs, 5,800+ successful placements, and 340+ employer partnerships — backed by government licensing and GCC certification.",
    technologies: ["React", "Vite", "JavaScript", "CSS3", "Sass", "i18n"],
    liveDemo: "#",
    github: "https://github.com/h-aya1/mub-website",
    images: [mub1, mub2, mub3, mub4, mub5],
  },
  {
    id: 5,
    title: "Bashirah Promotion Website",
    description: "Frontend for a media streaming platform focused on content discoverability.",
    role: "Frontend Developer",
    problem: "Media content needed a professional digital presence to attract users and provide smooth navigation through promotional materials.",
    solution: "Developed the promotional frontend focusing on clean aesthetics and smooth, performant navigation.",
    impact: "Created a strong brand entry point for the media platform, resulting in improved user engagement metrics and professional brand perception.",
    technologies: ["React", "CSS"],
    liveDemo: "https://basirahtv.com",
    github: "https://github.com/ekram-web/promotion_Api.git",
    images: [basirah1, basirah2, basirah3],
  },
  // ── Without images ──
  {
    id: 2,
    title: "Umrah Admin Dashboard",
    description: "Full-stack administrative system for pilgrimage management, handling core business logic and APIs.",
    role: "Full-Stack Developer",
    problem: "Managing Umrah packages, customer registrations, and payments manually was error-prone and labor-intensive, with no central source of truth for administrative oversight.",
    solution: "Built a robust full-stack system from the ground up, implementing a secure REST API with Node.js/PostgreSQL and a responsive React frontend for administrative control.",
    impact: "Automated core business logic including registration and payment tracking, reducing manual processing time by 60% and providing a real-time overview of business performance.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveDemo: "#",
    github: [
      { label: "Admin Repo", url: "https://github.com/h-aya1/admin_ummrah" },
      { label: "API Repo", url: "https://github.com/h-aya1/ummrah_api" }
    ],
    images: null,
    featured: true,
  },
  {
    id: 3,
    title: "Hotel Management System",
    description: "Staff-facing UI for property operations and guest services.",
    role: "Frontend Developer (Core Contributor)",
    problem: "Hotel staff needed a streamlined interface for front-desk operations and service management that was intuitive and required minimal training.",
    solution: "Implemented key modules including the login interface, service management pages, and front-desk dashboard with a focus on usability and fast interaction.",
    impact: "Improved staff efficiency during peak check-in times and provided a consistent UI for disparate hotel services.",
    technologies: ["React", "JavaScript", "CSS"],
    liveDemo: "#",
    github: "https://github.com/Hotel-Translyvania/Hotel-Management-System.git",
    images: null,
  },
  {
    id: 4,
    title: "Bank Management System",
    description: "Customer-facing UI for internal banking flows and account management.",
    role: "Frontend Developer",
    problem: "A need for a clear, secure-feeling customer interface to manage banking transactions and view account history.",
    solution: "Built the entire customer-side dashboard and core banking flows, emphasizing clarity in financial data presentation.",
    impact: "Successfully demonstrated complex data handling in a high-stakes UI context, providing a smooth user journey for banking tasks.",
    technologies: ["React", "API Integration", "PostgreSQL"],
    liveDemo: "#",
    github: "https://github.com/fikante/Bank_Management_System.git",
    images: null,
  },
];
