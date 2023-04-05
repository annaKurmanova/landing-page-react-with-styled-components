import styled from "styled-components";

export const IconsStyled = styled.div`
  background: hsl(218, 28%, 13%);
  padding: 0 20px;
  color: #fff;
  text-align: center;
  display: grid;
  gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  & div {
    max-width: 500px;
    width: 100%;
    padding: 50px;
  }
`;
