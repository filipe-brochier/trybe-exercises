const sum = require('./sum');

describe('Test function sum', () => {
  it('should return 9 when sum(4, 5) is called', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('should return 0 when sum(0, 0) is called', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('should throw an error when sum(4, "5") is called', () => {
    expect(() => {
      sum(4, '5').toThrow();
    });
  });

  it('should return an error message: "parameters must be numbers" when sum(4, "5") is called', () => {
    expect(() => {
      sum(4, '5').toThrow(/parameters must be numbers/);
    });
  });
});