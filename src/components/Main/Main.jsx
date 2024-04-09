import React, { useState } from "react";
import ImgSection from "./ImgSection/ImgSection";
import ContentSection from "./ContentSection/ContentSection";
import ResultsSection from "./ResultsSection/ResultsSection";
import FeedbackSection from "./FeedbackSection/FeedbackSection";

import "./style.scss";

const Main = () => {
  return (
    <main>
      <ImgSection />
      <ContentSection />
      <ResultsSection />
      <FeedbackSection />
    </main>
  );
};

export default Main;
