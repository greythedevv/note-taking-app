const express = require('express');
const app = express()
const noteRoute = require('./routes/noteRoute.js')

const PORT = process.env.PORT || 3100


app.use('/api/notes', noteRoute)



app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})