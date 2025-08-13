export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  image: string;
  status?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hotel Management System",
    description:
      "Designed and implemented the login interface, service page, and front desk module for a group project.",
    technologies: ["React", "JavaScript"],
    liveDemo: "#",
    github: "https://github.com/Hotel-Translyvania/Hotel-Management-System.git",
    image: "app/assets/project-images/hotel.jpg",
  },
  {
    id: 2,
    title: "Bank Management System",
    description:
      "Built the entire user-side interface including dashboard and core banking flows for a group project.",
    technologies: ["React", "PostgreSQL", "API Integration"],
    liveDemo: "#",
    github: "https://github.com/fikante/Bank_Management_System.git",
    image: "app/assets/project-images/bank.jpg",
  },
  {
    id: 3,
    title: "Basirahtv",
    description:
      "Developed the front-end for a media streaming platform with a focus on clean UI and smooth navigation.",
    technologies: ["React", "CSS"],
    liveDemo: "https://basirahtv.com",
    github: "https://github.com/ekram-web/promotion_Api.git",
    image: "app/assets/project-images/basirah.png",
  },
  // {
  //   id: 4,
  //   title: "News Feed App",
  //   description:
  //     "A self-initiated project building a mobile news feed app with secure Firebase authentication.",
  //   technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
  //   liveDemo: "#",
  //   github: "https://github.com/h-aya1/techfeeds.git",
  //   image: "app/assets/project-images/techfeeds.jpg",
  //   status: "In Progress",
  // }
];
