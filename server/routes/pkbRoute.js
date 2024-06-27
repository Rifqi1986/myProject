// routes/pkbRoute.js

const express = require('express');
const router = express.Router();
const db = require("../config/database");
const pkbController = require('../controllers/pkbController');

// Endpoint untuk mendapatkan semua
router.get('/', pkbController.getAllData);

// Endpoint untuk mendapatkanberdasarkan ID
router.get('/:id', pkbController.getDataById);

// Endpoint untuk membuat baru
router.post('/', pkbController.addData);

// Endpoint untuk mengupdate berdasarkan ID
router.patch('/:id', pkbController.updateData);

// Endpoint untuk menghapus berdasarkan ID
router.delete('/:id', pkbController.deleteData);

module.exports = router;
