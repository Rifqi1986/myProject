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
      eartag: '006',
      rumpun: 'Simmental',
      eartag_anak: 'a123',
      sex: 'Jantan',
      tgl_lhr: '10/03/2024',
      kondisi_anak: 'sehat',
      kondisi_induk: 'sehat',
      foto: 'pic',
      pelapor: 'ari'
    },
    {
    id: 2,
    eartag: '009',
    rumpun: 'Simmental',
    eartag_anak: 'a124',
    sex: 'Jantan',
    tgl_lhr: '11/03/2024',
    kondisi_anak: 'sehat',
    kondisi_induk: 'sehat',
    foto: 'pic',
    pelapor: 'ari'
    },
    {
      id: 3,
      eartag: '004',
      rumpun: 'Simmental',
      eartag_anak: 'a125',
      sex: 'Jantan',
      tgl_lhr: '12/03/2024',
      kondisi_anak: 'sehat',
      kondisi_induk: 'sehat',
      foto: 'pic',
      pelapor: 'ari'
      }
  ]);
};
