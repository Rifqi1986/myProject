/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('perkawinan', function (table) {
        table.increments('id').primary();
        table.string('eartag').notNullable();
        // table.integer('id_dataSapi').unsigned().notNullable().references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('rumpun').notNullable();
        table.date('tgl_kawin').notNullable();
        table.string('pejantan').notNullable();
        // table.integer('id_dataPejantan').unsigned().notNullable().references('id').inTable('dataPejantan').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('petugas').notNullable();
        // table.integer('id_dataPetugas').unsigned().notNullable().references('id').inTable('dataPetugas').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('pelapor').notNullable();
        // table.integer('id_dataUsers').unsigned().notNullable().references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
        });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('perkawinan');
  
};
