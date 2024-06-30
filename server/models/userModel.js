// models/User.js

const db = require("../config/database");

class UserModel {
  static async getAllUsers() {
    try {
      const users = await db("dataUsers").select("*");
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const user = await db("dataUsers").where({ id }).first();
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async createUser(newUser) {
    try {
      const [userId] = await db("dataUsers").insert(newUser).returning("id");
      return userId;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, userData) {
    try {
      await db("dataUsers").where({ id }).update(userData);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      await db("dataUsers").where({ id }).del();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserModel;
