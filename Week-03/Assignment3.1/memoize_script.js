

function memoize (fn) {
  const cache = new Map();
  return function (...args) {
    console.log(cache)
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key)
    }
    cache.set(key, fn(...args));
    return cache.get(key)
  };
}

// memoize function using lodash library
// ref https://www.npmjs.com/package/lodash
// const memoize = require("lodash/memoize");

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const sum = function sum(a, b) {
  s = a + b;
  console.log(s);
  return s;
};

// define memoize function
const sumM = memoize(sum);

time(() => sumM(20000, 50000));
time(() => sumM(20000, 50000));
time(() => sumM(2, 10));
time(() => sumM(2, 10));

