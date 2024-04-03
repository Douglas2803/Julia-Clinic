import React, { useState } from "react";
import { Link } from "react-scroll";

import "./style.scss";

function Navigator() {
  return (
    <>
      <a href="#" className="logo-nav-d"></a>
      <nav className="nav-d">
        <ul>
          <li>
            <Link
              id="link"
              to="tratamento"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-170}
              duration={1000}
            >
              Acompanhamento
            </Link>
          </li>
          <li>
            <Link
              id="link"
              to="result"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              antes e depois
            </Link>
          </li>
          <li>
            <Link
              id="link"
              to="feedback"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Relatos
            </Link>
          </li>
          <li>
            <Link
              id="link"
              to="section-footer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigator;
