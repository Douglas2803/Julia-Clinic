import React from "react";
import Avatar2 from "../../../img/clinica1.jpeg";

import "./style.scss";

function ImgSection() {
  return (
    <>
      <section className="section-img">
        <div className="self-img">
          <h1>Ilumine sua pele</h1>
        </div>
        <img src={Avatar2} alt="clinica" className="clinic-img" />
      </section>
    </>
  );
}

export default ImgSection;
