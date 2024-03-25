import React, { useState } from "react";
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
        <a href="#">Logo</a>
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
            <a href="#">Home</a>
            <a href="#">Tratamentos</a>
            <a href="#">Resultados</a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigator;
