/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pkb', function (table) {
        table.increments('id').primary();
        table.integer('dataSapi_id').unsigned().notNullable();
        table.string('rumpun').notNullable();
        table.date('tgl_pkb').notNullable();
        table.string('metode').notNullable;
        table.integer('dataPetugas_id').unsigned().notNullable();
        table.string('hasil').notNullable;
        table.string('foto').notNullable;
        table.integer('dataUsers_id').unsigned().notNullable();
        table.timestamps(true, true);
      });

      table.foreign('dataSapi_id').references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('dataPetugas_id').references('id').inTable('dataPetugas').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('dataUsers_id').references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('pkb');
  
};
