import React from "react";
import {
  FooterStyled,
  FlexContainer,
  FooterDiv,
  FooterLinks,
} from "./styles/Footer.styled";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <img src={logo} alt="" />
      <FlexContainer>
        <FooterDiv>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            tenetur quas autem ex iure quos magnam fugiat est ipsam repellat
          </p>
        </FooterDiv>
        <FooterDiv>
          <FooterLinks>
            <a href="/">+ 1-543-123-4567</a>
            <a href="/">example@fylo.com</a>
          </FooterLinks>
        </FooterDiv>
        <FooterDiv>
          <h3>About us</h3>
          <ul>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </FooterDiv>
        <FooterDiv>
          <h3>Contact us</h3>
          <ul>
            <li>Terms</li>
            <li>Policy</li>
          </ul>
        </FooterDiv>
      </FlexContainer>
    </FooterStyled>
  );
};

export default Footer;
