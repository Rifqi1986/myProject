const obatModel = require("../models/obatModel");


class obatControllers{
   async getdata (req,res){
        const data = await obatModel.getData();
        res.status(200).json(data)
    }
}

module.exports = new obatControllers();