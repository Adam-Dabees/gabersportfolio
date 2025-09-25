import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "C++",
        icon: TypescriptSvg,
      },
      {
        name: "MATLAB",
        icon: JavascriptSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
    ],
  },
  {
    sectionName: "Engineering Software",
    skills: [
      {
        name: "SolidWorks",
        icon: ReactjsSvg,
      },
      {
        name: "AutoCAD",
        icon: SiNextdotjs,
      },
      {
        name: "CATIA",
        icon: ReactRouterDomIcon,
      },
    ],
  },
  {
    sectionName: "Aerospace Engineering",
    skills: [
      {
        name: "Aerodynamics",
        icon: NodejsSvg,
      },
      {
        name: "Flight Dynamics",
        icon: SiExpress,
      },
      {
        name: "Control Systems",
        icon: SiSocketdotio,
      },
      {
        name: "Materials Science",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Robotics & Mechanical",
    skills: [
      {
        name: "Mechanical Design",
        icon: MongoDBSvg,
      },
      {
        name: "Robotics",
        icon: PostgressSvg,
      },
      {
        name: "3D Modeling",
        icon: SiPrisma,
      },
      {
        name: "Prototyping",
        icon: GitSvg,
      },
    ],
  },
];
