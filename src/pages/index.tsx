import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Gaber Soltan | Aerospace Engineer"
        description="Explore the professional portfolio of Gaber Soltan, a skilled Aerospace Engineer. Discover innovative projects, expertise in robotics and mechanical design, and a passion for creating innovative engineering solutions."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Gaber Soltan - Aerospace Engineer",
          description:
            "Dive into the world of aerospace engineering with Gaber Soltan. Discover an Aerospace Engineer with expertise in robotics and mechanical design, showcasing innovative projects and a commitment to engineering excellence.",
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
              "Aerospace Engineer, Robotics Engineer, Mechanical Engineer, Engineering, Aerospace Design, Robotics, Portfolio, Mechanical Design, 3D Modeling, Prototyping, Control Systems, Engineering Innovation",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
