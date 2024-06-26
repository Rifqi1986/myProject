// controllers/petugasController.js

const Petugas = require("../models/petugasModel");

class PetugasController {
  static async getAllData(req, res) {
    try {
      console.log("masuk");
      const data = await Petugas.getAllData();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getDataById(req, res) {
    try {
      const { id } = req.params;
      const data = await Petugas.getDataById(id);
      if (!data) {
        return res.status(404).json({ error: "Data tidak ditemukan..!!" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addData(req, res) {
    try {
      const newData = req.body;
      const createdData = await Petugas.addData(newData);
      res.status(201).json(createdData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateData(req, res) {
    try {
      const { id } = req.params;
      const Data = req.body;
      const dataUpdated = await Petugas.updateData(id, Data);
      res.status(200).json(dataUpdated);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteData(req, res) {
    try {
      const { id } = req.params;
      await Petugas.deleteData(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PetugasController;
