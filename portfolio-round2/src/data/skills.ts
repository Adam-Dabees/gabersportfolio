import {
  SiAnsys,
  SiAutodesk,
  SiBlender,
  SiCplusplus,
  SiDassaultsystemes,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

import PythonSvg from "@/public/icons/python.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "CAD & Design",
    skills: [
      { name: "SolidWorks", icon: SiDassaultsystemes },
      { name: "CATIA V5", icon: SiDassaultsystemes },
      { name: "AutoCAD", icon: SiAutodesk },
      { name: "Onshape" },
      { name: "Blender", icon: SiBlender },
      { name: "GD&T" },
      { name: "Tolerance Stack-Up" },
      { name: "Design for Manufacture" },
      { name: "Detail Drawings & BOMs" },
    ],
  },
  {
    sectionName: "Analysis & Simulation",
    skills: [
      { name: "ANSYS APDL", icon: SiAnsys },
      { name: "Finite Element Analysis" },
      { name: "Simulink" },
      { name: "XFOIL" },
      { name: "MotionGen" },
    ],
  },
  {
    sectionName: "Manufacturing",
    skills: [
      { name: "Composite Wet Layup" },
      { name: "Vacuum Bagging" },
      { name: "Mould Design" },
      { name: "Jig & Fixture Design" },
      { name: "In-Process Inspection" },
      { name: "CNC Machining" },
      { name: "3D Printing" },
      { name: "Laser Cutting" },
    ],
  },
  {
    sectionName: "Programming & Tools",
    skills: [
      { name: "Python", icon: PythonSvg },
      { name: "MATLAB" },
      { name: "C", icon: SiCplusplus },
      { name: "Excel (VBA / Macros)" },
      { name: "MS Office" },
    ],
  },
];
