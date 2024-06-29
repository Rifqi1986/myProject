// routes/dataSapiRoute.js

const express = require("express");
const router = express.Router();
const dataSapiController = require("../controllers/dataSapiControllers");

// Endpoint untuk mendapatkan semua
router.get("/", dataSapiController.getAllData);

// Endpoint untuk mendapatkan  berdasarkan ID
router.get("/:id", dataSapiController.getDataById);

// Endpoint untuk membuat baru
router.post("/", dataSapiController.addData);

// Endpoint untuk mengupdate berdasarkan ID
router.patch("/:id", dataSapiController.updateData);

// Endpoint untuk menghapus  berdasarkan ID
router.delete("/:id", dataSapiController.deleteData);

module.exports = router;
