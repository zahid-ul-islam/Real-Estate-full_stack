const express = require('express')
const { getUser } = require('../services/userServices')

const userRoute = express.Router()

userRoute.get('/users', getUser)


module.exports = {
    userRoute
}