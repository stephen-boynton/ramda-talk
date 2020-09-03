// ifElse

const { pipe, add, tap, ifElse, equals } = require('ramda');

const logWithInfo = notes => x => console.log(notes, x);

const addTwo = add(2);
const addThree = add(3);
const equalsFive = equals(5);

const maybeAddThree = ifElse(
  equalsFive,
  addThree,
  addTwo
);

console.log(typeof maybeAddThree);
console.log(maybeAddThree(3));
console.log(maybeAddThree(5));