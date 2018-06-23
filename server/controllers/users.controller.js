const express = require('express')
const router = express.Router()
const authSvc = require('../services/auth.service')
const userSvc = require('../services/user.service')
const tokenCheck = require('../middlewares/tokenCheck')

router.post('/register', authSvc.register)

router.post('/login', authSvc.login)

router.post('/post', tokenCheck, userSvc.insertPost)

router.post('/posts', userSvc.getPosts)

module.exports = router