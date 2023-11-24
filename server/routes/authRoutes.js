const express = require('express')
const { signUp, signIn } = require('../services/authServices')

const authRoute = express.Router()

authRoute.post('/signup', signUp)
authRoute.post('/signin', signIn)



module.exports = {
    authRoute
}