/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('perkawinan').del()
  await knex('perkawinan').insert([
    {id: 1, dataSapi_id: 1, rumpun:'Simmental', tgl_kawin:'05/02/2024', dataPejantan_id:1, dataPetugas_id:1, dataUsers_id:1},
    {id: 2, dataSapi_id: 1, rumpun:'Limousin', tgl_kawin:'07/02/2024', dataPejantan_id:1, dataPetugas_id:1, dataUsers_id:1},
    {id: 3, dataSapi_id: 1, rumpun:'Simmental', tgl_kawin:'08/02/2024', dataPejantan_id:1, dataPetugas_id:1, dataUsers_id:1}
  ]);
};
