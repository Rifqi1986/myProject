// models/User.js

const knex = require('../config/database');

class User {
  constructor() {
    this.myTable = 'dataUsers';
  }

  async getAllUsers() {
    return knex(this.myTable).select('*');
  }

  async getUserById(id) {
    return knex(this.myTable).where({ id }).first();
  }

  async createUser(user) {
    return knex(this.myTable).insert(user).returning('*');
  }

  async updateUser(id, Data) {
    return knex(this.myTable).where({ id }).update(Data).returning('*');
  }

  async deleteUser(id) {
    return knex(this.myTable).where({ id }).del();
  }
}

module.exports = new User();
