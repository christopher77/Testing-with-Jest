import concat from "./concat";

let array1 = [10, 20];
let array2 = [10, "hola", 33];

test("concat should be return [10, 20, 10,hola, 33] ", () => {
  expect(concat(array1, array2)).toBe([10, 20, 10, "hola", 33]);
});

// test("concat should be return [10, 20, 10,hola, 33, 100, job]", () => {
//   expect(concat(array1, array2, 100, "job")).toBe([
//     10,
//     20,
//     10,
//     "hola",
//     33,
//     100,
//     "job"
//   ]);
// });

// test("concat should be return undefined", () => {
//   expect(concat(array1, array2, 100, "job")).toBe(undefined);
// });

// test("concat should return undefined if no arguments are passed", () => {
//   expect(concat(array1, array2, 100, "job")).toBe(undefined);
// });
