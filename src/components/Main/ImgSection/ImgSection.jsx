import React from "react";
import Avatar from "../../../img/julia-peossal.jpeg";
import Avatar2 from "../../../img/clinica1.jpeg";

import "./style.scss";

function ImgSection() {
  return (
    <>
      <section>
        <div className="self-img">
          <h1>Ilumine sua pele</h1>
        </div>
        <img src={Avatar2} alt="clinica" className="clinic-img" />
      </section>
    </>
  );
}

export default ImgSection;
