import React, { useState } from "react";
import ImgSection from "./ImgSection/ImgSection";
import ContentSection from "./ContentSection/ContentSection";
import DropdownSection from "./DropdownSection/DropdownSection";

import "./style.scss";

const Main = () => {

  return (
    <main>
      <ImgSection />
      <ContentSection />
      <DropdownSection />
    </main>
  );
};

export default Main;
