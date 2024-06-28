// routes/petugasRoute.js

const express = require('express');
const router = express.Router();
const db = require("../config/database");
const petugasController = require('../controllers/petugasController');

// Endpoint untuk mendapatkan semua
router.get('/', petugasController.getAllData);

// Endpoint untuk mendapatkan berdasarkan ID
router.get('/:id', petugasController.getDataById);

// Endpoint untuk membuat  baru
router.post('/', petugasController.addData);

// Endpoint untuk mengupdate berdasarkan ID
router.patch('/:id', petugasController.updateData);

// Endpoint untuk menghapus berdasarkan ID
router.delete('/:id', petugasController.deleteData);

module.exports = router;
