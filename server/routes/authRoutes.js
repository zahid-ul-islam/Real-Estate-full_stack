const express = require('express')
const { signUp } = require('../services/authServices')

const authRoute = express.Router()

authRoute.post('/signup', signUp)



module.exports = {
    authRoute
}