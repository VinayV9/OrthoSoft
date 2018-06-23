const mongoDB = require('mongoose')

const post = mongoDB.Schema({
    userId : {
        type: mongoDB.Schema.ObjectId,
        ref: 'User',
        required: [true, "userId is required"]
    },
    data : {
        type: String,
        required: [true, "data is required"]
    },
    created_at:{
        type: Date,
        required: [true, "date is required"],
        default: Date.now
    }
})

function autoPopulate(next){
      this.populate('userId')
      next()
}

post.pre('find',autoPopulate);

module.exports = mongoDB.model('Post', post)