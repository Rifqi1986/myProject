const db = require("../config/db")

class pejantanModel{
    getData(){
  const data = db('dataPejantan') 
  return data     
    }

}

module.exports = new pejantanModel();