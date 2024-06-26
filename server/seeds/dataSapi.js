/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dataSapi').del()
  await knex('dataSapi').insert([
    {id: 1, eartag: '001', rumpun:'Simmental', sex:'Betina', tgl_lhr:'01/02/2010', pejantan: 'lazarus', induk:'7100', pelapor:'adi'},
    {id: 2, eartag: '002', rumpun:'Limousin', sex:'Jantan', tgl_lhr:'02/02/2010', pejantan: 'ankonian', induk:'7200', pelapor:'ari'},
    {id: 3, eartag: '003', rumpun:'Simmental', sex:'Betina', tgl_lhr:'03/02/2010', pejantan: 'boss hoog', induk:'7100', pelapor:'edi'}
  ]);
};
