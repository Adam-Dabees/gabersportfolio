import Link from "next/link";

import { motion } from "framer-motion";

import { classNames } from "@/utility/classNames";

export type ProjectShowcaseListItem = {
  index: number;
  title: string;
  href: string;
  tags: string[];
  image: {
    LIGHT: string;
    DARK?: string;
  };
};

export interface ProjectShowcaseListProps {
  data: ProjectShowcaseListItem;
  activeProject: number;
  toggleList: (index: number) => void; //eslint-disable-line no-unused-vars
}

export default function ProjectShowcaseList(props: ProjectShowcaseListProps) {
  return (
    <motion.div
      className={classNames("group flex gap-4 ")}
      onHoverStart={() => props.toggleList(props.data.index)}
      onFocus={() => props.toggleList(props.data.index)}
    >
      <span className="hidden text-6xl font-semibold text-accent/70 transition-colors duration-300 lg:block">
        {props.data.index + 1}.
      </span>
      <span className="text-3xl font-semibold text-accent/70 transition-colors duration-300 sm:text-4xl md:text-5xl lg:hidden">
        {props.data.index + 1}.
      </span>
      <div className="flex flex-col gap-2">
        <Link href={props.data.href} className="group/link relative max-w-max">
          <span className="hidden text-6xl font-semibold text-accent/70 transition-all duration-300 group-hover:text-accent group-hover:underline lg:block">
            {props.data.title}
          </span>
          <span className="text-3xl font-semibold text-accent/70 transition-all duration-300 hover:text-accent hover:underline sm:text-4xl md:text-5xl lg:hidden">
            {props.data.title}
          </span>
        </Link>
        <p className="max-w-xl text-base font-semibold text-muted-foreground sm:text-lg">
          {props.data.tags.map((tag) => `#${tag} `)}
        </p>
      </div>
    </motion.div>
  );
}
