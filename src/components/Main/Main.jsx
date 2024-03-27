import React, { useState } from "react";
import ImgSection from "./ImgSection/ImgSection";
import ContentSection from "./ContentSection/ContentSection";
import DropdownSection from "./DropdownSection/DropdownSection";
import ResultsSection from "./ResultsSection/ResultsSection";
import FeedbackSection from "./FeedbackSection/FeedbackSection";

import "./style.scss";

const Main = () => {
  return (
    <main>
      <ImgSection />
      <ContentSection />
      <DropdownSection />
      <ResultsSection />
      <FeedbackSection />
    </main>
  );
};

export default Main;
