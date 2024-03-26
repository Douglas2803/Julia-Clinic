import React from "react";
import foto from "../../../img/clinica10.jpeg";
import foto2 from "../../../img/clinica11.jpeg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "./style.scss";

function ResultsSection() {
  return(

  <>
    <h1>teste</h1>
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage src="{foto}" srcSet="..." alt="Image one" />
      }
      itemTwo={
        <ReactCompareSliderImage src="{foto2}" srcSet="..." alt="Image two" />
      }
    />
  </>
  );
}

export default ResultsSection;
