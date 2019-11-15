import React from "react";
import FaqSection from "./../components/FaqSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "next/router";

function FaqPage(props) {
  const router = useRouter();

  return (
    <>
      <FaqSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Frequently Asked Questions"
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

export default FaqPage;
