import React, { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import "./style.scss";

function Navigator() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const scrollToTratamento = () => {
    const viewHeight = window.innerHeight; // Altura da visualização do navegador
    const scrollToPosition = viewHeight * 0.9; // Altura da visualização
    scroll.scrollTo(scrollToPosition, {
      smooth: true,
      duration: 1000,
    });
  };

  const scrollToAcompanhamento = () => {
    const viewHeight = window.innerHeight;
    const scrollToPosition = viewHeight * 1.85;
    scroll.scrollTo(scrollToPosition, {
      smooth: true,
      duration: 1000,
    });
  };

  const scrollToAnteseDepois = () => {
    const viewHeight = window.innerHeight;
    const scrollToPosition = viewHeight * 2.34;
    scroll.scrollTo(scrollToPosition, {
      smooth: true,
      duration: 1000,
    });
  };

  const scrollToRelatos = () => {
    const viewHeight = window.innerHeight;
    const scrollToPosition = viewHeight * 4.27;
    scroll.scrollTo(scrollToPosition, {
      smooth: true,
      duration: 1000,
    });
  };

  const scrollToSobre = () => {
    const viewHeight = window.innerHeight;
    const scrollToPosition = viewHeight * 5;
    scroll.scrollTo(scrollToPosition, {
      smooth: true,
      duration: 1000,
    });
  };

  return (
    <>
      <nav>
        <a href="#" className="logo-nav"></a>
        <button onClick={toggleSidebar} className="icon-button">
          <GiHamburgerMenu className="icon-menu" />
        </button>
        <div className="principal"></div>
      </nav>
      {sidebarVisible && (
        <div className={`sidebar ${sidebarVisible ? "" : "closing"}`}>
          <nav className="nav-sidebar">
            <button onClick={toggleSidebar} className="close-button">
              <MdOutlineClose className="close" />
            </button>
            <button onClick={scrollToTratamento} className="navigation-button">
              Tratamento
            </button>
            <button
              onClick={scrollToAcompanhamento}
              className="navigation-button"
            >
              Acompanhamento
            </button>
            <button
              onClick={scrollToAnteseDepois}
              className="navigation-button"
            >
              Antes e depois
            </button>
            <button onClick={scrollToRelatos} className="navigation-button">
              Relatos
            </button>
            <button onClick={scrollToSobre} className="navigation-button">
              Sobre
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigator;
