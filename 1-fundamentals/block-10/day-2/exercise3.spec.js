const { getUserName } = require('./exercise2.js');

describe('getUserName', () => {
  it('should return an username when an id exists', async () => {
    const username = await getUserName(1);
    expect(username).toBe('Mark');
  });

  it('should return an error when an id is not found', async () => {
    try {
      await getUserName(20);
    } catch (err) {
      expect(err.message).toBe('User with 20 not found.');  
    }
  });
});