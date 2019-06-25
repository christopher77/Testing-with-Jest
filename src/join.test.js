import join from "./join";

let array = [1, 5, 10, 15, 60];

test("join should be return the string 1;5;10;15;60 ", () => {
  expect(join(array, ";")).toBe("1;5;10;15;60");
});

test("join should be return the string 1 5 10 15 60 ", () => {
  expect(join(array, " ")).toBe("1 5 10 15 60");
});

test("join should be return the string 15101560 ", () => {
  expect(join(array)).toBe("1,5,10,15,60");
});
