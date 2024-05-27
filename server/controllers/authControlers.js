class authControler {
    static login (req,res){
        const {username, password} = req.body
        res.status(201).json({
            "message" : `selamat datang ${username}`
        })

    }
}
module.exports = authControler