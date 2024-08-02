// src/components/TransactionTable.js
import React from "react";
import { calculatePoints } from "../utils/pointsCalculator";

const calculateTotalPoints = (transactions) => {
  return transactions.reduce(
    (acc, transaction) => acc + calculatePoints(transaction.amount),
    0
  );
};

const TransactionTable = ({ transactionsByMonth }) => {
  return (
    <>
      {Object.keys(transactionsByMonth).map((month) => (
        <div key={month}>
          <h3>{month}</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {transactionsByMonth[month].map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>${transaction.amount}</td>
                  <td>{calculatePoints(transaction.amount)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">Total Points for {month}</td>
                <td>{calculateTotalPoints(transactionsByMonth[month])}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default TransactionTable;
