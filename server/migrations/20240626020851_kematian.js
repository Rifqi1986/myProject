/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('kematian', function (table) {
        table.increments('id').primary();
        table.string('eartag').notNullable();
        // table.integer('id_dataSapi').unsigned().notNullable().references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('rumpun').notNullable();
        table.string('sex').notNullable();
        table.date('tgl_mati').notNullable();
        table.string('diagnosa').notNullable();
        table.string('note');
        table.string('foto').notNullable();
        table.string('pelapor').notNullable();
        // table.integer('id_dataUsers').unsigned().notNullable().references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
        table.timestamps(true, true);
      });
  

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('kematian');
  
};

