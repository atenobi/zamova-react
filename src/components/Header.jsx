import React from "react";

const Header = ({ content, changeLang }) => {
  return (
    <>
      <h1>{content.projectName}</h1>
      <h3>{content.projectDescription}</h3>
      <button onClick={changeLang}>{content.language}</button>
      <button>
        <svg className="test">
          <use href="#glasses_svg"></use>
        </svg>
      </button>
    </>
  );
};

export default Header;
