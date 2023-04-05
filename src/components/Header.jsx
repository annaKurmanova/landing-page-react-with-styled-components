import React from "react";
import Menu from "./Menu";
import Intro from "./Intro";
import { HeaderStyled } from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Menu />
        <Intro />
      </HeaderStyled>
    </>
  );
};

export default Header;
