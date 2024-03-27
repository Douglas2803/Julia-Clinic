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

  return (
    <>
      <nav>
        <a href="#"className="logo-nav"></a>
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
            <Link
              to="tratamento"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            ></Link>
            <Link
              to="acompanhamento"
              spy={true}
              smooth={true}
              isDynamic={true}
              offset={720}
              duration={1000}
            >
              acompanhamento
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigator;
