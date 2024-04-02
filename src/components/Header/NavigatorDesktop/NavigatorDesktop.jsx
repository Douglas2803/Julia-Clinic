import React, { useState } from "react";
import { Link } from "react-scroll";

import "./style.scss";

function Navigator() {
  return (
    <>
      <a href="#" className="logo-nav-d"></a>
      <nav className="nav-d">
        <ul>
          <Link
            id="link"
            to="tratamento"
            spy={true}
            smooth={true}
            offset={-170}
            duration={1000}
          >
            Acompanhamento
          </Link>
          <Link
            id="link"
            to="result"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            antes e depois
          </Link>
          <Link
            id="link"
            to="feedback"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Relatos
          </Link>
          <Link
            id="link"
            to="section-footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Sobre
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navigator;
