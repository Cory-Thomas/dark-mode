import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useDarkmode } from "./hooks/darkmode";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkmode, setDarkmode] = useDarkmode(false);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true")
      .then(response => setCoinData( response.data ))
      .catch(error => console.log(error));
  }, []);

  function setDarkMode( value ) {
    setDarkmode( value );
  }

  return (
    <div className={darkmode ? "dark-mode App" : "App"}>
      <Navbar setDarkMode={ setDarkMode } darkMode={ darkmode } />
      <Charts coinData={ coinData } />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);