// api.js
const axios = require('axios');

async function getUser(id) {
  const response = await axios.get(`/users/${id}`);
  return response.data;
}

module.exports = { getUser };
