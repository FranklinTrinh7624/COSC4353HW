import React from "react";
import "./styles.css";

import Navigation from "./Navigation";
import ClientProfile from "./ClientProfile";
import FuelQuote from "./FuelQuote";
import LoginRegistration from "./LoginRegistration";
import FuelQuoteHistory from "./FuelQuoteHistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    /*<div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start to seefds nothingheresome magic happen!</h2>
    </div>*/
    <BrowserRouter>
      <Routes>
        <div className="App">
          <Navigation />
          <Route path="/" element={<Home />} />
          <Route path="/clientprofile" element={<ClientProfile />} />
          <Route path="/fuelquote" element={<FuelQuote />} />
          <Route path="/loginregistration" element={<LoginRegistration />} />
          <Route path="/fuelquotehistory" element={<FuelQuoteHistory />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Home Page </h1>
  </div>
);
