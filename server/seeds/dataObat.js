/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataObat').del()
  await knex('dataObat').insert([
    {nama: 'antibio', jenis:'antibiotik', kode:'A001', expired:'15-02-2024', stok: 50, dataUsers_id:2},
    {nama: 'antipir', jenis:'antipiretik', kode:'A002', expired:'5-02-2024', stok: 40, dataUsers_id:3},
    {nama: 'vitagood', jenis:'vitamin', kode:'A003', expired:'25-02-2024', stok: 60, dataUsers_id:3},    
  ]);
};
