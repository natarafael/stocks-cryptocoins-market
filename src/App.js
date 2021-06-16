// import { useEffect } from "react";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import WICKED from "./WICKED.png";

import Chart from "./pages/Chart";
import NavBar from "./components/NavBar";
import CryptoMarket from "./pages/CryptoMarket";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header>
          <Link to="/">
            <img src={WICKED} alt="logo" className="logo" />
          </Link>
          WICKED STOCKS
        </header>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Chart />
          </Route>
          <Route path="/cryptoMarket">
            <CryptoMarket />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
