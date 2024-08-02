// src/_test/pointsCalculator.test.js
import { calculatePoints } from "../utils/pointsCalculator";

test("calculates points correctly for amounts over $100", () => {
  expect(calculatePoints(120)).toBe(90);
});

test("calculates points correctly for amounts between $50 and $100", () => {
  expect(calculatePoints(75)).toBe(25);
});

test("calculates zero points for amounts less than $50", () => {
  expect(calculatePoints(30)).toBe(0);
});

test("calculates points correctly for amounts exactly $100", () => {
  expect(calculatePoints(100)).toBe(50);
});

test("calculates points correctly for amounts exactly $50", () => {
  expect(calculatePoints(50)).toBe(0);
});
