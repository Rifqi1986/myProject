const db = require("../config/database");

class dataSapiModel {
  async getAllData() {
    try {
      const data = await db("dataSapi").select("*");
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getDataById(id) {
    try {
      const data = await db("dataSapi").where({ id }).first();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async addData(newData) {
    try {
      const [dataId] = await db("dataSapi").insert(newData).returning("id");
      return dataId;
    } catch (error) {
      throw error;
    }
  }

  async updateData(id, newData) {
    try {
      await db("dataSapi").where({ id }).update(newData);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async deleteData(id) {
    try {
      await db("dataSapi").where({ id }).del();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new dataSapiModel();
