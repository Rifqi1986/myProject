/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('datasapi', function (table) {
        table.increments('id').primary();
        table.string('eartag').notNullable().unique();
        table.string('rumpun').notNullable();
        table.string('sex').notNullable();
        table.date('tgl-lhr').notNullable();
        table.string('pejantan').notNullable();
        table.string('induk').notNullable();
        table.string('pelapor').notNullable();
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('datasapi');
  
};
