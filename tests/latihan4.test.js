const fizzBuzz = require('../latihan/latihan4');

describe('FizzBuzz', () => {
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalLog;
  });

  it('prints the FizzBuzz sequence correctly', () => {
    fizzBuzz(15);

    expect(console.log).toHaveBeenCalledTimes(15);
    expect(console.log).toHaveBeenNthCalledWith(1, 1);
    expect(console.log).toHaveBeenNthCalledWith(2, 2);
    expect(console.log).toHaveBeenNthCalledWith(3, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(4, 4);
    expect(console.log).toHaveBeenNthCalledWith(5, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(6, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(7, 7);
    expect(console.log).toHaveBeenNthCalledWith(8, 8);
    expect(console.log).toHaveBeenNthCalledWith(9, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(10, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(11, 11);
    expect(console.log).toHaveBeenNthCalledWith(12, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(13, 13);
    expect(console.log).toHaveBeenNthCalledWith(14, 14);
    expect(console.log).toHaveBeenNthCalledWith(15, 'FizzBuzz');
  });
});