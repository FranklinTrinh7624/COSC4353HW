import React, { useState } from "react";
import "./styles.css";
import data from "./mock-data.json";

function FuelQuoteHistory() {
  const [history, setHistory] = useState(data);

  return (
    <div className="FuelQuoteHisotry">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Gallons Requested</th>
            <th>Delivery Address</th>
            <th>Delivery Date</th>
            <th>Suggested Price</th>
            <th>Total Amount Due</th>
          </tr>
        </thead>
        <tbody>
          {history.map((historySet) => (
            <tr>
              <td>{historySet.Date}</td>
              <td>{historySet.GallonsRequested}</td>
              <td>{historySet.DeliveryAddress}</td>
              <td>{historySet.DeliveryDate}</td>
              <td>{historySet.SuggestedPrice}</td>
              <td>{historySet.TotalAmountDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FuelQuoteHistory;
