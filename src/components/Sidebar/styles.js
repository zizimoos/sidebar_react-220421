import styled from "styled-components";
import { v } from "../../styles/variables";

export const SSidebar = styled.div`
  width: ${v.sidebarWidth};
  height: 100vh;
  position: relative;
  background-color: lightgray;
`;

export const SLogo = styled.div`
  width: 52px;
  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;
`;

export const SSearch = styled.div`
  background-color: white;
`;
