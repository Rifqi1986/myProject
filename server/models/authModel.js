const db = require('../config/database');

const getUserByUsername = async (username) => {
  return await db('dataUsers').where({ username }).first();
};

module.exports = {
  getUserByUsername
};