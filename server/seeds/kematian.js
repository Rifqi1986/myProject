/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kematian').del()
  await knex('kematian').insert([
    {
      id: 1,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_mati: '10/04/2024',
      diagnosa: 'tympani',
      note: 'lalukan nekropsi',
      foto: 'pic',
      dataUsers_id: 1
    },
    {
      id: 2,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_mati: '10/04/2024',
      diagnosa: 'bloat',
      note: 'lalukan nekropsi',
      foto: 'pic',
      dataUsers_id: 1
    },
    {
      id: 3,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_mati: '10/04/2024',
      diagnosa: 'Babesiosis',
      note: 'lalukan nekropsi',
      foto: 'pic',
      dataUsers_id: 1
    },
  ]);
};
