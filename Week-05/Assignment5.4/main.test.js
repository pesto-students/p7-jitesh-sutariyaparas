// import * as mathFn from 'main.js';

const mathFunction = {
  sum: (a, b) => {
    return a + b;
  },

  sub: (a, b) => {
    return a - b;
  },

  mul: (a, b) => {
    return a * b;
  },
};

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
