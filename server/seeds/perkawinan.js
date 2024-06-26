/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('perkawinan').del()
  await knex('perkawinan').insert([
    {id: 1, eartag: '001', rumpun:'Simmental', tgl_kawin:'05/02/2024', pejantan:'boos Hog', petugas:'edi', pelapor:'ari'},
    {id: 2, eartag: '002', rumpun:'Limousin', tgl_kawin:'07/02/2024', pejantan:'lazarus', petugas:'edi', pelapor:'ari'},
    {id: 3, eartag: '003', rumpun:'Simmental', tgl_kawin:'08/02/2024', pejantan:'ankonian', petugas:'ari', pelapor:'edi'}
  ]);
};
