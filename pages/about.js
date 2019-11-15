import React from "react";
import ContentSection from "./../components/ContentSection";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "next/router";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <StatsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        items={[
          {
            title: "Tweets",
            stat: "3,456"
          },
          {
            title: "Following",
            stat: "123"
          },
          {
            title: "Followers",
            stat: "456k"
          },
          {
            title: "Likes",
            stat: "789"
          }
        ]}
      />
      <TeamBiosSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Ready to get started?"
        buttonText="Get Started"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default AboutPage;
