import find from "./find";

function isBelow(currentValue) {
  return currentValue < 60;
}

test("find should be return the number 40", () => {
  expect(find([100, 40, 20], isBelow)).toBe(40);
});

test("find should be return the number 20", () => {
  expect(find([70, 80, 20, 30], isBelow)).toBe(20);
});

test("find should be return undefined", () => {
  expect(find([70, 80], isBelow)).toBe(undefined);
});

test("find should return undefined if no arguments are passed", () => {
  expect(find("", isBelow)).toBe(undefined);
});
