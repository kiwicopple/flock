import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Start Free Trial"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ClientsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Here's what people are saying"
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

export default IndexPage;
