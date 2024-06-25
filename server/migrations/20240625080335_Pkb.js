/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pkb', function (table) {
        table.increments('id').primary();
        table.integer('id_datasapi').unsigned().notNullable().references('id').inTable('datasapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('rumpun').notNullable;
        table.string('metode').notNullable;
        table.integer('id_petugas').unsigned().notNullable().references('id').inTable('petugas').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('hasil').notNullable;
        table.string('foto').notNullable;
        table.string('pelapor').notNullable();
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('pkb');
  
};