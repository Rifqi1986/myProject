// controllers/dataSapiController.js

const dataSapiModel = require('../models/dataSapiModel');

class dataSapiController {
  async getAllData(req, res) {
    try {
      const data = await dataSapiModel.getAllData();
      res.render('page/datasapi', { data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDataById(req, res) {
    const dataId = req.params.id;
    try {
      const data = await dataSapiModel.getDataById(dataId);
      if (!data) {
        return res.status(404).json({ error: 'Data not found' });
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addData(req, res) {
    const newData = req.body;
    try {
      const dataId = await dataSapiModel.addData(newData);
      res.status(201).json({ id: dataId, message: 'Data created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateData(req, res) {
    const dataId = req.params.id;
    const Data = req.body;
    try {
      const success = await dataSapiModel.updateData(dataId, Data);
      if (!success) {
        return res.status(404).json({ error: 'Data not found or data not updated' });
      }
      res.json({ message: 'Data updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteData(req, res) {
    const dataId = req.params.id;
    try {
      const success = await dataSapiModel.deleteData(dataId);
      if (!success) {
        return res.status(404).json({ error: 'Data not found or not deleted' });
      }
      res.json({ message: 'Data deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new dataSapiController();
