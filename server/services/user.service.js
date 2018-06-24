const User = require('../models/user')
const Visit = require('../models/visit')
const config = require('../config/config')
const userSvc = {}

module.exports = userSvc

userSvc.registerUser = (req, res) => {
    let user = req.body
    user = new User(user)
    user.save((err, post) => {
        if(err){
            throw err
        }else{
            res.status(200).send({error:false})
        }
    }) 
}

userSvc.getUsers = (req, res) => {
    User.find((err, posts) => {
        if(err){
            throw err
        }else{
            res.status(200).send({
                    error : false, 
                    data : posts
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
    const start = new Date()
    const end = new Date()

    start.setHours(0,0,0,0)
    end.setHours(23,59,59,999)

    Visit.find({created_on: {$gte: start, $lt: end}}, (err, list) => {
        if(err){
            throw err
        }else{
            res.status(200).send({error : false, data : list})
        }
    })
}
