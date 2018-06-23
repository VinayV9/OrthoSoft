const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('../config/config')
const authSvc = {}


module.exports = authSvc



//define functions

authSvc.register = function(req, res){
    let user = req.body

    User.find({email : user.email}, (err, data) => {

        if(err){ throw err }
        if(data.length === 0){
            user.password = authSvc.createHash(user.password)
            let newUser = new User(user)
            let token = authSvc.createToken(newUser._id)
            newUser.save((err, data) => {
                if(err){ throw err }
                res.status(200).send({
                    "token" :token,
                    "username":data.username,
                    "avtar":data.avtar
                }) 
            }) 
        }else{
            res.send("already account exit") 
        }  
    })
}

authSvc.login = function(req, res){
    let user = req.body
    User.findOne({email : user.email}).select('+password').exec((err, data) => {
        if(err){ throw err }
        else{
            if(data){
                if(bcrypt.compareSync(user.password, data.password)){
                    let token = authSvc.createToken(data._id)
                    res.status(200).send({
                        token :token,
                        username:data.username,
                        avtar:data.avtar
                    }) 
                }else{ res.status(401).send("unauthorized") }
            }else{ res.status(401).send("unauthorized") }
        }
    })
}

authSvc.createHash = function(password){
  return bcrypt.hashSync(password, 10)
}

authSvc.createToken = function(userId){
    return jwt.sign({ user: userId }, config.secretKey)
}
