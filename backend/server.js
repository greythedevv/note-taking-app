const express = require('express');
const app = express()

const PORT = process.env.PORT || 3100


app.get("/api/notes", (req, res)=>{
    res.send("you got 5 notes")
})

app.listen(PORT, ()=>{
    console.log(` running on ${PORT}`)
})