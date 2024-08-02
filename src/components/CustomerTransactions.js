// src/components/CustomerTransactions.js
import React from "react";
import TransactionTable from "./TransactionTable";
import { calculatePoints } from "../utils/pointsCalculator";

const calculateTotalPoints = (transactions) => {
  return transactions.reduce(
    (acc, transaction) => acc + calculatePoints(transaction.amount),
    0
  );
};

const CustomerTransactions = ({ transactions }) => {
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const { customerId, customer, date, amount } = transaction;
    const month = date.substring(0, 7);
    if (!acc[customerId])
      acc[customerId] = { customer, transactionsByMonth: {} };
    if (!acc[customerId].transactionsByMonth[month])
      acc[customerId].transactionsByMonth[month] = [];
    acc[customerId].transactionsByMonth[month].push({ date, amount });
    return acc;
  }, {});

  return (
    <>
      {Object.keys(groupedTransactions).map((customerId) => (
        <div key={customerId}>
          <h2>{groupedTransactions[customerId].customer}</h2>
          <TransactionTable
            transactionsByMonth={
              groupedTransactions[customerId].transactionsByMonth
            }
          />
          <p>
            Total Points for {groupedTransactions[customerId].customer}:{" "}
            {calculateTotalPoints(
              transactions.filter((t) => t.customerId === parseInt(customerId))
            )}
          </p>
        </div>
      ))}
    </>
  );
};

export default CustomerTransactions;
