const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// Endpoint untuk mendapatkan semua pengguna
router.get('/user', userController.getAllUsers);

// Endpoint untuk mendapatkan pengguna berdasarkan ID
router.get('/user:id', userController.getUserById);

// Endpoint untuk membuat pengguna baru
router.post('/adduser', userController.createUser);

// Endpoint untuk memperbarui pengguna berdasarkan ID
router.patch('/user/:id', userController.updateUser);

// Endpoint untuk menghapus pengguna berdasarkan ID
router.delete('/user/:id', userController.deleteUser);

module.exports = router;

