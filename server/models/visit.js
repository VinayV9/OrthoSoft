const mongoDB = require('mongoose')

const visit = mongoDB.Schema({
    adahar : {
        type: String,
        required: [true, "adahar is required"]
    },
    new : {
        type: Boolean,
        required: [true, "new is required"]
    },
    problem : {
        type: String,
        required: [true, "problem is required"]
    },
    done : {
        type: Boolean,
        required: [true, "problem is required"]
    },
    date:{
        type: Date,
        required: [true, "date is required"]
    }
})

module.exports = mongoDB.model('Visit', visit)
