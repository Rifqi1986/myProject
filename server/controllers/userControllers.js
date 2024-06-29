// controllers/UserController.js

const userModel = require('../models/userModel');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users)

      // res.render('admin', { users }); // Menampilkan halaman EJS dan mengirimkan data users
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userModel.getUserById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    const newUser = req.body;
    try {
      const userId = await userModel.createUser(newUser);
      res.status(201).json({ id: userId, message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    const userId = req.params.id;
    const userData = req.body;
    try {
      const success = await userModel.updateUser(userId, userData);
      if (!success) {
        return res.status(404).json({ error: 'User not found or data not updated' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      console.log(userId, "===> cek");
      const success = await userModel.deleteUser(+userId);
      if (!success) {
        return res.status(404).json({ error: 'User not found or not deleted' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();