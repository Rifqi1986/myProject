// models/treatmentModel.js

const knex = require('../config/database');

class treatmentModel{
  constructor() {
    this.mytable = 'treatment';
  }

  async getAllData() {
    return knex(this.mytable).select('*');
  }

  async getDataById(id) {
    return knex(this.mytable).where({ id }).first();
  }

  async addData(data) {
    return knex(this.mytable).insert(data).returning('*');
  }

  async updateData(id, Data) {
    return knex(this.mytable).where({ id }).update(Data).returning('*');
  }

  async deleteData(id) {
    return knex(this.mytable).where({ id }).del();
  }
}

module.exports = new treatmentModel();
