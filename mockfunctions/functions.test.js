// functions.test.js
const { processData } = require('./functions');

test('should call the callback with "input data"', () => {
  const mockCallback = jest.fn();
  
  processData(mockCallback);
  
  expect(mockCallback).toHaveBeenCalledWith('input data');
});
