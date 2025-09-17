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
];
