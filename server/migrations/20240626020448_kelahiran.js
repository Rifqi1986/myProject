/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('kelahiran', function (table) {
        table.increments('id').primary();
        table.integer('dataSapi_id').unsigned().notNullable().references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('rumpun').notNullable();
        table.string('eartag_anak').notNullable;
        table.string('sex').notNullable;
        table.date('tgl_lhr').notNullable;
        table.string('kondisi_anak').notNullable;
        table.string('kondisi_induk').notNullable;
        table.string('foto').notNullable;
        table.integer('dataUsers_id').unsigned().notNullable().references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
        table.timestamps(true, true);
      });

    //   table.foreign('dataSapi_id').references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
    //   table.foreign('dataUsers_id').references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('kelahiran');
  
};

