let { upperCase, firstLetter, concatStrings} = require('./exercise4');

describe('Testing upperCase() new implementation', () => {
  it('should now return every letter in lower case', () => {
    upperCase = jest.fn().mockImplementation(str => str.toLowerCase());
    
    expect(upperCase('SOMETHING')).toBe('something');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith("SOMETHING");
  });
});

describe('Testing firstLetter() new implementation', () => {
  it('should now return the last letter from a string', () => {
    firstLetter = jest.fn().mockImplementation(str => str[str.length - 1]);

    expect(firstLetter('SOMETHING')).toBe('G');
    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledWith("SOMETHING");
  });
});

describe('Testing concatStrings() new implementation', () => {
  it('should now concat three strings instead of two', () => {
    concatStrings = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    expect(concatStrings('This ', 'should ', 'work!')).toBe('This should work!');
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledTimes(1);
    expect(concatStrings).toHaveBeenCalledWith('This ', 'should ', 'work!');
  });
});