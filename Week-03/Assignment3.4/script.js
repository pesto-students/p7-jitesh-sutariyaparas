const createStack = () => {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
};
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
console.log("Encapsulation broken!", stack.items);


//solution
const createStack2 = () => {
  let items = [];
  return {
    // items: [],
    push(item) {
      items.push(item);
      console.log("items_PUSH_", items);
    },
    pop() {
      items.pop();
      console.log("items_ POP_", items);
      return items;
    },
  };
};
const stack2 = createStack2();
stack2.push(10);
stack2.push(5);
stack2.pop(); // => 5
stack2.items; // => undefined
console.log("Solution__", stack2.items);