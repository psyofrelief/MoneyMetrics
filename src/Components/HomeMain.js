import React from "react";
import {
  FinancialSection,
  FeaturedSection,
  HealthSection,
} from "./MainSections.js";
import "../homepage.scss";

const HomeMain = (props) => {
  return (
    <main className="home-main">
      <h1>FREE CONVERTERS & CALCULATORS</h1>
      <p className="intro">
        Select from a multitude of free converters & calculators in the fields
        of health, finance, and science.{" "}
      </p>
      <FinancialSection />
      <FeaturedSection />
      <HealthSection />
    </main>
  );
};

export default HomeMain;
