//
function add(x, y){
  return x + y;
}

// unexecuted function
add
console.log(typeof add);
// executed
console.log(add(2, 3))

// returns function
function addMore(x, y){
  return function(z){
    return x + y + z
  }
}

const addFive = addMore(2, 3);
console.log('after single execution', typeof addFive);
console.log('result', addFive(10));

const result = addMore(2, 3)(10);
console.log('execute both functions at once', typeof result);
console.log(result);

// -------------------------------------------------------
// Useless example

// short hand, takes function, returns function
const addByCustomAmount = (fx) => (x) => x + fx();

// lambda function, shorthand
const alwaysReturnTen = () => 10;

// function taking function
const addBy10 = addByCustomAmount(alwaysReturnTen);
console.log(typeof addBy10); // function

console.log(addBy10(20));
