// models/petugasModel.js

const knex = require("../config/database");

class PetugasModel {
  async getAllData() {
    try {
      const petugas = await knex("dataPetugas").select("*");
      return petugas;
    } catch (error) {
      throw error;
    }
  }

  async getDataById(id) {
    try {
      const data = await knex("dataPetugas").where({ id }).first();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async addData(newData) {
    try {
      const [dataId] = await knex("dataPetugas")
        .insert(newData)
        .returning("id");
      return dataId;
    } catch (error) {
      throw error;
    }
  }

  async updateData(id, Data) {
    try {
      await knex("dataPetugas").where({ id }).update(Data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async deleteData(id) {
    try {
      await knex("dataPetugas").where({ id }).del();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PetugasModel();
