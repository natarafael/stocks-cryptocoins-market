import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>WICKED STOCKS</h4>
            <ul className="list">
              <li>40028922</li>
              <li>Foz do Iguaçu, Paraná</li>
              <li>Unioeste</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WICKED STOCKS | All Rights Reserved
            | Terms Of Service | Privacity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
