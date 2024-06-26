const db = require("../config/db")

class UserModel{
    getData(){
  const data = db('dataUsers') 
  return data     
    }

}

module.exports = new UserModel();