const { flip, concat, pipe, juxt, prop, join, zipObj, tap, equals, ifElse, not } = require('ramda');
const logWithInfo = notes => x => console.log(notes, x);

const data = {
  firstName: 'Stephen',
  lastName: 'Boynton',
  telephone: {
    country: '1',
    areaCode: '864',
    number: '414-2695'
  },
  email: 'stephen.boynton@somoglobal.com'
}

/*
{
  fullName: 'Stephen Boynton',
  phone: (864)414-2695,
  email: 'stephen.boynton@somoglobal.com'
}
*/

const concatRight = flip(concat);
const wrapInParens = pipe(
  concat('('),
  concatRight(')')
)

const buildAreaCode = pipe(
  prop('areaCode'), 
  wrapInParens
);

// console.log(buildAreaCode({ areaCode: '777' }));

const joinName = pipe(
  juxt([prop('firstName'), prop('lastName')]),
  join(' ')
)

// console.log(joinName({firstName: 'The', lastName: 'Dude' }))

const buildPhoneNumber = pipe(
  prop('telephone'),
  juxt([buildAreaCode, prop('number')]),
  join('')
);

// console.log(buildPhoneNumber({ telephone: { areaCode: '777', number: '123-4444' }}))

// main pipe
const parseData = pipe(
  juxt([joinName, buildPhoneNumber, prop('email')]),
  tap(logWithInfo('after juxt')),
  zipObj(['fullName', 'phone', 'email'])
)

// console.log(parseData(data));

const isStephen = pipe(
  prop('firstName'),
  equals('Stephen')
)

const warnUser = pipe(
  joinName,
  (x) => { throw new Error(`${x} is a Stephen!`) }
)

const maybeParseData = ifElse(
  isStephen,
  warnUser,
  parseData
)

console.log(maybeParseData(data))