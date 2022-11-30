// class Inheritance using ES5
function Person() {}

Person.prototype.initialize = function (name) {
  this.name = name;
};

Person.prototype.PrintName = function () {
  console.log(`Person name is ${this.name}`);
};

const P1 = new Person();
P1.initialize("Paras");
P1.PrintName();

function Teacher() {}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.Teach = function (subject) {
  this.subject = subject;
  return `${this.name} is now teaching ${this.subject}`;
};

const T1 = new Teacher();
T1.initialize("Teacher Paras");
T1.PrintName();
const Teach = T1.Teach("Hindi");
console.log(Teach);
