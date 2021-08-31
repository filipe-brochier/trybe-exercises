let { getRandomIntInclusive } = require('./exercise1');

test('if getRandomIntInclusive has been called, how many times it was called and what was returned ', () => {
  getRandomIntInclusive = jest.fn().mockImplementation((a, b) => a / b);

  expect(getRandomIntInclusive(50, 2)).toBe(25);
  expect(getRandomIntInclusive).toHaveBeenCalled();
  expect(getRandomIntInclusive).toHaveBeenCalledTimes(1);
})