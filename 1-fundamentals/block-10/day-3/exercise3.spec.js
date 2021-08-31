let { getRandomIntInclusive } = require('./exercise1');

describe('Testing getRandomIntInclusive new implementations', () => {
  test('if getRandomIntInclusive now multiplies three numbers ', () => {
    getRandomIntInclusive = jest.fn().mockImplementation((a, b, c) => a * b * c);
    
    expect(getRandomIntInclusive(5,2,3)).toBe(30);
    expect(getRandomIntInclusive).toHaveBeenCalledTimes(1);
  });
  
  test('if getRandomIntInclusive now returns a double of a number', () => {
    getRandomIntInclusive.mockReset();

    getRandomIntInclusive = jest.fn().mockImplementation(num => num * 2);

    expect(getRandomIntInclusive(14)).toBe(28);
    expect(getRandomIntInclusive).toHaveBeenCalledTimes(1);
    expect(getRandomIntInclusive).toHaveBeenCalledWith(14);
  });
});