// Object Method
// Explicit binding
// bind, call, apply method

//////// bind
function sum(a, b) {
  s = this.a + this.b;
  return s;
}
const sumA = sum.bind({ a: 10, b: 20 });
console.log(sumA());
////////

