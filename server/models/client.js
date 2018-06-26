const mongoDB = require('mongoose')

const client = mongoDB.Schema({
    username : {
        type: String,
        required: [true, "username is required"]
    },
    avtar:{
        type: String,
        required: [true, "image url required"],
        default: "https://www.w3schools.com/w3images/avatar6.png"
    },
    email : {
        type: String,
        required: [true, "email is required"]
    },
    password : {
        type: String,
        required: [true, "password is required"]
    },
    role :{
        type: String,
        required: [true, "role is required"]
    }
    
})

module.exports = mongoDB.model('Client', client)
