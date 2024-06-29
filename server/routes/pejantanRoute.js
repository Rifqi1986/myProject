// routes/users.js

const express = require("express");
const router = express.Router();
const PejantanController = require("../controllers/pejantanControllers");

// Endpoint untuk mendapatkan semua
router.get("/", PejantanController.getAllData);

// Endpoint untuk mendapatkan berdasarkan ID
router.get("/:id", PejantanController.getDataById);

// Endpoint untuk membuat baru
router.post("/", PejantanController.addData);

// Endpoint untuk mengupdate berdasarkan ID
router.patch("/:id", PejantanController.updateData);

// Endpoint untuk menghapus  berdasarkan ID
router.delete("/:id", PejantanController.deleteData);

module.exports = router;
