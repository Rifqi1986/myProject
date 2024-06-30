const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

// Endpoint untuk mendapatkan semua pengguna
router.get("/", userController.getAllUsers);

// Endpoint untuk mendapatkan pengguna berdasarkan ID
router.get("/:id", userController.getUserById);

// Endpoint untuk membuat pengguna baru
router.post("/adduser", userController.createUser);

// Endpoint untuk memperbarui pengguna berdasarkan ID
router.patch("/:id", userController.updateUser);

// Endpoint untuk menghapus pengguna berdasarkan ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
