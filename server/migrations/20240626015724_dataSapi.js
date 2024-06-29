/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dataSapi', function (table) {
        table.increments('id').primary();
        table.string('eartag').notNullable().unique();
        table.string('rumpun').notNullable();
        table.string('sex').notNullable();
        table.date('tgl_lhr').notNullable();
        table.integer('dataPejantan_id').unsigned().notNullable().references('id').inTable('dataPejantan').onDelete('CASCADE').onUpdate('CASCADE');
        table.string('induk');
        table.integer('dataUsers_id').unsigned().notNullable().references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
        table.timestamps(true, true);
        
      });
      
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('dataSapi');
  
};

