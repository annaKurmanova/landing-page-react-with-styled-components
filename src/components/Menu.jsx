import React from "react";
import { MenuStyled } from "./styles/Menu.styled";
import logo from "../assets/images/logo.svg";

const Menu = () => {
  return (
    <>
      <MenuStyled>
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Sign In</a>
          </li>
        </ul>
      </MenuStyled>
    </>
  );
};

export default Menu;
