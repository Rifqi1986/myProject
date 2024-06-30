const db = require('../config/database');

class AuthModel {
  async getUserByUsername(username) {
    return db('dataUsers').where({ username }).first();
  }
}

module.exports = new AuthModel();