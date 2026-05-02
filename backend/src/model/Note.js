const mongoose = require('mongoose')

// create a note schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

}, { timestamps: true })

// create a note model
const Note = mongoose.model('Note', noteSchema)

module.exports = Note