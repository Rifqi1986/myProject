// routes/users.js

const express = require('express');
const router = express.Router();
const PejantanController = require('../controllers/pejantanControllers');
const db = require("../config/database")

// Endpoint untuk mendapatkan semua user
router.get('/', PejantanController.getAllData);

// Endpoint untuk mendapatkan user berdasarkan ID
router.get('/:id', PejantanController.getDataById);

// Endpoint untuk membuat user baru
router.post('/', PejantanController.addData);

// Endpoint untuk mengupdate user berdasarkan ID
router.put('/:id', PejantanController.updateData);

// Endpoint untuk menghapus user berdasarkan ID
router.delete('/:id', PejantanController.deleteData);

module.exports = router;
