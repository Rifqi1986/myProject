const db = require("../config/db")

class obatModel{
    getData(){
  const data = db('dataObat') 
  return data     
    }

}

module.exports = new obatModel();