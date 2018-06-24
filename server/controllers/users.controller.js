const express = require('express')
const router = express.Router()
const userSvc = require('../services/user.service')
const tokenCheck = require('../middlewares/tokenCheck')

router.post('/register', userSvc.registerUser)
router.post('/visit', userSvc.registerVisit)

router.get('/', userSvc.getUsers)
router.get('/wait-list', userSvc.getWaitList)

module.exports = router
