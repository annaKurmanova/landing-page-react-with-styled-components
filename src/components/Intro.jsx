import React from "react";
import { IntroStyled } from "./styles/Intro.styled";

const Intro = () => {
  return (
    <>
      <IntroStyled>
        <span></span>
        <span>
          <h1>
            All your files in one secure location, <br></br>accessible anywhere.
          </h1>
          <h2>
            Fylo stores all your most important files in one secure location.
            <br></br>
            Access them wherever you need, share and collaborate with <br></br>
            friends, family and co-workers.
          </h2>
          <button>Get Started</button>
        </span>
      </IntroStyled>
    </>
  );
};

export default Intro;
