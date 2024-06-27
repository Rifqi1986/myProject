/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataObat').del()
  await knex('dataObat').insert([
    {id: 1, nama: 'antibio', jenis:'antibiotik', kode:'A001', expired:'10/11/2024', stok: 50, dataUsers_id:1},
    {id: 2, nama: 'antipir', jenis:'antipiretik', kode:'A002', expired:'12/11/2024', stok: 40, dataUsers_id:1},
    {id: 3, nama: 'vitagood', jenis:'vitamin', kode:'A003', expired:'15/11/2024', stok: 60, dataUsers_id:1},    
  ]);
};
