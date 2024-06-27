// controllers/UserController.js

const User = require('../models/userModel');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await User.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const newUser = req.body;
      const createdUser = await User.createUser(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await User.updateUser(id, userData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.deleteUser(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
