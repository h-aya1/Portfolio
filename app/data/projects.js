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
  {
    id: 1,
    title: "PMS Web Panel",
    description: "Internal property management dashboard built for Skylink Technologies. Complex data tables, maintenance tracking, and financial overviews across multiple properties.",
    role: "Lead Frontend Developer",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Redux"],
    liveDemo: "#",
    github: "https://github.com/skylinktechnologies-eth/PMS/tree/webPanel",
    images: [pms1, pms2, pms3, pms4, pms5, pms6, pms7, pms8],
  },
  {
    id: 6,
    title: "MUB Recruitment Platform",
    description: "Job portal for GCC markets with multilingual support, application tracking, and job browsing by country. Built end-to-end for a client on Upwork.",
    role: "Web Developer",
    technologies: ["React", "Vite", "JavaScript", "CSS3", "Sass", "i18n"],
    liveDemo: "#",
    github: "https://github.com/h-aya1/mub-website",
    images: [mub1, mub2, mub3, mub4, mub5],
  },
  {
    id: 5,
    title: "Bashirah Promotion Website",
    description: "Promotional frontend for Bashirah, a live media streaming platform. Live in production.",
    role: "Frontend Developer",
    technologies: ["React", "CSS"],
    liveDemo: "https://basirahtv.com",
    github: "https://github.com/ekram-web/promotion_Api.git",
    images: [basirah1, basirah2, basirah3],
  },
  {
    id: 2,
    title: "Umrah Admin Dashboard",
    description: "Full-stack admin system for a pilgrimage management company. REST API with Node.js and PostgreSQL, React dashboard for managing packages, registrations, and payments.",
    role: "Full-Stack Developer",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveDemo: "#",
    github: [
      { label: "Admin Repo", url: "https://github.com/h-aya1/admin_ummrah" },
      { label: "API Repo", url: "https://github.com/h-aya1/ummrah_api" },
    ],
    images: null,
  },
];
