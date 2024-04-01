import React from "react";
import Navigator from "./Navigator/Navigator";
import NavigatorDesktop from "./NavigatorDesktop/NavigatorDesktop";
import "./style.scss";

const Header = () => {

  return (
    <>
      <header>
        <Navigator />
        <NavigatorDesktop />
      </header>
    </>
  );
};

export default Header;
