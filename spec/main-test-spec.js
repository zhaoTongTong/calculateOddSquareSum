'use strict'

const main = require('../main/main.js');

describe('printSum', () => {

  
  it('should print number', () => {

    spyOn(console, 'log');

    let inputs = [];
    for(let i = 1; i <= 5; i++){
      inputs.push(i);
    }

    const expectSum = 35;
    main.printSum(inputs);

    expect(console.log).toHaveBeenCalledWith(expectSum);
  });

  it('get odd array', () => {

    const input = [1, 2, 3, 4, 5];

    const expectOdd =[1, 3, 5];

    const actualOdd = main.calculateOdd(input);

    expect(actualOdd).toEqual(expectOdd);
  });

  it('getSquare', () => {

    const input = [1, 3, 5];
    const expectSquare = [1, 9, 25];

    const actualSquare = main.calculateSquare(input);

    expect(actualSquare).toEqual(expectSquare);

  });

  it('sum', () => {
    const input = [1, 3, 5];
    const expectSum = 9;

    const actualSum = main.calculateSum(input);

    expect(actualSum).toEqual(expectSum);
  });
  

});