import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

function sum(a: number, b: number): number {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(6, 3)).not.toBe(10);
});
