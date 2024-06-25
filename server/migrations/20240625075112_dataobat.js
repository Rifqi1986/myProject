/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dataobat', function (table) {
        table.increments('id').primary();
        table.string('nama').notNullable;
        table.string('jenis').notNullable;
        table.string('kode').notNullable;
        table.date('expired').notNullable;
        table.integer('stok').notNullable;
        table.string('pelapor').notNullable();
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('dataobat');

};
