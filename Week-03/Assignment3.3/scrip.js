// closer Example
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.


function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

