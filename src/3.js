// Pipe
const { pipe, add, tap } = require('ramda');

const logWithInfo = notes => x => console.log(notes, x);

const addOne = add(1);
const addTwo = add(2);
const addThree = add(3);

const addSix = pipe(
  addOne,
  addTwo,
  addThree
)

// function that returns a function
console.log(typeof addSix)

const addSixWithLogs = pipe(
  tap(logWithInfo('input')),
  addOne,
  tap(logWithInfo('added one')),
  addTwo,
  tap(logWithInfo('added two')),
  addThree,
  tap(logWithInfo('added three'))
)

addSixWithLogs(4);