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
      eartag: '0025',
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_treat: '12/04/2024',
      status: 'reguler',
      diagnosa: 'demam',
      petugas: 'ari',
      obat: 'antibiotik',
      note: 'dirawat dulu',
      foto: 'pic',
      pelapor: 'edi'
    },
    {
      id: 2,
      eartag: '0028',
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_treat: '13/04/2024',
      status: 'reguler',
      diagnosa: 'demam',
      petugas: 'ari',
      obat: 'antibiotik',
      note: 'dirawat dulu',
      foto: 'pic',
      pelapor: 'edi'
    },
    {
      id: 3,
      eartag: '0030',
      rumpun: 'Simmental',
      sex: 'Jantan',
      tgl_treat: '12/04/2024',
      status: 'reguler',
      diagnosa: 'demam',
      petugas: 'edi',
      obat: 'antibiotik',
      note: 'dirawat dulu',
      foto: 'pic',
      pelapor: 'edi'
    },
  ]);
};
