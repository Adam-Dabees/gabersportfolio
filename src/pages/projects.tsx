import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Gaber Soltan - Aerospace Engineer Portfolio"
        description="Explore a collection of projects by Gaber Soltan, a skilled Aerospace Engineer. From innovative robotics projects to engineering design competitions, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Gaber Soltan - Aerospace Engineer",
          description:
            "Explore a showcase of projects crafted by Gaber Soltan, an Aerospace Engineer. Witness the fusion of creativity and technology in aerospace engineering and robotics.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Gaber Soltan - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects,Gaber Portfolio, Aerospace Engineer, Robotics Engineer, Mechanical Engineer, Engineering, Aerospace Design, Robotics, Mechanical Design, 3D Modeling, Prototyping",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently working on new engineering projects and expanding
              my expertise in advanced robotics and aerospace systems.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my LinkedIn to see more about my engineering journey{" "}
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
