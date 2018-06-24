const mongoDB = require('mongoose')

const visit = mongoDB.Schema({
    adahar : {
        type: String,
        ref: 'User',
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
    date:{
        type: Date,
        required: [true, "date is required"],
        default: Date.now
    }
})

function autoPopulate(next){
      this.populate('adahar')
      next()
}

visit.pre('find',autoPopulate);

module.exports = mongoDB.model('Visit', visit)
