/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('treatment', function (table) {
        table.increments('id').primary();
        table.integer('dataSapi_id').unsigned().notNullable();
        table.string('rumpun').notNullable();
        table.string('sex').notNullable();
        table.date('tgl_treat').notNullable();
        table.string('status').notNullable();
        table.string('diagnosa').notNullable();
        table.integer('dataPetugas_id').unsigned().notNullable();
        table.integer('dataObat_id').unsigned().notNullable();
        table.string('note').notNullable();
        table.string('foto').notNullable();
        table.integer('dataUsers_id').unsigned().notNullable();
        table.timestamps(true, true);
      });

      table.foreign('dataSapi_id').references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('dataPetugas_id').references('id').inTable('dataPetugas').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('dataObat_id').references('id').inTable('dataObat').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('dataUsers_id').references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('treatment');
  
};

