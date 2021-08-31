let exercise5 = require('./exercise5');

describe('Testing upperCase() new implementation', () => {
  it('should now return every letter in lower case', () => {
    const mockedFn = jest
      .spyOn(exercise5, 'upperCase')
      .mockImplementation(str => str.toLowerCase());
    
    expect(mockedFn('SOMETHING')).toBe('something');
    expect(mockedFn).toHaveBeenCalled();
    expect(mockedFn).toHaveBeenCalledTimes(1);
    expect(mockedFn).toHaveBeenCalledWith("SOMETHING");
  });

  it('should return every letter in upper case when the mock is restored', () => {
    exercise5.upperCase.mockRestore();
    expect(exercise5.upperCase('something')).toBe('SOMETHING');
  })
});

// describe("testando implementações", () => {
//   test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
//     const first = jest
//       .spyOn({ upperCase })
//       .mockImplementation(a => a.toLowerCase());

//     expect(first("UPPERCASE")).toBe("uppercase");
//     expect(first).toHaveBeenCalled();
//     expect(first).toHaveBeenCalledTimes(1);
//     expect(first).toHaveBeenCalledWith("UPPERCASE");

//     service.firstFunction.mockRestore();

//     expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
//   });
// });