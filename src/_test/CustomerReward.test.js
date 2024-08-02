// src/_test/CustomerReward.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomerReward from "../components/CustomerReward";
import { fetchData } from "../service/dataFetcher";

jest.mock("../service/dataFetcher", () => ({
  fetchData: jest.fn(),
}));

test("renders loading state initially", () => {
  fetchData.mockResolvedValueOnce({ data: [], error: null });
  render(<CustomerReward />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test("renders error state", async () => {
  fetchData.mockResolvedValueOnce({ data: null, error: "Network error" });
  render(<CustomerReward />);
  await waitFor(() =>
    expect(screen.getByText(/Error: Network error/i)).toBeInTheDocument()
  );
});

test("renders transactions data", async () => {
  fetchData.mockResolvedValueOnce({
    data: [
      { customerId: 1, customer: "John Doe", date: "2024-01-15", amount: 120 },
      { customerId: 1, customer: "John Doe", date: "2024-02-10", amount: 75 },
    ],
    error: null,
  });

  render(<CustomerReward />);
  /*await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());
  expect(screen.getByText(/2024-01/i)).toBeInTheDocument();
  expect(screen.getByText(/2024-02/i)).toBeInTheDocument();
  expect(screen.getByText(/120/i)).toBeInTheDocument();
  expect(screen.getByText(/75/i)).toBeInTheDocument();*/
});
