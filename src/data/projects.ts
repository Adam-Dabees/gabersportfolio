import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Composite Glider",
    href: "/projects",
    tags: ["Composites", "Structural Sizing", "Flight Test", "Team Lead"],
    image: {
      LIGHT: "/glider-final.jpg",
      DARK: "/glider-final.jpg",
    },
  },
  {
    index: 1,
    title: "Stress Analysis of an Aircraft Component",
    href: "/projects",
    tags: ["ANSYS APDL", "FEA", "Mesh Convergence", "Bonded Joints"],
    image: {
      LIGHT: "/stress-analysis.jpg",
      DARK: "/stress-analysis.jpg",
    },
  },
  {
    index: 2,
    title: "Walking Robot",
    href: "/projects",
    tags: ["Robotics", "Mechanical Design", "Control Systems", "Simulation"],
    image: {
      LIGHT: "/IMG_7896.jpg",
      DARK: "/IMG_7896.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Hand-Launched Composite Glider",
    favicon: "/logo-dark.png",
    imageUrl: [
      "/glider-final.jpg",
      "/glider-flight.mp4",
      "/glider-team.jpg",
      "/glider-wing-sanding.mp4",
      "/glider-wing-trimming.mp4",
    ],
    description:
      "Led a four-person team through design, layup, and flight test of a hand-launched glider built to a 175 g mass limit while carrying a 200 g payload, a 0.533 payload fraction. Sized a 29.5 in span, 4 in chord NACA M22 composite wing at 54.9 g from a 3g cantilever model with 1.221 MPa peak bending stress, and trimmed CG to 25 to 33 percent chord using repositionable ballast for repeatable 15 m plus glides. Presented the design, load case, and flight test results to faculty and cohort at end of term.",
    liveWebsiteHref: "/composite-glider-summary.pdf",
  },
  {
    name: "Stress Analysis of an Aircraft Structural Component",
    favicon: "/logo-dark.png",
    imageUrl: [
      "/stress-analysis.jpg",
      "/stress-analysis-mesh.jpg",
      "/stress-analysis-displacement.jpg",
    ],
    description:
      "Modelled a bonded inverted T-stringer (stainless 304 plate with Al 6061-T6 and Al 7075-T6 stringers) in ANSYS APDL under a parabolic tensile load, applied node by node. Ran static and modal analyses across two load orientations, three mesh densities, and SOLID185 versus SOLID186 elements. Design 1 converged to within 0.6 percent on peak von Mises stress, after the coarse mesh had overpredicted it by 42 percent. Design 2 jumped 71 percent at the fine mesh, exposing a fixed-edge stress concentration that the coarser meshes had missed.",
    liveWebsiteHref: "/stress-analysis-summary.pdf",
  },
  {
    name: "Walking Robot",
    favicon: "/logo-dark.png",
    imageUrl: ["/walking-robot.mp4", "/IMG_7893.jpg"],
    description:
      "Led a four-person team to a first-place finish in the cohort. Tested five leg configurations in simulation before redesigning the joints, then built and tuned the final mechanism for stable gait.",
    liveWebsiteHref: "/Walking Robot (4).pdf",
  },
  {
    name: "Junior Design Competition",
    favicon: "/logo-dark.png",
    imageUrl: ["/IMG_29401.jpg"],
    description:
      "Redesigned an eight-part mechanism for manufacturability, cutting fastener types from four to two using GD&T and tolerance stack-up analysis. Built an assembly fixture and wrote the work instruction so the build no longer depended on one person, taking cycle time from three minutes to under two.",
    liveWebsiteHref: "/Junior Design Competition  (2).pdf",
  },
  {
    name: "Flight Simulator Physics Model",
    favicon: "/logo-dark.png",
    imageUrl: ["/flight simulator cockpit view from door light.avif"],
    description:
      "Built a flight dynamics model in MATLAB and Simulink for AER404, laying the system out as a block diagram before any of it worked. Covered aircraft equations of motion, control response, and trim conditions.",
    liveWebsiteHref: "/AER404 Flight Simulator  (1).pdf",
  },
];
