import styled from "styled-components";

export const MenuStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  img {
    max-width: 93px;
  }
  ul {
    display: flex;
    align-items: center;
    & li {
      &:not(:last-child) {
        margin-right: 15px;
      }
      & a {
        color: #fff;
        font-size: 1rem;
      }
    }
  }
`;
