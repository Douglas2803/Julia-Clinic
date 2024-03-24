import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.scss";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header>
      <nav>
        <a href="#">Logo</a>
        <button onClick={toggleSidebar} className="icon-button">
          <GiHamburgerMenu className="icon-menu" />
        </button>
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
    <div className="principal"></div>
    </header>
  );
};

export default Header;
