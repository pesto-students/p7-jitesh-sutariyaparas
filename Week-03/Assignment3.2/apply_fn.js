// Object Method
// Explicit binding
// bind, call, apply method

// With the apply() method, you can write a method that can be used on different objects.
// The apply() method is similar to the call() method
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// Example 1
const person = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName} ${city}, ${country}`;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.apply(person1, ["Oslo", "Norway"]);


//Example 2
var numbers = [3,5,8,9,22];
var maxNumber  = Math.max(1,2,4,6);
console.log(maxNumber);
// bu we can not pass array in Math.max function that way we need to use call function that will pass array as a position argument
var maxNumber  = Math.max.apply(null,numbers);
console.log(maxNumber);
