import React from "react";

const Header = ({ content, changeLang }) => {
  return (
    <div className="section-container header-container dark-tree-bg">
      <h1 className="project-name">{content.projectName}</h1>
      <h3 className="project-subscription">{content.projectDescription}</h3>
      <button className="header-lang-button" onClick={changeLang}>{content.language}</button>
      {/* <button>
        <svg className="test">
          <use href="#glasses_svg"></use>
        </svg>
      </button> */}
    </div>
  );
};

export default Header;
