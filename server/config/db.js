require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = ()=>{
    mongoose.connect(MONGODB_URI).then(()=>{
        console.log('mongoose connection is on')
    }).catch((error)=>{
        console.log('mongoose connection error', error)
    })
}
module.exports = connectDB