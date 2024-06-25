const dataSapiModel = require('../models/dataSapiModel');


class dataSapiControler{
   async getdata (req,res){
        const data = await dataSapiModel.getData();
        res.status(200).json(data)
    }
}

module.exports = new dataSapiControler();