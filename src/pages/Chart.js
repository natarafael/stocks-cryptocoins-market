import React, { useState, useEffect } from "react";

import { getDailyChartForSymbol } from "../APIs/ApiConector";

import "./Chart.css";

import Graph from "../components/Graph";
import Button from "../components/Button";
import RecommendedButton from "../components/RecommendedButton";

function formatStockData(stockData) {
  return Object.entries(stockData).map((entries) => {
    const [date, priceData] = entries;

    return {
      date,
      open: Number(priceData["1. open"]),
      high: Number(priceData["2. high"]),
      low: Number(priceData["3. low"]),
      close: Number(priceData["4. close"]),
    };
  });
}

const Chart = (props) => {
  const [stockData, setStockData] = useState([]);
  const [inputData, setInputData] = useState([""]);
  const [stockSign, setStockSign] = useState("FB");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSearchClick = () => {
    setStockSign(inputData);

    setInputData("");
  };

  const handleRecommendeds = (sigla) => {
    console.log(sigla);
    setStockSign(sigla);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol(stockSign);

      if (isMounted)
        setStockData(formatStockData(result.data["Time Series (Daily)"]));
    };
    fetchStockData();
    return () => {
      isMounted = false;
    };
  }, [handleSearchClick]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="container">
        <div className="search-container">
          <input
            className="input-container"
            type="text"
            onChange={handleInputChange}
            value={inputData}
          />
          <div>
            <Button onClick={() => handleSearchClick()}> Procurar</Button>
          </div>
        </div>

        <RecommendedButton onClick={() => handleRecommendeds("AMZN")}>
          Amazon (AMZN)
        </RecommendedButton>
        <RecommendedButton onClick={() => handleRecommendeds("AAPL")}>
          Apple (AAPL)
        </RecommendedButton>
        <RecommendedButton onClick={() => handleRecommendeds("FB")}>
          Facebook (FB)
        </RecommendedButton>
        <RecommendedButton onClick={() => handleRecommendeds("$VXGO")}>
          Google ($VXGO)
        </RecommendedButton>
        <RecommendedButton onClick={() => handleRecommendeds("TSLA")}>
          Tesla (TSLA)
        </RecommendedButton>
      </div>

      <div className="chart-container">
        <h2>{stockSign}</h2>
        <Graph stockData={stockData} sigla={stockSign} />
      </div>
    </>
  );
};

export default Chart;
