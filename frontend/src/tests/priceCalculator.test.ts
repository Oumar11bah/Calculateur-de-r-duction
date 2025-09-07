import { calculateDiscountedPrice } from "../utils/priceCalculator";

test("calcule correctement une réduction", () => {
  expect(calculateDiscountedPrice(100, 20)).toBe(80);
});

test("arrondit à deux décimales", () => {
  expect(calculateDiscountedPrice(99.99, 15)).toBe(84.99);
});

test("retourne null si prix <= 0", () => {
  expect(calculateDiscountedPrice(0, 20)).toBeNull();
});

test("retourne null si réduction négative", () => {
  expect(calculateDiscountedPrice(100, -5)).toBeNull();
});

test("retourne null si réduction > 100", () => {
  expect(calculateDiscountedPrice(100, 120)).toBeNull();
});
