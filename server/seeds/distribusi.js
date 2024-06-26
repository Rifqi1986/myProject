/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('distribusi').del()
  await knex('distribusi').insert([
    {
      id: 1,
      eartag: '0046',
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_jual: '08/04/2024',
      status: 'bibit',
      billing: '1253468562',
      foto: 'pic',
      pelapor: 'ari'
    },
    {
      id: 2,
      eartag: '0023',
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_jual: '10/04/2024',
      status: 'non bibit',
      billing: '1681674268',
      foto: 'pic',
      pelapor: 'ari'
    },
    {
      id: 3,
      eartag: '0065',
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_jual: '08/04/2024',
      status: 'bibit',
      billing: '359864215',
      foto: 'pic',
      pelapor: 'ari'
    },
    
  ]);
};
