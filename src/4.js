// Juxt
const { pipe, add, tap, juxt, reduce } = require('ramda');

const logWithInfo = notes => x => console.log(notes, x);

const addOne = add(1);
const addTwo = add(2);
const addThree = add(3);
const addAll = reduce(add, 0);


const addNumToVarious = juxt([addOne, addTwo, addThree]);

console.log(typeof addNumToVarious);
console.log('juxt answer', addNumToVarious(6));


const addLots = pipe(
  addNumToVarious,
  addAll
);

const addLotsWithLogs = pipe(
  tap(logWithInfo('input')),
  addNumToVarious,
  tap(logWithInfo('after juxt')),
  addAll,
  tap(logWithInfo('output'))
);

addLotsWithLogs(6);