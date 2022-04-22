import React from "react";
import { SLogo, SSearch, SSidebar } from "./styles";
import { logoSVG } from "../../assets";

function Sidebar(props) {
  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch>
        <input type="text" placeholder="Search" />
      </SSearch>
    </SSidebar>
  );
}

export default Sidebar;
