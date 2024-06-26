/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('kelahiran', function (table) {
        table.increments('id').primary();
        table.string('eartag').notNullable();
        // table.integer('id_dataSapi').unsigned().notNullable().references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('rumpun').notNullable();
        table.string('eartag_anak').notNullable;
        table.string('sex').notNullable;
        table.date('tgl_lhr').notNullable;
        table.string('kondisi_anak').notNullable;
        table.string('kondisi_induk').notNullable;
        table.string('foto').notNullable;
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
    return knex.schema.dropTable('kelahiran');
  
};

