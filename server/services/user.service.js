const User = require('../models/user')
const Visit = require('../models/visit')
const config = require('../config/config')
const userSvc = {}

module.exports = userSvc

userSvc.registerUser = (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save((err, post) => {
        if(err){
            throw err
        }else{
            res.status(200).send({error:false})
        }
    }) 
}

userSvc.getUsers = (req, res) => {
    User.find((err, users) => {
        if(err){
            throw err
        }else{
            res.status(200).send({
                    error : false, 
                    data : users
                })
        }
    })
}

userSvc.registerVisit = (req, res) => {
    const visit = new Visit(req.body)
    visit.save((err, data) => {
         if(err){
             throw err
         }else{
             res.status(200).send({error : false})
         }
    })
}

userSvc.getWaitList = (req, res) => {
    
    User.aggregate(
        [{
            $lookup: {
                from: "visits",
                localField: "adahar",
                foreignField: "adahar",
                as: "visits"
            },
        }, 
        {
            $match : {
                "visits" : { $elemMatch : {
                                "date":{ 
                                    $lt: new Date(), 
                                    $gte: new Date(new Date().setDate(new Date().getDate()-1))
                                }
                           }
                }
            }
        }])
    .exec((err, list) => {
        if(err){
            throw err
        }else{
            res.status(200).send(list)
        }
    })
    
}
