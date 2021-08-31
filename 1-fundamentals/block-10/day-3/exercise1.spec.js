let { getRandomIntInclusive } = require('./exercise1');

test('if getRandomIntInclusive has been called', () => {
  getRandomIntInclusive = jest.fn().mockReturnValue(10);

  expect(getRandomIntInclusive(0, 100)).toBe(10);
  expect(getRandomIntInclusive).toHaveBeenCalled();
  expect(getRandomIntInclusive).toHaveBeenCalledTimes(1);
});