import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Gaber Soltan | Aerospace Engineer"
        description="Learn more about Gaber Soltan, a dedicated Aerospace Engineer. Discover the journey, skills, and passion that drive me to create innovative aerospace and engineering solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Gaber Soltan - Aerospace Engineer",
          description:
            "Dive into the story of Gaber Soltan, an Aerospace Engineer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional aerospace solutions.",
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
              "Aerospace Engineer portfolio, Aerospace Engineer, Robotics Engineer, Mechanical Engineer, Engineering, Aerospace Design, Robotics, Professional Journey, Skills, Passion for Aerospace Engineering",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
