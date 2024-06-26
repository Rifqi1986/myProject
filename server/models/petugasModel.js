const db = require("../config/db")

class petugasModel{
    getData(){
  const data = db('dataPetugas') 
  return data     
    }

}

module.exports = new petugasModel();