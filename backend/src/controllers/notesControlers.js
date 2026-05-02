const Note = require('../model/Note.js')

module.exports = {
    // get all notes
    getNotes: async (_, res) => {
       try{
            const notes = await Note.find().sort({ createdAt: -1 })
            res.status(200).json(notes)

       }catch (error){
        console.error("Error in getNotes", error);
        res.status(500).json({message: "Error fetching notes", error: error.message})
       }
    },

    // create note
    createNote: async (req, res) => {
        try{
            const { title, content } = req.body
            if (!title || !content) {
                return res.status(400).json({ message: "Title and content are required" })
            }
            const note = new Note(req.body)
            await note.save()
            res.status(201).json(note)
        }catch (error){
            console.error("Error in createNote", error);
            res.status(400).json({message: "Error creating note", error: error.message})
        }
    }
};

// get note by id
module.exports.getNoteById = async(req, res)=>{
    try{
        const notes = await Note .findById(req.params.id)
        if (!notes) {
            return res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in getNoteById", error);
        res.status(400).json({message: "Error fetching note", error: error.message})
    }
}

// update note
module.exports.updateNote =  async (req, res) => {
    try{
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!note) {
            return res.status(404).json({ message: "Note not found" })
        }

        res.status(200).json(note)
    }catch (error){
        console.error("Error in updateNote", error);
        res.status(400).json({message: "Error updating note", error: error.message})
    }
};

// delete note
module.exports.deleteNote = async (req, res) => {
    try{
        const note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Note deleted", note})
    }catch (error){
        console.error("Error in deleteNote", error);
        res.status(400).json({message: "Error deleting note", error: error.message})
    }
};

