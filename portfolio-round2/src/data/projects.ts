import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Composite Glider",
    href: "/projects",
    tags: ["Composites", "Structural Sizing", "Flight Test", "Team Lead"],
    image: {
      LIGHT: "/glider.jpg",
      DARK: "/glider.jpg",
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
    imageUrl: ["/glider.jpg", "/glider-cad.jpg"],
    description:
      "Led a four-person team through design, layup, and flight test of a hand-launched glider built to a 175 g mass limit while carrying a 200 g payload, a 0.533 payload fraction. Sized a 29.5 in span, 4 in chord NACA M22 composite wing at 54.9 g from a 3g cantilever model with 1.221 MPa peak bending stress, and trimmed CG to 25 to 33 percent chord using repositionable ballast for repeatable 15 m plus glides. Presented the design, load case, and flight test results to faculty and cohort at end of term.",
    liveWebsiteHref: "/composite-glider-report.pdf",
  },
  {
    name: "Stress Analysis of an Aircraft Structural Component",
    favicon: "/logo-dark.png",
    imageUrl: ["/stress-analysis.jpg"],
    description:
      "Modelled a three-metal bonded aircraft part under load in ANSYS APDL. Ran a three-level mesh convergence study that held variation under 0.6 percent between levels and exposed a stress concentration the coarser meshes had missed. The first result looked acceptable and was wrong, which is the point of the study.",
    // TODO: set to "/stress-analysis-report.pdf" once the report is added to /public
    liveWebsiteHref: "",
  },
  {
    name: "Walking Robot",
    favicon: "/logo-dark.png",
    imageUrl: ["/355F5540-466D-4245-BC2B-D4DA85EC34C1.mov", "/IMG_7893.jpg"],
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
