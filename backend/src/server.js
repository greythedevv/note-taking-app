const express = require('express');
const app = express()
const noteRoute = require('./routes/noteRoute.js')
const connectDB = require('./config/db.js')
const dotenv = require('dotenv')
const rateLimiter = require('./middleware/rateLimiter.js')

dotenv.config()



const PORT = process.env.PORT || 3100
// middleware
app.use(express.json())

// app.use((req, res, next)=>{
//     console.log(`${req.method} ${req.url}`)
//     next()
// })
app.use(rateLimiter)

// endpoints
app.use('/api/notes', noteRoute)

connectDB().then(()=>{
    console.log("Database connected, starting server...")
    app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})
})
