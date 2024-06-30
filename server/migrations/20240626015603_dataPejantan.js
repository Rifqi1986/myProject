/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dataPejantan', function (table) {
        table.increments('id').primary();
        table.string('nama').notNullable;
        table.string('rumpun').notNullable;
        table.string('asal').notNullable;
        table.string('kode').notNullable;
        table.integer('stok').notNullable;
        table.integer('dataUsers_id').unsigned().notNullable().references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
        table.timestamps(true, true);
      });
      // table.foreign('dataUsers_id')
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('dataPejantan');
  
};

