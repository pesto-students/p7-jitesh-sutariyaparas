// Object Method
// Explicit binding
// bind, call, apply method

//////// call
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
const customer = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const customer1 = {
  firstName: "Tom",
  lastName: "Doe",
};
const customer2 = {
  firstName: "Nick",
  lastName: "Doe",
};

const customerName = customer.fullName.call(customer1);
console.log(customerName);

///////////
// The call() method can accept arguments:
const person = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const fName = person.fullName.call(person1, "Oslo", "Norway");
console.log(fName);
