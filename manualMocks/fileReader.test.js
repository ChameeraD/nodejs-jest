// File: fileReader.test.js
jest.mock('fs');
const { readFile } = require('./fileReader');
const fs = require('fs');

test('reads file content using the mocked fs module', () => {
  const content = readFile('/path/to/file');
  expect(content).toBe('mocked file content');
  expect(fs.readFileSync).toHaveBeenCalledWith('/path/to/file', 'utf-8');
});
