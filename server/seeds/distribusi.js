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
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_jual: '08/04/2024',
      status: 'bibit',
      billing: '1253468562',
      foto: 'pic',
      dataUsers_id: 1
    },
    {
      id: 2,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_jual: '10/04/2024',
      status: 'non bibit',
      billing: '1681674268',
      foto: 'pic',
      dataUsers_id: 1
    },
    {
      id: 3,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_jual: '08/04/2024',
      status: 'bibit',
      billing: '359864215',
      foto: 'pic',
      dataUsers_id: 1
    },
    
  ]);
};
