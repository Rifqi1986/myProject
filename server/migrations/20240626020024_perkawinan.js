/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('perkawinan', function (table) {
        
        table.increments('id').primary();
        table.integer('dataSapi_id').unsigned().notNullable();
        table.string('rumpun').notNullable();
        table.date('tgl_kawin').notNullable();
        table.integer('dataPejantan_id').unsigned().notNullable();
        table.integer('dataPetugas_id').unsigned().notNullable();
        table.integer('dataUsers_id').unsigned().notNullable();

        });

        table.foreign('dataSapi_id').references('id').inTable('dataSapi').onDelete('CASCADE').onUpdate('CASCADE');
        table.foreign('dataPejantan_id').references('id').inTable('dataPejantan').onDelete('CASCADE').onUpdate('CASCADE');
        table.foreign('dataPetugas_id').references('id').inTable('dataPetugas').onDelete('CASCADE').onUpdate('CASCADE');
        table.foreign('dataUsers_id').references('id').inTable('dataUsers').onDelete('CASCADE').onUpdate('CASCADE');
}; 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('perkawinan');
  
};
