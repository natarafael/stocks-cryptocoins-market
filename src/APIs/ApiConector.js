import axios from "axios";
import localforage from "localforage";
import { setupCache } from "axios-cache-adapter";

const chache = setupCache({
  maxAge: 60 * 60 * 1000,
  store: localforage,
  exclude: {
    query: false,
  },
});

const axiosInstance = axios.create({
  baseURL: "http://www.alphavantage.co/query",
  adapter: chache.adapter,
});

export const getDailyChartForSymbol = (symbol) => {
  return axiosInstance.get("", {
    params: {
      function: "TIME_SERIES_DAILY",
      symbol,
      apikey: "DP8XYRWYUXKKB00O",
    },
  });
};
