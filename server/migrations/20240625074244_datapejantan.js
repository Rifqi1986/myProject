/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('datapejantan', function (table) {
        table.increments('id').primary();
        table.string('nama').notNullable;
        table.string('rumpun').notNullable;
        table.string('asal').notNullable;
        table.string('kode').notNullable;
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
   return knex.schema.dropTable('datapejantan');
  
};
