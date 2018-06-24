const express = require('express')
const router = express.Router()
const userSvc = require('../services/user.service')
const tokenCheck = require('../middlewares/tokenCheck')

router.post('/register', userSvc.register)
router.post('/visit', userSvc.visit)

router.get('/', userSvc.getUsers)
router.get('/wait-list', userSvc.getWaitList)

module.exports = router
