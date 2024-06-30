// controllers/UserController.js

const userModel = require("../models/userModel");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users);
      res.render("admin", { users });
    } catch (error) {
      res.status(500).json({ err: error.message });
    }

    //   const users = await userModel.getAllUsers();
    //   res.status(201).json({ users, message: "All User get successfully" });
    //   res.render("auth/admin", { users });
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
  }
  static async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userModel.getUserById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const userId = await userModel.createUser(newUser);
      res
        .status(201)
        .json({ id: userId, message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUser(req, res) {
    const userId = req.params.id;
    const userData = req.body;
    try {
      const success = await userModel.updateUser(userId, userData);
      if (!success) {
        return res
          .status(404)
          .json({ error: "User not found or data not updated" });
      }
      res.json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      console.log(userId, "===> cek");
      const success = await userModel.deleteUser(+userId);
      if (!success) {
        return res.status(404).json({ error: "User not found or not deleted" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
