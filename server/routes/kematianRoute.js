// routes/kematianRoute.js

const express = require('express');
const router = express.Router();
const db = require("../config/database")
const KematianController = require('../controllers/KematianControllers');

// Endpoint untuk mendapatkan semua 
router.get('/', KematianController.getAllData);

// Endpoint untuk mendapatkan berdasarkan ID
router.get('/:id', KematianController.getDataById);

// Endpoint untuk membuat baru
router.post('/', KematianController.addData);

// Endpoint untuk mengupdate  berdasarkan ID
router.patch('/:id', KematianController.updateData);

// Endpoint untuk menghapus berdasarkan ID
router.delete('/:id', KematianController.deleteData);

module.exports = router;
