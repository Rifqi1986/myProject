const db = require("../config/db")

class DataSapiModel{
    getData(){
  const data = db('dataSapi') 
  return data     
    }

}

module.exports = new DataSapiModel();