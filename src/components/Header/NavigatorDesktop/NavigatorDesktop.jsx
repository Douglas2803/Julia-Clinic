import React, { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import "./style.scss";

function Navigator() {
  return (
    <>
      <a href="#" className="logo-nav-d"></a>
      <nav className="nav-d">
        <ul>
          <li>Acompanhamento</li>
          <li>Antes e Depois</li>
          <li>Relatos</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </>
  );
}

export default Navigator;
