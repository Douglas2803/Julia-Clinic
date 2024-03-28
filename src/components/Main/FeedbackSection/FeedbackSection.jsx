import React from "react";
import Slider from "react-perfect-slider";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import "./style.scss";

function FeedbackSection() {
  return (
    <section className="feedback">
      <h1>Veja nosso feedback</h1>
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
        <div className="slide-img3"></div>
      </Slider>
    </section>
  );
}

export default FeedbackSection;
