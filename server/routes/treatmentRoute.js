// routes/treatmentRoute.js

const express = require('express');
const router = express.Router();
const db = require("../config/database")
const TreatmentController = require('../controllers/treatmentControllers');

// Endpoint untuk mendapatkan semua 
router.get('/', TreatmentController.getAllData);

// Endpoint untuk mendapatkanberdasarkan ID
router.get('/:id', TreatmentController.getDataById);

// Endpoint untuk membuat baru
router.post('/', TreatmentController.addData);

// Endpoint untuk mengupdate berdasarkan ID
router.patch('/:id', TreatmentController.updateData);

// Endpoint untuk menghapus berdasarkan ID
router.delete('/:id', TreatmentController.deleteData);

module.exports = router;
