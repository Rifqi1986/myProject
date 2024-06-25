const db = require("../config/db")

class DataSapiModel{
    getData(){
  const data = db('datasapi') 
  return data     
    }

}

module.exports = new DataSapiModel();