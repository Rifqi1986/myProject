// controllers/kelahiranController.js

const kelahiran = require('../models/kelahiranModel');

class KelahiranController {
  async getAllData(req, res) {
    try {
      const data = await kelahiran.getAllData();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDataById(req, res) {
    try {
      const { id } = req.params;
      const data = await kelahiran.getDataById(id);
      if (!data) {
        return res.status(404).json({ error: 'Data tidak ditemukan..!!' });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addData(req, res) {
    try {
      const newData = req.body;
      const createdData = await kelahiran.addData(newData);
      res.status(201).json(createdData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateData(req, res) {
    try {
      const { id } = req.params;
      const Data = req.body;
      const dataUpdated = await kelahiran.updateData(id, Data);
      res.status(200).json(dataUpdated);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteData(req, res) {
    try {
      const { id } = req.params;
      await kelahiran.deleteData(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new KelahiranController();
