import React from "react";
import Slider from "react-perfect-slider";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import "./style.scss";

function FeedbackSection() {
  return (
    <section className="feedback">
      <h1>Veja nosso feedback</h1>
      <div className="slider-fb">
        <Slider
          renderControls={(next, previous) => [
            <button onClick={previous} className="button-slide-previous">
              <AiOutlineLeft />
            </button>,
            <button onClick={next} className="button-slide-next">
              <AiOutlineRight />
            </button>,
          ]}
        >
          <div className="slide-img1"></div>
          <div className="slide-img2"></div>
        </Slider>
      </div>
    </section>
  );
}

export default FeedbackSection;
