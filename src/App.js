// import { useEffect } from "react";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { WiDayCloudy } from "react-icons/wi";

import WICKED from "./WICKED.png";

import Chart from "./pages/Chart";
import NavBar from "./components/NavBar";
import CryptoMarket from "./pages/CryptoMarket";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <header className="heads">
        <Link to="/">
          <img src={WICKED} alt="logo" className="logo" />
        </Link>
        <div className="title">WICKED STOCKS</div>
        <div className="weather">
          <a href="http://localhost:3001" target="_blank" rel="noreferrer">
            <WiDayCloudy />
          </a>
        </div>
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

      <Footer />
    </div>
  );
}

export default App;
