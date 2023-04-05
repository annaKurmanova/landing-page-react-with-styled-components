import styled from "styled-components";

export const IntroStyled = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;

  & span:first-child {
    display: block;
    height: 55vh;
    max-width: 750px;
    width: 100%;
    background: url(/src/assets/images/illustration-intro.png) no-repeat center
      center;
    background-size: contain;
  }

  & span:nth-child(2) {
    max-width: 750px;
    width: 100%;
    & h2 {
      font-size: 16px;
      margin: 15px;
    }
  }
`;
