import React from "react";
import { NavLink } from "react-router-dom";

import { BsGraphUp, BsInfoCircle } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";

import "../App.css";

const NavBar = () => {
  return (
    <div className="side-nav">
      <ul>
        <li>
          <NavLink to="/" className="normal" activeClassName="active" exact>
            <BsGraphUp />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cryptoMarket"
            className="normal"
            activeClassName="active"
            exact
          >
            <BiCoinStack />
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.nasdaq.com/market-activity/stocks/screener"
            target="_blank"
            rel="noreferrer"
          >
            <BsInfoCircle />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
