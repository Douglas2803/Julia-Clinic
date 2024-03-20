import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

import './style.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#">Logogit push origin main
 Clinica</a>
        <GiHamburgerMenu className="nav-icon" />
      </nav>
    </header>
  );
}

export default Header
