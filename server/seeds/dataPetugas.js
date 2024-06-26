/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataPetugas').del()
  await knex('dataPetugas').insert([
    {id: 1, nama: 'ari', jabatan:'wasbitnak', skill:'IB'},
    {id: 2, nama: 'edi', jabatan:'paramedik', skill:'Pkb'},
    {id: 3, nama: 'abi', jabatan:'medik', skill:'Atr'},
  ]);
};
