const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = verifyUser = function(req, res, next){
    if(!req.headers.authorization) {
        return res.status(401).send('authorization header not found')
    }
    let token = req.headers.authorization
    if(token === 'null') {
        return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, config.secretKey)
    if(!payload) {
        return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.user
    next()
}