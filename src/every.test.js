import every from "./every";

function isBelow(currentValue) {
  return currentValue < 60;
}

test("every should be return false", () => {
  expect(every([100, 40, 20], isBelow)).toBe(false);
});

test("every should be return true", () => {
  expect(every([40, 20], isBelow)).toBe(true);
});

test("every should return true if no arguments are passed", () => {
  expect(every([], isBelow)).toBe(true);
});
