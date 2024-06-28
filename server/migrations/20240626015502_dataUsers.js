/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dataUsers', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable;
        table.string('password').notNullable;
        table.string('role').notNullable;
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('dataUsers');
  
};

