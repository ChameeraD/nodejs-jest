// mathAndStringOperations.test.js

// 1. Test Suite for Math operations
describe('Math operations', () => {
    // Test Case: Adding two numbers
    test('adds two numbers', () => {
      const sum = 2 + 3;
      expect(sum).toBe(5); // Matcher: toBe for primitive values
    });
  
    // Test Case: Multiplying two numbers
    test('multiplies two numbers', () => {
      const product = 2 * 3;
      expect(product).toBe(6); // Matcher: toBe for primitive values
    });
  });
  
  // 2. Test Suite for String operations
  describe('String operations', () => {
    // Test Case: Reversing a string
    test('reverses a string', () => {
      const reverseString = (str) => str.split('').reverse().join('');
      
      expect(reverseString('hello')).toBe('olleh'); // Matcher: toBe for primitive values
    });
  
    // Test Case: Capitalizing a string
    test('capitalizes a string', () => {
      const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
      expect(capitalizeString('world')).toBe('World'); // Matcher: toBe for primitive values
    });
  });
  
  // 3. Test Suite for using different Matchers
  describe('Matcher tests', () => {
    // Matcher: toEqual for object comparison
    test('compares two objects', () => {
      const obj = { a: 1, b: 2 };
      expect(obj).toEqual({ a: 1, b: 2 });
    });
  
    // Matcher: toContain for checking elements in an array
    test('checks if array contains a specific element', () => {
      const fruits = ['apple', 'banana', 'cherry'];
      expect(fruits).toContain('banana');
    });
  
    // Matcher: toBeNull for checking null values
    test('checks if value is null', () => {
      const value = null;
      expect(value).toBeNull();
    });
  
    // Matcher: toBeUndefined for checking undefined values
    test('checks if value is undefined', () => {
      let value;
      expect(value).toBeUndefined();
    });
  
    // Matcher: toBeGreaterThan for number comparison
    test('checks if value is greater than another value', () => {
      expect(10).toBeGreaterThan(5);
    });
  
    // Matcher: toMatch for string matching using regex
    test('checks if string matches a regex', () => {
      const str = 'Hello World';
      expect(str).toMatch(/World/);
    });
  
    // Matcher: toHaveLength for checking the length of an array
    test('checks the length of an array', () => {
      const array = [1, 2, 3];
      expect(array).toHaveLength(3);
    });
  });
  
  // 4. Test Suite to demonstrate Test Isolation
  describe('Test Isolation', () => {
    let counter;
  
    // This runs before each test to reset the counter
    beforeEach(() => {
      counter = 0;
    });
  
    // Test Case: Incrementing the counter
    test('increments the counter', () => {
      counter += 1;
      expect(counter).toBe(1); // Counter is incremented here
    });
  
    // Test Case: Counter should reset for each test (Test Isolation)
    test('does not share state between tests', () => {
      expect(counter).toBe(0); // Counter resets to 0 in each test
    });
  });
  
  