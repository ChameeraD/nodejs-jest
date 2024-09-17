// fetchData.js

// Callback-based fetchData function
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      callback('Data received');
    }, 1000);
  }
  
  // Promise-based fetchData function
  function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received');
      }, 1000);
    });
  }
  
  // Async/Await-based fetchData function
  async function fetchDataWithAsyncAwait() {
    return 'Data received';
  }
  
  // Function to simulate an error
  async function fetchDataWithError() {
    throw new Error('Error occurred');
  }
  
  module.exports = {
    fetchDataWithCallback,
    fetchDataWithPromise,
    fetchDataWithAsyncAwait,
    fetchDataWithError,
  };
  