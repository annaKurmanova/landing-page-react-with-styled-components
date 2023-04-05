import React from "react";
import { IconsStyled } from "./styles/Icons.styled";
import data from "../data/data.json";

const Icons = () => {
  return (
    <>
      <IconsStyled>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </IconsStyled>
    </>
  );
};

export default Icons;
