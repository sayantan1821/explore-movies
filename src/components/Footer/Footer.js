import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_text">
      <p>
        Copyright © 2022 Build by{" "}
        <span className="footer_name">
          <a target='_blank' href="https://github.com/sayantan1821">Sayantan Kapat</a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
