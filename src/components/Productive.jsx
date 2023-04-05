import React from "react";
import { ProductiveStyled } from "./styles/Productive.styled";
import produtiveImg from "../assets/images/illustration-stay-productive.png";

const Productive = () => {
  return (
    <div>
      <ProductiveStyled>
        <div>
          <img src={produtiveImg} />
        </div>
        <div>
          <h3>Stay productive, wherever you are</h3>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachment required.
          </p>
          <a href="/">See how Fylo works</a>
        </div>
      </ProductiveStyled>
    </div>
  );
};

export default Productive;
