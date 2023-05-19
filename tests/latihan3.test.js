const printRectangle = require("../latihan/latihan3");

describe('Rectangle printing', () => {
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalLog;
  });

  it('prints a rectangle of length 5 and height 3', () => {
    printRectangle(5, 3);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenNthCalledWith(1, '* * * * *');
    expect(console.log).toHaveBeenNthCalledWith(2, '* * * * *');
    expect(console.log).toHaveBeenNthCalledWith(3, '* * * * *');
  });

  it('prints a rectangle of length 8 and height 4', () => {
    printRectangle(8, 4);
    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenNthCalledWith(1, '* * * * * * * *');
    expect(console.log).toHaveBeenNthCalledWith(2, '* * * * * * * *');
    expect(console.log).toHaveBeenNthCalledWith(3, '* * * * * * * *');
    expect(console.log).toHaveBeenNthCalledWith(4, '* * * * * * * *');
  });
});