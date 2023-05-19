const sum = require("../latihan/latihan1");

test('adds 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 4 and 5 to equal 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('adds 10 and -5 to equal 5', () => {
  expect(sum(10, -5)).toBe(5);
});

test('adds -3 and -4 to equal -7', () => {
  expect(sum(-3, -4)).toBe(-7);
});

test('adds 2.5 and 2.5 to equal 5', () => {
    expect(sum(2.5, 2.5)).toBe(5.0);
})

test('adds 0.1 and 0.2 to equal 0.3', () => {
    expect(sum(0.1, 0.2)).toBe(0.3);
})
