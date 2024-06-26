/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataPejantan').del()
  await knex('dataPejantan').insert([
    {id: 1, nama: 'bosh hoog', rumpun:'Simmental', asal:'Canada', kode:'0200', stok:1000,pelapor:'edi'},
    {id: 2, nama: 'Lazarus', rumpun:'Limousin', asal:'Canada', kode:'0201', stok:500,pelapor:'adi'},
    {id: 3, nama: 'accumulator', rumpun:'Limousin', asal:'Canada', kode:'0201', stok:300,pelapor:'ari'}
  ]);
};
