/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataUsers').del()
  await knex('dataUsers').insert([
    {id: 1, username: 'rifqi', password:'123456', role:'admin'},
    {id: 2, username: 'elfajri', password:'123456', role:'user'},
    {id: 3, username: 'fajri', password:'123456', role:'user'}
  ]);
};

