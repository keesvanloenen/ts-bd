// function add(a: number, b: number): number {
//   return a + b;
// }

// const add = function(a: number, b: number): number {
//   return a + b;
// }

interface BinaryOperation {
  (arg1: number, arg2: number): number;     // call signature
}

const add: BinaryOperation = function(a, b) {
  return a + b;
}

const multiply: BinaryOperation = function(a, b) {
  return a * b;
}


console.log(add(12, 12))