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
        dataSapi_id: 1,
        rumpun: 'Simmental',
        tgl_pkb: '06/03/2024',
        metode: 'palpasi',
        dataPetugas_id: 1,
        hasil: 'positif',
        foto: 'pic',
        dataUsers_id: 4
    },
    {
      id: 2,
      dataSapi_id: 1,
      rumpun: 'Simmental',
      tgl_pkb: '08/03/2024',
      metode: 'usg',
      dataPetugas_id: 1,
      hasil: 'negatif',
      foto: 'pic',
      dataUsers_id: 5,
  },
  {
    id: 3,
    dataSapi_id: 1,
    rumpun: 'Limousin',
    tgl_pkb: '08/03/2024',
    metode: 'palpasi rectal',
    dataPetugas_id: 1,
    hasil: 'positif',
    foto: 'pic',
    dataUsers_id: 3
},
    
  ]);
};
