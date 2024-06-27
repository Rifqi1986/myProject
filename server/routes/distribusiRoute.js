// routes/distribusiRoute.js

const express = require('express');
const router = express.Router();
const db = require("../config/database")
const distribusiController = require('../controllers/distribusiController');

// Endpoint untuk mendapatkan semua 
router.get('/', distribusiController.getAllData);

// Endpoint untuk mendapatkan berdasarkan ID
router.get('/:id', distribusiController.getDataById);

// Endpoint untuk membuat baru
router.post('/', distribusiController.addData);

// Endpoint untuk mengupdate  berdasarkan ID
router.patch('/:id', distribusiController.updateData);

// Endpoint untuk menghapus berdasarkan ID
router.delete('/:id', distribusiController.deleteData);

module.exports = router;
