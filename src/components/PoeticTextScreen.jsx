import React from "react";

const PoeticTextScreen = ({ name, textArr }) => {
  return (
    <>
      <h4>{name}</h4>
      {textArr.map((str, index) => {
        return <p key={str+index} >{str}</p>;
      })}
    </>
  );
};

export default PoeticTextScreen;
