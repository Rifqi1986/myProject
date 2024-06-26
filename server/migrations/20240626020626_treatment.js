/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('treatment', function (table) {
        table.increments('id').primary();
        table.string('eartag').notNullable();
        // table.integer('id_dataSapi').unsigned().notNullable().references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('rumpun').notNullable();
        table.string('sex').notNullable();
        table.date('tgl_treat').notNullable();
        table.string('status').notNullable();
        table.string('diagnosa').notNullable();
        table.string('petugas').notNullable();
        // table.integer('id_dataPetugas').unsigned().notNullable().references('id').inTable('dataPetugas').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('obat').notNullable();
        // table.integer('id_dataObat').unsigned().notNullable().references('id').inTable('dataObat').onDelete('CASCADE').onUpdate('CASCADE');
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
    return knex.schema.dropTable('treatment');
  
};

