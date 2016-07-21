'use strict'

function printSum(inputs) {
  const odds = calculateOdd(inputs);
  const oddSquares = calculateSquare(odds);
  const sum = calculateSum(oddSquares);

  console.log(sum);
}

function calculateOdd(inputs) {
  return inputs.filter(inputs => inputs%2 === 1);
}

function calculateSquare(odds) {
  return odds.map(odd => odd * odd);
}

function calculateSum(oddSquares) {
  return oddSquares.reduce((prev, cur) => prev + cur);
}

module.exports = {
  printSum: printSum,
  calculateOdd: calculateOdd,
  calculateSquare: calculateSquare,
  calculateSum: calculateSum
}