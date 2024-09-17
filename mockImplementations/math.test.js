// math.test.js
const { add, subtract } = require('./math');

test('mock the add function implementation', () => {
  const mockAdd = jest.fn().mockImplementation((a, b) => a * b);
  expect(mockAdd(2, 3)).toBe(6); // Multiplies instead of adds
});

test('mock subtract function once', () => {
  const mockSubtract = jest.fn()
    .mockImplementationOnce(() => 0)
    .mockImplementationOnce(() => 10);
  
  expect(mockSubtract()).toBe(0);  // First call returns 0
  expect(mockSubtract()).toBe(10); // Second call returns 10
});
