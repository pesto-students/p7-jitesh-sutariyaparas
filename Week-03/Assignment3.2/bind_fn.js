// Object Method
// Explicit binding
// bind, call, apply method

//////// bind
const sum = (a, b) => {
  return this.a + this.b;
}
const sumA = sum.bind({ a: 10, b: 20 });
console.log(sumA());
////////

