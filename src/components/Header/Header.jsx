import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

import './style.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#">Logo Clinica</a>
        <GiHamburgerMenu className="nav-icon" />
      </nav>
    </header>
  );
}

export default Header
