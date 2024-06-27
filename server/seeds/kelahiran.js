/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kelahiran').del()
  await knex('kelahiran').insert([
    {
      id: 1,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      eartag_anak: 'a123',
      sex: 'Jantan',
      tgl_lhr: '10/03/2024',
      kondisi_anak: 'sehat',
      kondisi_induk: 'sehat',
      foto: 'pic',
      dataUsers_id: 1
    },
    {
    id: 2,
    dataSapi_id: 1,
    rumpun: 'Simmental',
    eartag_anak: 'a124',
    sex: 'Jantan',
    tgl_lhr: '11/03/2024',
    kondisi_anak: 'sehat',
    kondisi_induk: 'sehat',
    foto: 'pic',
    dataUsers_id: 1
    },
    {
      id: 3,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      eartag_anak: 'a125',
      sex: 'Jantan',
      tgl_lhr: '12/03/2024',
      kondisi_anak: 'sehat',
      kondisi_induk: 'sehat',
      foto: 'pic',
      dataUsers_id: 1
      }
  ]);
};
