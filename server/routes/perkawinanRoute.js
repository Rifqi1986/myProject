// routes/perkawinanRoute.js

const express = require('express');
const router = express.Router();
const db = require("../config/database");
const perkawinanController = require('../controllers/perkawinanController');

// Endpoint untuk mendapatkan semua 
router.get('/', perkawinanController.getAllData);

// Endpoint untuk mendapatkan berdasarkan ID
router.get('/:id', perkawinanController.getDataById);

// Endpoint untuk membuat baru
router.post('/', perkawinanController.addData);

// Endpoint untuk mengupdate  berdasarkan ID
router.patch('/:id', perkawinanController.updateData);

// Endpoint untuk menghapus berdasarkan ID
router.delete('/:id', perkawinanController.deleteData);

module.exports = router;
