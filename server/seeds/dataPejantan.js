/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataPejantan').del()
  await knex('dataPejantan').insert([
    {id: 1, nama: 'bosh hoog', rumpun:'Simmental', asal:'Canada', kode:'0200', stok:1000,dataUsers_id:2},
    {id: 2, nama: 'Lazarus', rumpun:'Limousin', asal:'Canada', kode:'0201', stok:500,dataUsers_id:3},
    {id: 3, nama: 'accumulator', rumpun:'Limousin', asal:'Canada', kode:'0201', stok:300,dataUsers_id:3}
  ]);
};
