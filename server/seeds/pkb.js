/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pkb').del()
  await knex('pkb').insert([
    {
        id: 1,
        eartag: '003',
        rumpun: 'Simmental',
        tgl_pkb: '06/03/2024',
        metode: 'palpasi',
        petugas: 'ari',
        hasil: 'positif',
        foto: 'pic',
        pelapor: 'ari'
    },
    {
      id: 2,
      eartag: '005',
      rumpun: 'Simmental',
      tgl_pkb: '08/03/2024',
      metode: 'usg',
      petugas: 'andi',
      hasil: 'negatif',
      foto: 'pic',
      pelapor: 'andi',
  },
  {
    id: 3,
    eartag: '005',
    rumpun: 'Limousin',
    tgl_pkb: '08/03/2024',
    metode: 'palpasi rectal',
    petugas: 'edi',
    hasil: 'positif',
    foto: 'pic',
    pelapor: 'edi'
},
    
  ]);
};
