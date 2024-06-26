/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataUsers').del()
  await knex('dataUsers').insert([
    {id: 1, nama: 'ari', email:'ari@gmail.com', role:'admin'},
    {id: 2, nama: 'bari', email:'bari@gmail.com', role:'users'},
    {id: 3, nama: 'ceri', email:'ceri@gmail.com', role:'users'}
  ]);
};
