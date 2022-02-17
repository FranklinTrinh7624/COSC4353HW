import React from "react";
import "./styles.css";

import HomePage from "./HomePage";
import ClientProfile from "./ClientProfile";
import FuelQuote from "./FuelQuote";

export default function App() {
  return (
    /*<div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start to seefds nothingheresome magic happen!</h2>
    </div>*/
    <div className="App">
      <HomePage />
      <ClientProfile />
      <FuelQuote />
    </div>
  );
}
