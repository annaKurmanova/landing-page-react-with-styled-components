import styled from "styled-components";

export const TestimonialsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 100px 170px;
  justify-items: center;
  background: hsl(218, 28%, 13%);
  @media (max-width: 1440px) {
    padding: 50px;
  }
  & div {
    color: #fff;
    padding: 30px;
    background: hsl(219, 30%, 18%);
    max-width: 350px;
    & span {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & img {
        max-width: 100%;
        width: 35px;
        border-radius: 50%;
      }
      & span {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-left: 10px;
        margin-top: 0;
        & p:first-child {
          font-weight: 900;
        }
        & p:nth-child(2) {
          font-size: 0.6rem;
        }
      }
    }
  }
`;
