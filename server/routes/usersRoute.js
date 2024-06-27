// routes/users.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');
const db = require("../config/database")

// Endpoint untuk mendapatkan semua user
router.get('/', UserController.getAllUsers);

// Endpoint untuk mendapatkan user berdasarkan ID
router.get('/:id', UserController.getUserById);

// Endpoint untuk membuat user baru
router.post('/', UserController.createUser);

// Endpoint untuk mengupdate user berdasarkan ID
router.patch('/:id', UserController.updateUser);

// Endpoint untuk menghapus user berdasarkan ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
