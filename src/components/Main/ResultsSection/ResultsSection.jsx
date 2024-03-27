import React from "react";
import Avatar from "../../../img/paciente1-a.jpeg";
import Avatar2 from "../../../img/paciente1-b.jpeg";
import Avatar3 from "../../../img/paciente2-a.jpeg";
import Avatar4 from "../../../img/paciente2-b.jpeg";
import Avatar5 from "../../../img/paciente3-a.jpeg";
import Avatar6 from "../../../img/paciente3-b.jpeg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "./style.scss";

function ResultsSection() {
  return (
    <>
      <section className="result">
        <h1>Antes e Depois</h1>
        <div className="images">
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
        </div>
        <div className="images">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={Avatar3}
                srcSet={Avatar3}
                alt="Image one"
                className="slider"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={Avatar4}
                srcSet={Avatar4}
                alt="Image two"
                className="slider"
              />
            }
          />
        </div>
        <div className="images">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={Avatar5}
                srcSet={Avatar5}
                alt="Image one"
                className="slider"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={Avatar6}
                srcSet={Avatar6}
                alt="Image two"
                className="slider"
              />
            }
          />
        </div>
      </section>
    </>
  );
}

export default ResultsSection;
