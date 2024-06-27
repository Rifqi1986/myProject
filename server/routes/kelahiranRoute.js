// routes/kelahiranRoute.js

const express = require('express');
const router = express.Router();
const db = require("../config/database");
const kelahiranController = require('../controllers/kelahiranController');

// Endpoint untuk mendapatkan semua 
router.get('/', kelahiranController.getAllData);

// Endpoint untuk mendapatkan  berdasarkan ID
router.get('/:id', kelahiranController.getDataById);

// Endpoint untuk membuat  baru
router.post('/', kelahiranController.addData);

// Endpoint untuk mengupdate berdasarkan ID
router.patch('/:id', kelahiranController.updateData);

// Endpoint untuk menghapus  berdasarkan ID
router.delete('/:id', kelahiranController.deleteData);

module.exports = router;
