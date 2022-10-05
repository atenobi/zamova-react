import React from "react";

const PoeticTextScreen = ({ name, textArr }) => {
  return (
    <>
      <h4 className="poetic-name">{name}</h4>
      {textArr.map((str, index) => {
        return <p className="poetic-text" key={str+index} >{str}</p>;
      })}
    </>
  );
};

export default PoeticTextScreen;
