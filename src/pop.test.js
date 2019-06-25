import pop from "./pop";

let array = [1, 5, 10, 15, 60];
let array2 = [2, "hola"];
let array3 = [3, 2, "hola", [3, 55]];

test("pop should be return the number 60 ", () => {
  expect(pop(array)).toBe(60);
});

test("pop should be return hola ", () => {
  expect(pop(array2)).toBe("hola");
});

test("pop should be return [3, 55] ", () => {
  expect(pop(array3)).toStrictEqual([3, 55]);
});
