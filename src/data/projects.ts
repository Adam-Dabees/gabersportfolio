import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Walking Robot",
    href: "/projects",
    tags: ["Robotics", "Mechanical Design", "Control Systems", "Engineering"],
    image: {
      LIGHT: "/IMG_7896.jpg",
      DARK: "/IMG_7896.jpg",
    },
  },
  {
    index: 1,
    title: "Junior Design Competition",
    href: "/projects",
    tags: [
      "Engineering Design",
      "Innovation",
      "Problem Solving",
      "Competition",
    ],
    image: {
      LIGHT: "/IMG_29401.jpg",
      DARK: "/IMG_29401.jpg",
    },
  },
  {
    index: 2,
    title: "Flight Simulator",
    href: "/projects",
    tags: ["Aerospace Engineering", "Flight Dynamics", "Simulation", "AER404"],
    image: {
      LIGHT: "/flight simulator cockpit view from door light.avif",
      DARK: "/flight simulator cockpit view from door light.avif",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Walking Robot",
    favicon: "/logo-dark.png",
    imageUrl: ["/355F5540-466D-4245-BC2B-D4DA85EC34C1.mov", "/IMG_7893.jpg"],
    description:
      "An innovative walking robot project showcasing advanced mechanical design, control systems, and locomotion mechanisms. This project demonstrates expertise in robotics engineering, mechanical design, and innovative engineering solutions.",
    liveWebsiteHref: "/Walking Robot (4).pdf",
  },
  {
    name: "Junior Design Competition",
    favicon: "/logo-dark.png",
    imageUrl: ["/IMG_29401.jpg"],
    description:
      "Participation in a junior design competition highlighting innovative engineering solutions and design thinking. This project showcases problem-solving skills, mechanical design expertise, and engineering innovation in a competitive environment.",
    liveWebsiteHref: "/Junior Design Competition  (2).pdf",
  },
  {
    name: "Flight Simulator",
    favicon: "/logo-dark.png",
    imageUrl: ["/flight simulator cockpit view from door light.avif"],
    description:
      "A comprehensive flight simulator project for AER404 course, focusing on flight dynamics, aircraft systems, and pilot training simulation. This project demonstrates understanding of aerospace engineering principles, flight mechanics, and simulation technology in aviation education.",
    liveWebsiteHref: "/AER404 Flight Simulator  (1).pdf",
  },
];
