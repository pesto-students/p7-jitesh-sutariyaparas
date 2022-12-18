//  Create a simple Javascript function code for addition, subtraction, and multiplication
//  of 2numbers and write the corresponding Jest based tests for it.

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

module.exports = mathFunction; //for node js 
