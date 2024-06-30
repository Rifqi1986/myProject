// routes/petugasRoute.js

const express = require("express");
const router = express.Router();
// const petugasController = require("../controllers/petugasController");
const PetugasController = require("../controllers/petugasController");
// Endpoint untuk mendapatkan semua pengguna
router.get("/", PetugasController.getAllData);

// Endpoint untuk mendapatkan pengguna berdasarkan ID
router.get("/:id", PetugasController.getDataById);

// Endpoint untuk membuat pengguna baru
router.post("/add", PetugasController.addData);

// Endpoint untuk memperbarui pengguna berdasarkan ID
router.patch("/:id", PetugasController.updateData);

// Endpoint untuk menghapus pengguna berdasarkan ID
router.delete("/:id", PetugasController.deleteData);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const petugasController = require("../controllers/petugasController");

// // Endpoint untuk mendapatkan semua
// router.get("/petugas", petugasController.getAllData);

// // Endpoint untuk mendapatkan berdasarkan ID
// router.get("/petugas:id", petugasController.getDataById);

// // Endpoint untuk membuat  baru
// router.post("/addpetugas", petugasController.addData);

// // Endpoint untuk mengupdate berdasarkan ID
// router.patch("/petugas:id", petugasController.updateData);

// // Endpoint untuk menghapus berdasarkan ID
// router.delete("/petugas/id", petugasController.deleteData);

// module.exports = router;
