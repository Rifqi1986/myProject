/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('treatment').del()
  await knex('treatment').insert([
    {
      id: 1,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_treat: '12/04/2024',
      status: 'reguler',
      diagnosa: 'demam',
      dataPetugas_id: 1,
      dataObat_id: 1,
      note: 'dirawat dulu',
      foto: 'pic',
      dataUsers_id: 1
    },
    {
      id: 2,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_treat: '13/04/2024',
      status: 'reguler',
      diagnosa: 'demam',
      dataPetugas_id: 1,
      dataObat_id: 1,
      note: 'dirawat dulu',
      foto: 'pic',
      dataUsers_id: 1
    },
    {
      id: 3,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_treat: '12/04/2024',
      status: 'reguler',
      diagnosa: 'demam',
      dataPetugas_id: 1,
      dataObat_id: 1,
      note: 'dirawat dulu',
      foto: 'pic',
      dataUsers_id: 1
    },
  ]);
};
