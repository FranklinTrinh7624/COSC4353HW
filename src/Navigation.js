import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/clientprofile">
          <li>ClientProfile</li>
        </Link>
        <Link to="/fuelquote">
          <li>FuelQuote</li>
        </Link>
        <Link to="/loginregistration">
          <li>LoginRegistration</li>
        </Link>
        <Link to="/fuelquotehistory">
          <li>FuelQuoteHistory</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
