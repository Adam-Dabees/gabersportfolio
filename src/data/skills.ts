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
import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

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
        name: "ANSYS",
        icon: SolidjsSvg,
      },
      {
        name: "CATIA",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Fusion 360",
        icon: ReduxSvg,
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
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Arduino",
        icon: DockerSvg,
      },
      {
        name: "Raspberry Pi",
        icon: AwsSvg,
      },
      {
        name: "LabVIEW",
        icon: PostmanSvg,
      },
    ],
  },
];
