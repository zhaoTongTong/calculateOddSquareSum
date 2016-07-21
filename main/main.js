'use strict'

function printSum(inputs) {
  const sum = inputs.filter(input => input%2 === 1)
      .map(odd => odd * odd)
      .reduce((prev, cur) => prev + cur);

  console.log(sum);
}

exports.printSum = printSum;
