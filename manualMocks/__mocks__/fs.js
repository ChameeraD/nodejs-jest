// File: __mocks__/fs.js
const fs = jest.createMockFromModule('fs');

fs.readFileSync = jest.fn(() => 'mocked file content');

module.exports = fs;
