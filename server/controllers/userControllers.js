const userModel = require('../models/userModel');


class UserControllers{
   async getdata (req,res){
        const data = await userModel.getData();
        res.status(200).json(data)
    }
}

module.exports = new UserControllers();