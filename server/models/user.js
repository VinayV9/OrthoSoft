const mongoDB = require('mongoose')

const user = mongoDB.Schema({
    name : {
        type: String,
        required: [true, "username is required"]
    },
    avtar:{
        type: String,
        required: [true, "image url required"],
        default: "https://www.w3schools.com/w3images/avatar6.png"
    },
    age : {
        type: Number,
        required: [true, "age is required"],
        select: false
    },
    place : {
        type: String,
        required: [true, "place is required"],
        select: false
    },
    adahar : {
        type: String,
        required: [true, "adahar is required"],
        select: false
    },
    number : {
        type: Number,
        required: [true, "number is required"],
        select: false
    },
    gender : {
        type: String,
        required: [true, "gender is required"],
        select: false
    }
})


module.exports = mongoDB.model('User', user)