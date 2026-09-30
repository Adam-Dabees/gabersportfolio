import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EDUCATION } from "@/data/education";
import { EXPERIENCE } from "@/data/experience";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Gaber Soltan | Aerospace Engineering Student"
        description="Fourth-year Aerospace Engineering student at Toronto Metropolitan University. Composite structures, finite element analysis, and design for manufacture."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Gaber Soltan - Aerospace Engineering Student",
          description:
            "Experience across composites manufacturing, FEA, and design for manufacture, from rocketry payload work to haptics research.",
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
              "Aerospace engineering student, composite structures, finite element analysis, ANSYS, SolidWorks, CATIA V5, design for manufacture, Toronto Metropolitan University",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
