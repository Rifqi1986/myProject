// models/pejantanModel.js

const knex = require('../config/database');

class PejantanModel {
  constructor() {
    this.table = 'dataPejantan';
  }

  async getAllData() {
    return knex(this.table).select('*');
  }

  async getDataById(id) {
    return knex(this.table).where({ id }).first();
  }

  async addData(data) {
    return knex(this.table).insert(data).returning('*');
  }

  async updateData(id, Data) {
    return knex(this.table).where({ id }).update(Data).returning('*');
  }

  async deleteData(id) {
    return knex(this.table).where({ id }).del();
  }
}

module.exports = new PejantanModel();
