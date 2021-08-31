const {encode, decode} = require('./encodeDecode.js');

describe('Test encode/decode function', () => {
  it('should be a function', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('should encode vowels into numbers', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('should decode numbers into vowels', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('should NOT convert consonants into numbers, and vice-versa', () => {
    expect(encode('Caio')).toBe('C134');
    expect(decode('C134')).toBe('Caio');
  })

  it('should return a string with the same length as before it was called', () => {
    expect(encode('Filipe').length).toBe(6);
  });
});