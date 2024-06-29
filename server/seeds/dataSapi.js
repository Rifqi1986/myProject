/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("dataSapi").del();
  await knex("dataSapi").insert([
    {
      id: 1,
      eartag: "001",
      rumpun: "Simmental",
      sex: "Betina",
      tgl_lhr: "01/02/2010",
      dataPejantan_id: 1,
      induk: "7100",
      dataUsers_id: 2,
    },
    {
      id: 2,
      eartag: "002",
      rumpun: "Limousin",
      sex: "Jantan",
      tgl_lhr: "02/02/2010",
      dataPejantan_id: 1,
      induk: "7200",
      dataUsers_id: 3,
    },
    {
      id: 3,
      eartag: "003",
      rumpun: "Simmental",
      sex: "Betina",
      tgl_lhr: "03/02/2010",
      dataPejantan_id: 1,
      induk: "7100",
      dataUsers_id: 3,
    },
  ]);
};
