import React from "react";
import CardTypeServices from "../../components/CardTypesServices";
import AppHeader from "../../components/Header";
import WhyUsSection from "../../components/whyUs";

import "./index.less";

const LandingPage = () => {
  return (
    <div id="landing-page">
      <AppHeader />
      <main id="main-content">
        <h2> Welcome landing page</h2>

        <CardTypeServices />

        <WhyUsSection />
      </main>
    </div>
  );
};

export default LandingPage;
