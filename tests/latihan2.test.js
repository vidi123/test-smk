const printSquare = require("../latihan/latihan2");


describe('Square with a length of 5 printing', () => {
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalLog;
  });

  it('prints a square of size 5', () => {
    printSquare(5);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenNthCalledWith(1, '* * * * *');
    expect(console.log).toHaveBeenNthCalledWith(2, '* * * * *');
    expect(console.log).toHaveBeenNthCalledWith(3, '* * * * *');
    expect(console.log).toHaveBeenNthCalledWith(4, '* * * * *');
    expect(console.log).toHaveBeenNthCalledWith(5, '* * * * *');
  });
});