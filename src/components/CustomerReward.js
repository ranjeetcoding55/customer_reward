// src/components/CustomerReward.js
import React, { useState, useEffect } from "react";
import { fetchData } from "../service/dataFetcher";
import CustomerTransactions from "./CustomerTransactions";

const CustomerReward = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("/data-source/data.json").then(({ data, error }) => {
      if (error) {
        setError(error);
      } else {
        setTransactions(data);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Reward Points Calculator</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <CustomerTransactions transactions={transactions} />
      )}
    </div>
  );
};

export default CustomerReward;
