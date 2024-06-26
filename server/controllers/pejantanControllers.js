const pejantanModel = require("../models/pejantanModel");


class pejantanController{
   async getdata (req,res){
        const data = await pejantanModel.getData();
        res.status(200).json(data)
    }
}

module.exports = new pejantanController();