// closer Example
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.


const createIncrement = () => {
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
increment();//1
increment();//1
increment();//1
log();//0

