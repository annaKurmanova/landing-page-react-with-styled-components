import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 0.4s ease;
}
body {
  font-size: 14px;
    background: hsl(218, 28%, 13%);
}

h1 {
  font-size: 32px;
}

button {
background: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
color: #fff;
border: none;
padding: 15px 75px;
font-weight: 700;
border-radius: 1.5rem;
}


a {
  text-decoration: none;
}
li {
  list-style: none;
}
`;

export default GlobalStyles;
