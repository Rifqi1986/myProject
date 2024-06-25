/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('perkawinan', function (table) {
        table.increments('id').primary();
        table.integer('id_datasapi').unsigned().notNullable().references('id').inTable('datasapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('rumpun').notNullable();
        table.date('tgl_kawin').notNullable();
        table.date('tgl_lhr').notNullable();
        table.integer('id_datapejantan').unsigned().notNullable().references('id').inTable('datapejantan').onDelete('CASCADE').onUpdate('CASCADE');
        table.integer('id_petugas').unsigned().notNullable().references('id').inTable('petugas').onDelete('CASCADE').onUpdate('CASCADE');
        });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('perkawinan');
  
};