// fetchData.test.js

const {
    fetchDataWithCallback,
    fetchDataWithPromise,
    fetchDataWithAsyncAwait,
    fetchDataWithError,
  } = require('../src/fetchData');
  
  // 1. Testing Asynchronous Callbacks
  test('calls the callback after 1 second', (done) => {
    function callback(data) {
      expect(data).toBe('Data received');
      done(); // Mark the test as done after the callback is called
    }
  
    fetchDataWithCallback(callback);
  });
  
  // 2. Testing Promises
  test('resolves to "Data received" using promises', () => {
    return fetchDataWithPromise().then((data) => {
      expect(data).toBe('Data received');
    });
  });
  
  // 3. Testing Promises with .resolves and .rejects
  test('the data is "Data received" using resolves', () => {
    return expect(fetchDataWithPromise()).resolves.toBe('Data received');
  });
  
  test('the promise is rejected using rejects', () => {
    return expect(Promise.reject('Error occurred')).rejects.toBe('Error occurred');
  });
  
  // 4. Testing Async/Await
  test('fetches data using async/await', async () => {
    const data = await fetchDataWithAsyncAwait();
    expect(data).toBe('Data received');
  });
  
  test('fetches data with an error using async/await', async () => {
    await expect(fetchDataWithError()).rejects.toThrow('Error occurred');
  });
  