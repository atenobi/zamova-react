import React from "react";

const Footer = ({ content }) => {
  return (
    <div className="footer-container">
      {content.map((item) => {
        return (
          <div key={item.id}>
            {item.specialDescription && <p className="person-description">{item.specialDescription}</p>}
            <h3 className="person-name">{item.name}</h3>
          
          <div className="social-media-container">
          {item.facebook && (
              <a className="social-media-link" href={item.facebook.link} target="_blank">
                <svg className="social-media-icon">
                  <use href={item.facebook.svgID}></use>
                </svg>
              </a>
            )}

            {item.instagram && (
              <a className="social-media-link" href={item.instagram.link} target="_blank">
                <svg className="social-media-icon">
                  <use href={item.instagram.svgID}></use>
                </svg>
              </a>
            )}

          </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
