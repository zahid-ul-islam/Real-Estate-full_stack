const express = require('express')
const app = express()
const connectDB = require('./config/db')
const { userRoute } = require('./routes/userRoutes')
const { authRoute } = require('./routes/authRoutes')

require('dotenv').config()
app.use(express.json())



connectDB()
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

app.use('/api', userRoute)
app.use('/api', authRoute)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});