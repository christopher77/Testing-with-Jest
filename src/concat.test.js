import concat from "./concat";

let array1 = [10, 20];
let array2 = [10, "hola", 33];

test("concat should be return [10, 20, 10, hola , 33] ", () => {
  expect(concat(array1, 10, "hola", 33)).toEqual(
    expect.arrayContaining([10, 20, 10, "hola", 33])
  );
});

test("concat should be return [10, 20, 10, hola , 33]]", () => {
  expect(concat(array1, array2)).toEqual(
    expect.arrayContaining([10, 20, 10, "hola", 33])
  );
});

test("concat should be return [10, 20]", () => {
  expect(concat(array1)).toEqual(expect.arrayContaining([10, 20]));
});
