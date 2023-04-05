import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: hsl(216, 53%, 9%);
  color: #fff;
  padding: 100px 50px;
  font-size: 1rem;
  img {
    max-width: 93px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  padding: 50px 0;
`;

export const FooterDiv = styled.div`
  max-width: 400px;
  width: 100%;
  margin-right: 10px;
  text-align: center;

  & p {
    max-width: 300px;
    width: 100%;
    text-align: left;
  }

  & ul {
    & li {
      padding: 5px 0;
    }
  }
`;

export const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & a {
      color: #fff;
      padding: 0 0 10px 0;
    }
}
`;
