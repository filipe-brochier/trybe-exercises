const { getUserName } = require('./exercise2.js');

describe('getUserName', () => {
  it('should return an username when an id exists', () => {
    expect.assertions(1);
    return getUserName(1).then(user => expect(user).toBe('Mark'));
  });

  it('should return an error when an id is not found', () => {
    expect.assertions(1);
    return (getUserName(20)).catch((err) => expect(err.message).toBe('User with 20 not found.'));  
  });
});
