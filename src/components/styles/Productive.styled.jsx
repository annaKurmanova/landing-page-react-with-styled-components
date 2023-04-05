import styled from "styled-components";

export const ProductiveStyled = styled.div`
  background: hsl(218, 28%, 13%);
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    padding: 50px;
    color: #fff;
    & img {
      max-width: 100%;
    }
    & h3 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    & p {
      margin-bottom: 20px;
    }
  }
  & div:nth-child(2) {
    max-width: 500px;
    width: 100%;
  }
`;
