import some from "./some";

function isBelow(currentValue) {
  return currentValue < 60;
}

test("some should be return true", () => {
  expect(some([100, 40, 20], isBelow)).toBe(true);
});

test("some should be return false", () => {
  expect(some([400], isBelow)).toBe(false);
});

test("some should return false if no arguments are passed", () => {
  expect(some([], isBelow)).toBe(false);
});
