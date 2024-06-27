// routes/obatRoute.js

const express = require('express');
const router = express.Router();
const ObatController = require('../controllers/obatControllers');
const db = require("../config/database")

// Endpoint untuk mendapatkan semua 
router.get('/', ObatController.getAllData);

// Endpoint untuk mendapatkan  berdasarkan ID
router.get('/:id', ObatController.getDataById);

// Endpoint untuk membuat  baru
router.post('/', ObatController.addData);

// Endpoint untuk mengupdate berdasarkan ID
router.patch('/:id', ObatController.updateData);

// Endpoint untuk menghapus  berdasarkan ID
router.delete('/:id', ObatController.deleteData);

module.exports = router;
