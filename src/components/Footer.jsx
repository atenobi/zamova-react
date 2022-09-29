import React from "react";

const Footer = ({ content }) => {
  return (
    <>
      {content.map((item) => {
        return (
          <div key={item.id}>
            {item.specialDescription && <p>{item.specialDescription}</p>}
            <h3>{item.name}</h3>

            {item.facebook && (
              <a href={item.facebook.link} target="_blank">
                <svg className="test">
                  <use href={item.facebook.svgID}></use>
                </svg>
              </a>
            )}

            {item.instagram && (
              <a href={item.instagram.link} target="_blank">
                <svg className="test">
                  <use href={item.instagram.svgID}></use>
                </svg>
              </a>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Footer;
