// src/_test/dataFetcher.test.js
import { fetchData } from "../service/dataFetcher";

// Mock the global fetch function
global.fetch = jest.fn();

beforeEach(() => {
  jest.resetAllMocks(); // Reset mocks before each test
});

test("fetches data successfully", async () => {
  // Setup mock response
  fetch.mockResolvedValueOnce({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          customerId: 1,
          customer: "John Doe",
          date: "2024-01-15",
          amount: 120,
        },
      ]),
  });

  const { data, error } = await fetchData("/mock-url");
  expect(data).toEqual([
    { customerId: 1, customer: "John Doe", date: "2024-01-15", amount: 120 },
  ]);
  expect(error).toBe(null);
});

test("handles fetch error", async () => {
  // Setup mock error
  fetch.mockRejectedValueOnce(new Error("Network error"));

  const { data, error } = await fetchData("/mock-url");
  expect(data).toBe(null);
  expect(error).toBe("Network error");
});
