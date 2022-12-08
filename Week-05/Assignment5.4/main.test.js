// import * as mathFn from 'main.js';
const mathFunction = require("./main");

//test for sum()
test("Adding two numbers", () => {
  expect(mathFunction.sum(1, 2)).toBe(3);
});

//test for sub()
test("Subtracting two numbers", () => {
  expect(mathFunction.sub(2, 1)).toBe(1);
});

//test for mul()
test("Adding two numbers", () => {
  expect(mathFunction.mul(5, 2)).toBe(10);
});
