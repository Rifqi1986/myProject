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
      eartag: '0034',
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_mati: '10/04/2024',
      diagnosa: 'tympani',
      note: 'lalukan nekropsi',
      foto: 'pic',
      pelapor: 'ari'
    },
    {
      id: 2,
      eartag: '0042',
      rumpun: 'Simmental',
      sex: 'Betina',
      tgl_mati: '10/04/2024',
      diagnosa: 'bloat',
      note: 'lalukan nekropsi',
      foto: 'pic',
      pelapor: 'ari'
    },
    {
      id: 3,
      eartag: '0044',
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_mati: '10/04/2024',
      diagnosa: 'Babesiosis',
      note: 'lalukan nekropsi',
      foto: 'pic',
      pelapor: 'edi'
    },
  ]);
};
