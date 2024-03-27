import React from "react";
import Avatar from "../../../img/clinica10.jpeg";
import Avatar2 from "../../../img/clinica11.jpeg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "./style.scss";

function ResultsSection() {
  return (
    <>
      <section className="result">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={Avatar}
              srcSet={Avatar}
              alt="Image one"
              className="slider"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={Avatar2}
              srcSet={Avatar2}
              alt="Image two"
              className="slider"
            />
          }
        />
      </section>
    </>
  );
}

export default ResultsSection;
