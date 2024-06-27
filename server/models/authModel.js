const knex = require('../knexfile');

class AuthModel {
  static async findByUsername(username) {
    return knex('dataUsers').where({ username }).first();
  }

  static async validatePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
}

module.exports = AuthModel;