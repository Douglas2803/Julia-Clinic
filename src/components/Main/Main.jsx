import React from "react";
import "./style.scss";
import Avatar from "../../img/julia-peossal.jpeg";
import Avatar2 from "../../img/clinica1.jpeg";
const Main = () => {
  return (
    <main>
      <section>
        <div className="self-img">
          <h1>Ilumine sua pele</h1>
        </div>
        <img src={Avatar2} alt="clinica" className="clinic-img" />
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default Main;
