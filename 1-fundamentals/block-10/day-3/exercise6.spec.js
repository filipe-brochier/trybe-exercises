let { fetchDog } = require('./exercise6');

describe('Testing fetchDog() new implementations', () => {
  
  fetchDog = jest.fn();
  afterEach(fetchDog.mockReset);

  it ('should return a message if the request succeeds', async () => {
    fetchDog.mockResolvedValue('request success');
    
    fetchDog();
    await expect(fetchDog()).resolves.toBe('request success');
    expect(fetchDog).toHaveBeenCalled();
  });
  
  it ('should return a message if the request fails', async () => {
    fetchDog.mockRejectedValue('request failed');
    await expect(fetchDog()).rejects.toBe('request failed');
    expect(fetchDog).toHaveBeenCalled();
  });
})