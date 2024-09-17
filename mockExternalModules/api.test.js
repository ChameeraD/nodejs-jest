// api.test.js
const axios = require('axios');
const { getUser } = require('./api');

jest.mock('axios');

test('should fetch user data', async () => {
  const mockUser = { id: 1, name: 'John' };
  axios.get.mockResolvedValue({ data: mockUser });

  const result = await getUser(1);
  expect(result).toEqual(mockUser);
});
