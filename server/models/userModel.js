// models/User.js

const db = require('../config/database');

class UserModel {
  async getAllUsers() {
    try {
      const users = await db('dataUsers').select('*');
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await db('dataUsers').where({ id }).first();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(newUser) {
    try {
      const [userId] = await db('dataUsers').insert(newUser).returning('id');
      return userId;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      await db('dataUsers').where({ id }).update(userData);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      await db('dataUsers').where({ id }).del();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserModel();
