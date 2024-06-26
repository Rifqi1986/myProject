const petugasModel = require("../models/petugasModel");


class petugasController{
   async getdata (req,res){
        const data = await petugasModel.getData();
        res.status(200).json(data)
    }
}

module.exports = new petugasController();