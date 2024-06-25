/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('petugas', function (table) {
        table.increments('id').primary();
        table.string('nama').notNullable;
        table.string('jabatan').notNullable;
        table.string('skill').notNullable;
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('petugas');
  
};
